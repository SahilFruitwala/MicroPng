import { createFileRoute, Link } from '@tanstack/react-router'
import { Check, Shield, Zap, Upload, Info, ArrowLeft } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const title = 'MicroPng vs TinyPNG - Why Local Compression is Better'
const description =
  'Compare MicroPng with TinyPNG. Discover why local-first image compression offers better privacy, efficiency, and flexibility compared to traditional cloud-based alternatives.'
const keywords = [
  'micropng vs tinypng',
  'image compression comparison',
  'local vs cloud compression',
  'privacy focused image compressor',
]
const canonicalUrl = 'https://micropng.sahilfruitwala.com/compare'

export const Route = createFileRoute('/compare')({
  component: ComparePage,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      {
        property: 'og:title',
        content: 'MicroPng vs TinyPNG - The Privacy-First Alternative',
      },
      {
        property: 'og:description',
        content:
          'Stop uploading your images to the cloud. MicroPng offers secure, instant, and high-capacity compression directly in your browser.',
      },
      { property: 'og:url', content: canonicalUrl },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }),
})

function ComparePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'MicroPng vs TinyPNG',
            description:
              'A detailed comparison between MicroPng (Local-First) and TinyPNG (Cloud-Based).',
          }}
        />

        <div className="text-center mb-16 space-y-4 relative">
          <Link
            to="/"
            className="absolute left-0 top-0 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors md:absolute md:left-0 md:top-2"
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline">Back to App</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20 mt-12 md:mt-0">
            <Shield size={14} />
            <span>Transparency & Privacy First</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            MicroPng vs TinyPNG
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Honest comparison between local-first processing and traditional
            cloud compression.
          </p>
        </div>

        <div className="bg-background/50 border border-border rounded-3xl overflow-x-auto mb-8 backdrop-blur-md">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-3 p-6 border-b border-border bg-surface">
              <div className="text-lg font-semibold text-muted-foreground">
                Feature
              </div>
              <div className="text-xl font-bold text-center text-primary">
                MicroPng
              </div>
              <div className="text-xl font-bold text-center text-subtle">
                TinyPNG
              </div>
            </div>

            <ComparisonRow
              feature="Primary Processing"
              micro="Local Browser (Zero Upload)"
              tiny="Always Cloud Upload"
              isBetter={true}
            />
            <ComparisonRow
              feature="Data Persistence"
              micro="Never Stored (In-Memory Only)"
              tiny="Stored on Server (Temporary)"
              isBetter={true}
            />
            <ComparisonRow
              feature="Hybrid Speed"
              micro="Optimized (Hybrid Mode)"
              tiny="Mobile via Upload"
              isBetter={true}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 px-6 py-6 rounded-2xl bg-surface border border-border flex gap-4 items-start">
          <Info size={24} className="text-primary shrink-0 mt-1" />
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-foreground">
              Why the Hybrid Model?
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              On desktop, compression is instant (0ms upload). For heavier tasks
              (mobile/server), we process images securely and stream results
              back without storing your data.
            </p>
          </div>
        </div>

        <div className="text-center bg-surface p-12 rounded-3xl border border-border mt-14">
          <h2 className="text-3xl font-bold mb-6">
            Ready to compress without limits?
          </h2>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-primary/20 hover:scale-105"
          >
            <Upload size={20} />
            Start Compressing Now
          </Link>
          <p className="mt-4 text-sm text-subtle">No sign-up required. Completely free.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function ComparisonRow({
  feature,
  micro,
  tiny,
  isBetter,
}: {
  feature: string
  micro: string
  tiny: string
  isBetter: boolean
}) {
  return (
    <div className="grid grid-cols-3 p-6 border-b border-border hover:bg-surface transition-colors items-center">
      <div className="font-medium text-foreground">{feature}</div>
      <div className="text-center font-semibold text-primary flex items-center justify-center gap-2">
        {isBetter && <Check size={18} />}
        {micro}
      </div>
      <div className="text-center text-subtle flex items-center justify-center gap-2">
        {!isBetter && <Check size={18} />}
        {tiny}
      </div>
    </div>
  )
}

