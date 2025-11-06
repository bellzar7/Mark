import type { Metadata } from 'next'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-international-phone/style.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Mark Digital Agency - Web Development & Digital Solutions',
  description: 'Professional web development, digital marketing, and IT solutions. We create modern websites, mobile apps, and digital experiences that drive business growth.',
  keywords: 'web development, digital agency, mobile apps, IT solutions, digital marketing, website design, Ukraine, Kyiv',
  authors: [{ name: 'Mark Digital Agency' }],
  openGraph: {
    title: 'Mark Digital Agency - Web Development & Digital Solutions',
    description: 'Professional web development, digital marketing, and IT solutions that drive business growth.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mark Digital Agency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
