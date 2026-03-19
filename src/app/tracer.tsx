import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'
import TracerClient from './tracer/TracerClient'

const title = 'Image Tracer - Convert Bitmap to SVG'
const description =
  'Convert raster images (PNG, JPG) to scalable vector graphics (SVG). Free online image tracer and vectorizer.'
const keywords = [
  'image tracer',
  'bitmap to svg',
  'convert image to vector',
  'svg converter',
  'vectorizer',
  'png to svg',
]
const canonicalUrl = 'https://micropng.sahilfruitwala.com/tracer'

export const Route = createFileRoute('/tracer')({
  component: TracerPage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function TracerPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MicroPng Image Tracer',
          applicationCategory: 'DesignApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description:
            'Convert raster images to SVG vectors automatically using client-side tracing.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.3',
            ratingCount: '120',
          },
        }}
      />
      <TracerClient />
    </>
  )
}

