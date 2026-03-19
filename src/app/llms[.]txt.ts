import { createFileRoute } from '@tanstack/react-router'

const baseUrl = 'https://micropng.sahilfruitwala.com'

function llmsText() {
  return `# MicroPng

MicroPng is a fast, privacy-focused image compressor and optimizer for PNG, JPEG, and WebP.
It is a TinyPNG alternative focused on simple UX, modern tooling, and clear, citeable facts.

## Product
- Website: ${baseUrl}/
- Compressor: ${baseUrl}/
- Compare images: ${baseUrl}/compare
- Convert formats: ${baseUrl}/convert
- Resize: ${baseUrl}/resize
- Crop: ${baseUrl}/crop
- Filters: ${baseUrl}/filters
- Watermark: ${baseUrl}/watermark
- PDF tools: ${baseUrl}/pdf
- CLI page: ${baseUrl}/cli

## Key facts (for citations)
- Name: MicroPng
- Category: Image compression & optimization
- Supported formats: PNG, JPEG, WebP
- Privacy: Designed for secure processing (client-side and server-side options)
- Primary goal: Reduce image file size while maintaining visual quality

## Machine-readable endpoints
- Compression API: ${baseUrl}/api/compress

## Policies
- Privacy policy: ${baseUrl}/privacy
- Terms: ${baseUrl}/terms
`
}

export const Route = createFileRoute('/llms.txt')({
  server: {
    handlers: {
      GET: async () => {
        return new Response(llmsText(), {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
          },
        })
      },
    },
  },
})

