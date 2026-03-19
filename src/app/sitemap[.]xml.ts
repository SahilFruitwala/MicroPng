import { createFileRoute } from '@tanstack/react-router'

const baseUrl = 'https://micropng.sahilfruitwala.com'
const routes = [
  '',
  '/convert',
  '/pdf',
  '/resize',
  '/crop',
  '/filters',
  '/glass',
  '/tracer',
  '/watermark',
  '/palette',
  '/scrub',
  '/compare',
  '/cli',
]

function toDateOnlyISO(d: Date) {
  return d.toISOString().slice(0, 10)
}

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const now = new Date()

        const urlEntries = routes
          .map((route) => {
            const loc = `${baseUrl}${route}`
            const lastmod = toDateOnlyISO(now)
            const changefreq = route === '' ? 'daily' : 'weekly'
            const priority =
              route === '' ? '1' : route === '/compare' ? '0.9' : '0.8'

            return `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`
          })
          .join('\n')

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
          },
        })
      },
    },
  },
})

