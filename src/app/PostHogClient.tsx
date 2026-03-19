"use client";

import { useEffect } from 'react'

export default function PostHogClientInit() {
  useEffect(() => {
    let cancelled = false

    async function initPostHog() {
      const posthogKey = import.meta.env.NEXT_PUBLIC_POSTHOG_KEY as
        | string
        | undefined

      if (!posthogKey) {
        return
      }

      try {
        const { posthog } = await import('posthog-js')

        if (cancelled || posthog.__loaded) {
          return
        }

        posthog.init(posthogKey, {
          api_host: '/ingest',
          ui_host: 'https://us.posthog.com',
          defaults: '2026-01-30',
          capture_exceptions: true,
          debug: import.meta.env.DEV,
        })
      } catch (error) {
        console.error('Failed to initialize PostHog', error)
      }
    }

    initPostHog()

    return () => {
      cancelled = true
    }
  }, [])

  return null
}
