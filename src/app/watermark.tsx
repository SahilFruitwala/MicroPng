import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'
import WatermarkClient from './watermark/WatermarkClient'

const title = 'Add Watermark to Image - Protect Your Photos'
const description =
  'Add text or logo watermarks to your images online. Protect your copyright with customizable watermarking tools.'
const keywords = [
  'watermark image',
  'add logo to image',
  'protect photos',
  'copyright image',
  'image branding',
  'watermark maker',
]
const canonicalUrl = 'https://micropng.sahilfruitwala.com/watermark'

export const Route = createFileRoute('/watermark')({
  component: WatermarkPage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function WatermarkPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MicroPng Watermarker',
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description:
            'Add custom text or logo watermarks to protect your images quickly and securely.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.6',
            ratingCount: '410',
          },
        }}
      />
      <WatermarkClient />
    </>
  )
}

