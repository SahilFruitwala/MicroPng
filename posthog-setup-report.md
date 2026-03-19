<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into MicroPng, a TanStack Start image processing application. The integration covers client-side event tracking across all five image tools (compress, convert, watermark, scrub, resize), server-side error capture on all three API routes, automatic pageview/session tracking via `PostHogProvider`, and exception capture for error boundaries.

**Changes made:**

- `vite.config.ts` — Added `VITE_PUBLIC_` env prefix and a `/ingest` reverse proxy to route PostHog traffic through the dev server.
- `src/app/__root.tsx` — Wrapped app body with `PostHogProvider` (client-side init, autocapture, exception tracking).
- `src/utils/posthog-server.ts` — New singleton server-side PostHog client (`posthog-node`) for API routes.
- `.env` — Added `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST`.

**Event tracking added to 8 files:**

| Event Name | Description | File |
|---|---|---|
| `image_compressed` | Fires when a user successfully compresses one or more images; includes mode, compression level, original/compressed size, and reduction % | `src/app/HomeClient.tsx` |
| `images_downloaded_as_zip` | Fires when a user downloads all results as a ZIP archive | `src/app/HomeClient.tsx`, `src/app/convert/ConvertClient.tsx` |
| `compression_mode_switched` | Fires when the user toggles between browser-side and server-side processing modes | `src/app/HomeClient.tsx` |
| `cli_explore_clicked` | Fires when a user clicks the Explore CLI CTA button | `src/app/HomeClient.tsx` |
| `image_converted` | Fires when image(s) are successfully converted to a new format | `src/app/convert/ConvertClient.tsx` |
| `image_watermarked` | Fires when a watermark (text or image) is successfully applied | `src/app/watermark/WatermarkClient.tsx` |
| `image_scrubbed` | Fires when metadata is successfully stripped from an image | `src/app/scrub/ScrubClient.tsx` |
| `image_resized` | Fires when an image is successfully resized and/or cropped | `src/app/resize/ResizeClient.tsx` |
| `resize_preset_applied` | Fires when a social media quick preset is selected in the resize tool | `src/app/resize/ResizeClient.tsx` |
| `compress_api_error` | Server-side: fires when the `/api/compress` endpoint throws an error | `src/app/api/compress.ts` |
| `watermark_api_error` | Server-side: fires when the `/api/watermark` endpoint throws an error | `src/app/api/watermark.ts` |
| `scrub_api_error` | Server-side: fires when the `/api/scrub` endpoint throws an error | `src/app/api/scrub.ts` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/158679/dashboard/1376710
- **Tool Usage Over Time** (line chart, all tools daily): https://us.posthog.com/project/158679/insights/1vyZQ3Cj
- **Compression Mode: Browser vs Server** (pie chart breakdown): https://us.posthog.com/project/158679/insights/7IaVeTx8
- **Image Processing Funnel** (compress → ZIP download): https://us.posthog.com/project/158679/insights/yiLWo88e
- **API Error Rate** (bar chart, all server errors): https://us.posthog.com/project/158679/insights/YUvzLfz5
- **CLI Interest** (daily CTA clicks): https://us.posthog.com/project/158679/insights/2zdik3Ot

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-tanstack-start/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
