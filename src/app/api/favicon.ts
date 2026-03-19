import { createFileRoute } from '@tanstack/react-router'
import pngToIco from 'png-to-ico'

export const Route = createFileRoute('/api/favicon')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const formData = await request.formData()
          const files = formData.getAll('files') as File[]

          if (!files || files.length === 0) {
            return Response.json(
              { error: 'No files provided' },
              { status: 400 },
            )
          }

          // Convert files to buffers
          const buffers = await Promise.all(
            files.map(async (file) => {
              const arrayBuffer = await file.arrayBuffer()
              return Buffer.from(arrayBuffer)
            }),
          )

          // Generate .ico from PNG buffers
          const icoBuffer = await pngToIco(buffers)

          return new Response(icoBuffer as unknown as BodyInit, {
            status: 200,
            headers: {
              'Content-Type': 'image/x-icon',
              'Content-Disposition':
                'attachment; filename="favicon.ico"',
            },
          })
        } catch (error) {
          console.error('ICO generation error:', error)
          return Response.json(
            { error: 'Failed to generate .ico file' },
            { status: 500 },
          )
        }
      },
    },
  },
})

