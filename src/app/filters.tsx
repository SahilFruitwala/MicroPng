import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'
import FiltersClient from './filters/FiltersClient'

const title = 'Photo Filters Online - Aesthetic Image Effects'
const description =
  'Apply aesthetic filters to your photos online. Vintage, noir, breezy, and more effects to enhance your images instantly.'
const keywords = [
  'photo filters',
  'image effects',
  'instagram filters online',
  'vintage photo filter',
  'black and white filter',
  'picture editor',
]
const canonicalUrl = 'https://micropng.sahilfruitwala.com/filters'

export const Route = createFileRoute('/filters')({
  component: FiltersPage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function FiltersPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MicroPng Photo Filters',
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description:
            'Apply professional grade filters and effects to your images directly in the browser.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.4',
            ratingCount: '210',
          },
        }}
      />
      <FiltersClient />
    </>
  )
}

