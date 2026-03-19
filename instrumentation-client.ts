import { posthog } from 'posthog-js'

const posthogKey = import.meta.env.NEXT_PUBLIC_POSTHOG_KEY as string | undefined

if (posthogKey && !posthog.__loaded) {
  posthog.init(posthogKey, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    defaults: '2026-01-30',
    capture_exceptions: true,
    debug: import.meta.env.DEV,
  })
}

// IMPORTANT: Never combine this approach with other client-side PostHog initialization approaches,
// especially components like a PostHogProvider. instrumentation-client.ts is the correct solution
// for initializing client-side PostHog in Next.js 15.3+ apps.
