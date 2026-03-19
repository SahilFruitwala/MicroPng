import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'
import CropClient from './crop/CropClient'

const title = 'Crop Image Online - Free Photo Cropper'
const description =
  'Crop images online with ease. Use smart cropping or manual selection to focus on what matters in your photos.'
const keywords = [
  'crop image',
  'photo cropper',
  'cut image',
  'smart crop',
  'image framing',
  'online image cropper',
]
const canonicalUrl = 'https://micropng.sahilfruitwala.com/crop'

export const Route = createFileRoute('/crop')({
  component: CropPage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function CropPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MicroPng Smart Cropper',
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description:
            'Smart AI-powered cropping tool to automatically detect subjects and crop images perfectly.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.5',
            ratingCount: '340',
          },
        }}
      />
      <CropClient />
    </>
  )
}

