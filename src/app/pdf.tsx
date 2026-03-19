import { Suspense, lazy } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'

const PdfClient = lazy(() => import('./pdf/PdfClient'))

const title = 'Compress PDF Online - Reduce PDF File Size'
const description =
  'Securely compress PDF files and convert PDF to images locally in your browser. No file upload required for PDF processing.'
const keywords = [
  'compress pdf',
  'pdf to image',
  'reduce pdf size',
  'pdf optimizer',
  'convert pdf to png',
  'local pdf tools',
]
const canonicalUrl = 'https://micropng.sahilfruitwala.com/pdf'

export const Route = createFileRoute('/pdf')({
  component: PDFPage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function PDFPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MicroPng PDF Tools',
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description:
            'Browser-based PDF tools to compress PDFs and convert them to images securely.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.6',
            ratingCount: '500',
          },
        }}
      />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <PdfClient />
      </Suspense>
    </>
  )
}

