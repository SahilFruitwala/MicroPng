/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import {
  Outlet,
  Scripts,
  HeadContent,
  createRootRoute,
} from '@tanstack/react-router'
import { ThemeProvider } from '@/components/ThemeProvider'
import PostHogClient from './PostHogClient'
import './globals.css'

const canonicalUrl = 'https://micropng.sahilfruitwala.com'
const title = 'MicroPng - Professional Image Compression'
const description =
  'Fast, secure, and professional-grade image compression directly in your browser. Lossless optimization for PNG, JPEG, and WebP.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title },
      { name: 'description', content: description },
      {
        name: 'keywords',
        content:
          'image compression, compress png, compress jpeg, optimize images, web performance, local compression, privacy focused',
      },
      { name: 'robots', content: 'index,follow' },

      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: `${canonicalUrl}/` },
      { property: 'og:site_name', content: 'MicroPng' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/opengraph.webp' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:creator', content: '@micropng' },
      { name: 'twitter:image', content: '/opengraph.webp' },
    ],
    links: [
      { rel: 'canonical', href: `${canonicalUrl}/` },
      { rel: 'icon', href: '/icon.webp' },
      { rel: 'apple-touch-icon', href: '/icon.webp' },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <PostHogClient />
          <Analytics />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
