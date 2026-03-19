import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'
import ConvertClient from './convert/ConvertClient'

const title = 'Image Converter - PNG to WebP, JPEG, AVIF'
const description =
  'Convert images between PNG, JPEG, WebP, and AVIF formats instantly using your browser. Fast, secure, and free image converter.'
const keywords = [
  'image converter',
  'png to webp',
  'jpg to png',
  'file converter',
  'image format converter',
  'webp converter',
]

const canonicalUrl = 'https://micropng.sahilfruitwala.com/convert'

export const Route = createFileRoute('/convert')({
  component: ConvertPage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function ConvertPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MicroPng Image Converter',
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description:
            'Convert images between popular formats like PNG, JPEG, WebP, and AVIF in your browser.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            ratingCount: '850',
          },
        }}
      />
      <ConvertClient />
    </>
  )
}

