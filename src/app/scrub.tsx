import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'
import ScrubClient from './scrub/ScrubClient'

const title = 'Remove Image Metadata - Exif Cleaner'
const description =
  'Protect your privacy by removing hidden metadata (EXIF, GPS, Camera settings) from your photos before sharing them online.'
const keywords = [
  'remove image metadata',
  'exif cleaner',
  'remove gps from photo',
  'privacy tool',
  'scrub image',
  'metadata remover',
]
const canonicalUrl = 'https://micropng.sahilfruitwala.com/scrub'

export const Route = createFileRoute('/scrub')({
  component: ScrubPage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function ScrubPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MicroPng Metadata Scrubber',
          applicationCategory: 'UtilityApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description:
            'Remove sensitive metadata from images to protect your privacy.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '250',
          },
        }}
      />
      <ScrubClient />
    </>
  )
}

