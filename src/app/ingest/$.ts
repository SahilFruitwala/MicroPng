import { createFileRoute } from '@tanstack/react-router'

async function proxy(request: Request, targetBaseUrl: string, path: string) {
  const incoming = new URL(request.url)
  const targetUrl = `${targetBaseUrl}/${path}${incoming.search}`

  const headers = new Headers(request.headers)
  // Avoid conflicting host header when proxying.
  headers.delete('host')

  const shouldSendBody = request.method !== 'GET' && request.method !== 'HEAD'

  const res = await fetch(targetUrl, {
    method: request.method,
    headers,
    body: shouldSendBody ? request.body : undefined,
  })

  return new Response(res.body, {
    status: res.status,
    headers: res.headers,
  })
}

export const Route = createFileRoute('/ingest/$')({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { _splat } = params
        return proxy(request, 'https://us.i.posthog.com', _splat)
      },
      POST: async ({ request, params }) => {
        const { _splat } = params
        return proxy(request, 'https://us.i.posthog.com', _splat)
      },
      OPTIONS: async ({ request }) => {
        // Let the proxied response define actual CORS headers.
        return proxy(request, 'https://us.i.posthog.com', '')
      },
    },
  },
})

