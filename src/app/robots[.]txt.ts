import { createFileRoute } from '@tanstack/react-router'

const robotsText = `User-agent: *
Allow: /
Disallow: /private/
Sitemap: https://micropng.sahilfruitwala.com/sitemap.xml
`

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: async () => {
        return new Response(robotsText, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
          },
        })
      },
    },
  },
})

