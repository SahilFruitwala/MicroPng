import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'
import GlassClient from './glass/GlassClient'

const title = 'Glassmorphism Generator - CSS Glass Effect'
const description =
  'Design beautiful glassmorphism backgrounds and UI elements. Generate CSS glass effects with blur and transparency controls.'
const keywords = [
  'glassmorphism generator',
  'css glass effect',
  'glass ui generator',
  'blur background css',
  'frosted glass effect',
  'css generator',
]
const canonicalUrl = 'https://micropng.sahilfruitwala.com/glass'

export const Route = createFileRoute('/glass')({
  component: GlassPage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function GlassPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Glassmorphism Generator',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description:
            'A tool to generate glassmorphism CSS effects and high-resolution glass-styled images.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '190',
          },
        }}
      />
      <GlassClient />
    </>
  )
}

