import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'
import HomeClient from './HomeClient'

const title = 'Free Online Image Compressor - PNG, JPEG, WebP'
const description =
  'Compress images up to 90% without losing quality. Secure client-side and server-side image compression for PNG, JPEG, and WebP formats.'
const keywords = [
  'image compressor',
  'compress png',
  'reduce image size',
  'optimize images',
  'lossless compression',
  'tiny png',
  'image optimizer',
]

const canonicalUrl = 'https://micropng.sahilfruitwala.com'
const ogImageUrl = `${canonicalUrl}/opengraph.webp`

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },

      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImageUrl },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImageUrl },
    ],
    links: [{ rel: 'canonical', href: `${canonicalUrl}/` }],
  }),
})

function Home() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MicroPng Image Compressor',
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description:
            'Professional-grade image compression directly in your browser. Supports PNG, JPEG, and WebP.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250',
          },
          screenshot: 'https://micropng.sahilfruitwala.com/opengraph.webp',
        }}
      />
      <HomeClient />
    </>
  )
}

