import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/manifest.webmanifest')({
  server: {
    handlers: {
      GET: async () => {
        const manifest = {
          name: 'MicroPng',
          short_name: 'MicroPng',
          description:
            'Professional local-first image compression and manipulation tools.',
          start_url: '/',
          display: 'standalone',
          background_color: '#000000',
          theme_color: '#10b981',
          icons: [
            {
              src: '/favicon.ico',
              sizes: 'any',
              type: 'image/x-icon',
            },
          ],
        }

        return new Response(JSON.stringify(manifest), {
          headers: {
            'Content-Type': 'application/manifest+json; charset=utf-8',
          },
        })
      },
    },
  },
})

