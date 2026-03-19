import { createFileRoute } from '@tanstack/react-router'
import JsonLd from '@/components/JsonLd'
import CliClient from '@/app/cli/CliClient'

const title = 'MicroPng CLI - High Performance Image Compression'
const description =
  'A high-performance, local-first CLI image compressor built with Node.js and libvips. Perfect for recursive image optimization in your terminal.'
const keywords = [
  'micropng cli',
  'image compression cli',
  'command line image optimizer',
  'recursive image compressor',
  'local first compression',
  'png optimization',
  'jpeg optimization',
  'webp optimization',
  'avif optimization',
]

const canonicalUrl = 'https://micropng.sahilfruitwala.com/cli'
const ogTitle = 'MicroPng CLI - Professional Command Line Image Optimization'
const ogDescription =
  'Recursive, blazing-fast, and local-first image compression for your terminal. Supports PNG, JPEG, WebP, and AVIF.'
const ogImage = '/opengraph.webp'

export const Route = createFileRoute('/cli')({
  component: CliPage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },

      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: ogDescription },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: ogImage },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function CliPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          '@id': 'https://micropng.sahilfruitwala.com/cli#software',
          name: 'MicroPng CLI',
          alternateName: 'micropng-cli',
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Windows, macOS, Linux',
          softwareVersion: '1.0.0',
          description:
            'A high-performance, local-first CLI image compressor built with Node.js and libvips. Designed for developers who need fast, reliable, and recursive image optimization.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
          author: {
            '@type': 'Person',
            name: 'Sahil Fruitwala',
            url: 'https://github.com/SahilFruitwala',
          },
          downloadUrl: 'https://www.npmjs.com/package/micropng-cli',
          featureList: [
            'Recursive directory scanning',
            'Atomic overwrites',
            'Lossless and lossy compression',
            'Format conversion (WebP, AVIF, JPEG, PNG)',
            'Parallel processing',
            'Metadata preservation',
          ],
          screenshot: 'https://micropng.sahilfruitwala.com/opengraph.webp',
        }}
      />
      <CliClient />
    </>
  )
}

