import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'
import ResizeClient from './resize/ResizeClient'

const title = 'Resize Image Online - Change Dimensions'
const description =
  'Resize images to specific dimensions or percentages. Perfect for social media, web, and printing requirements with high quality output.'
const keywords = [
  'resize image',
  'change image resolution',
  'social media image resizer',
  'scale image',
  'image dimensions',
  'photo resizer',
]
const canonicalUrl = 'https://micropng.sahilfruitwala.com/resize'

export const Route = createFileRoute('/resize')({
  component: ResizePage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function ResizePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MicroPng Image Resizer',
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description:
            'Resize your images to exact pixel dimensions for social media and web use.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            ratingCount: '920',
          },
        }}
      />
      <ResizeClient />
    </>
  )
}

