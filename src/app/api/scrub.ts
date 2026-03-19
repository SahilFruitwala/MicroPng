import { createFileRoute } from '@tanstack/react-router'
import sharp from 'sharp'
import { getPostHogClient } from '@/utils/posthog-server'

export const Route = createFileRoute('/api/scrub')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const formData = await request.formData()
          const file = formData.get('file') as File | null

          const url = new URL(request.url)
          const action = url.searchParams.get('action')

          if (!file) {
            return Response.json({ error: 'No file provided' }, { status: 400 })
          }

          const buffer = Buffer.from(await file.arrayBuffer())

          if (action === 'view') {
            const metadata = await sharp(buffer).metadata()
            return Response.json({ metadata })
          } else if (action === 'scrub') {
            const image = sharp(buffer)
            const metadata = await image.metadata()
            const format = metadata.format

            let pipeline: sharp.Sharp

            // Logic to preserve quality based on format
            if (format === 'jpeg' || format === 'jpg') {
              pipeline = image.jpeg({
                quality: 100,
                chromaSubsampling: '4:4:4',
              })
            } else if (format === 'png') {
              pipeline = image.png({ compressionLevel: 9 })
            } else if (format === 'webp') {
              pipeline = image.webp({ quality: 100, lossless: true })
            } else {
              // Fallback: just pass through if supported
              pipeline = image
            }

            // Strip metadata: Sharp strips metadata by default unless .withMetadata() is called.
            const scrubbedBuffer = await pipeline.toBuffer()

            return new Response(scrubbedBuffer, {
              headers: {
                'Content-Type': file.type,
                'Content-Disposition': `attachment; filename="scrubbed-${file.name}"`,
              },
            })
          }

          return Response.json({ error: 'Invalid action' }, { status: 400 })
        } catch (error) {
          console.error('Scrub error:', error)
          const posthog = getPostHogClient()
          posthog.capture({
            distinctId: 'server',
            event: 'scrub_api_error',
            properties: {
              error: error instanceof Error ? error.message : String(error),
              source: 'api',
            },
          })
          return Response.json(
            { error: 'Failed to process image' },
            { status: 500 },
          )
        }
      },
    },
  },
})

