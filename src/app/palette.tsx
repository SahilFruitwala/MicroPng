import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'
import PaletteClient from './palette/PaletteClient'

const title = 'Color Palette Generator - Extract Colors from Image'
const description =
  'Upload an image to instantly generate a color palette. Extract dominant colors and get HEX codes for your design projects.'
const keywords = [
  'color palette generator',
  'extract colors from image',
  'image color picker',
  'hex code extractor',
  'design palette',
]
const canonicalUrl = 'https://micropng.sahilfruitwala.com/palette'

export const Route = createFileRoute('/palette')({
  component: PalettePage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function PalettePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MicroPng Palette Generator',
          applicationCategory: 'DesignApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description:
            'Extract dominant color palettes from any image instantly in your browser.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.6',
            ratingCount: '150',
          },
        }}
      />
      <PaletteClient />
    </>
  )
}

