<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into MicroPng, a Next.js 16 App Router image-processing tool. Here is a summary of every change made:

- **`instrumentation-client.ts`** (new) — Initialises `posthog-js` using the Next.js 15.3+ instrumentation API. Includes `capture_exceptions: true` for automatic error tracking, a reverse-proxy `api_host` (`/ingest`), and debug mode in development.
- **`next.config.ts`** (updated) — Added `/ingest/*` and `/ingest/static/*` reverse-proxy rewrites so PostHog requests are routed through your own domain, improving ad-blocker resilience and data accuracy. Also set `skipTrailingSlashRedirect: true`.
- **`src/lib/posthog-server.ts`** (new) — Singleton PostHog Node.js client (`posthog-node`) for server-side event capture from API routes, with `flushAt: 1` / `flushInterval: 0` for reliable per-request flushing.
- **`.env.local`** (new) — Stores `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` securely; `.gitignore` coverage confirmed.
- **`src/app/HomeClient.tsx`** (updated) — Added 5 client-side events covering the core compression workflow plus exception capture on all error paths.
- **`src/app/convert/ConvertClient.tsx`** (updated) — Added 2 client-side events for format-conversion workflow plus exception capture.
- **`src/app/watermark/WatermarkClient.tsx`** (updated) — Added 1 client-side event for watermark application plus exception capture.
- **`src/app/scrub/ScrubClient.tsx`** (updated) — Added 2 client-side events for the privacy-metadata workflow plus exception capture.
- **`src/app/api/compress/route.ts`** (updated) — Added 1 server-side event via PostHog Node client after every successful compression.
- **`src/app/api/watermark/route.ts`** (updated) — Added 1 server-side event via PostHog Node client after every successful watermark.
- **`src/app/api/scrub/route.ts`** (updated) — Added 1 server-side event via PostHog Node client after every successful metadata scrub.

| Event name | Description | File |
|---|---|---|
| `image_compression_started` | User submits images for compression; captures file count, mode, level, output format | `src/app/HomeClient.tsx` |
| `image_compression_completed` | Single image compressed successfully; captures sizes, reduction %, time, mode, format | `src/app/HomeClient.tsx` |
| `image_compression_failed` | Single image compression fails; captures mode and level | `src/app/HomeClient.tsx` |
| `zip_download_clicked` | User downloads all compressed images as a ZIP; captures file count | `src/app/HomeClient.tsx` |
| `processing_mode_toggled` | User switches browser ↔ server processing mode; captures new/previous mode and mobile flag | `src/app/HomeClient.tsx` |
| `image_conversion_started` | User triggers format conversion; captures file count and target format | `src/app/convert/ConvertClient.tsx` |
| `image_conversion_completed` | Format conversion succeeds; captures original/target format and sizes | `src/app/convert/ConvertClient.tsx` |
| `watermark_applied` | Watermark applied to image; captures type, opacity, position, sizes, and time | `src/app/watermark/WatermarkClient.tsx` |
| `metadata_viewed` | User views embedded metadata from an uploaded image; captures file format, size, and field count | `src/app/scrub/ScrubClient.tsx` |
| `metadata_scrubbed` | User confirms metadata removal; captures file format and sizes | `src/app/scrub/ScrubClient.tsx` |
| `server_image_compressed` | Server-side: image processed through `/api/compress`; captures format, level, sizes, reduction %, resize/crop flags | `src/app/api/compress/route.ts` |
| `server_watermark_applied` | Server-side: watermark applied through `/api/watermark`; captures type, position, opacity, sizes | `src/app/api/watermark/route.ts` |
| `server_metadata_scrubbed` | Server-side: metadata stripped through `/api/scrub`; captures file format and sizes | `src/app/api/scrub/route.ts` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- 📊 **Dashboard — Analytics basics:** https://us.posthog.com/project/158679/dashboard/1293698
- 🔻 **Compression Funnel (Start → Complete → ZIP Download):** https://us.posthog.com/project/158679/insights/PHasqtYc
- 📈 **Compression Success vs Failure Rate:** https://us.posthog.com/project/158679/insights/RMMaf3rh
- ⚙️ **Browser vs Server Mode Usage:** https://us.posthog.com/project/158679/insights/Bmz0goRY
- 🧰 **Feature Adoption — Convert, Watermark & Scrub:** https://us.posthog.com/project/158679/insights/17fMia3l
- 🔒 **Privacy Funnel (Metadata Viewed → Scrubbed):** https://us.posthog.com/project/158679/insights/Dvg51uUm

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
