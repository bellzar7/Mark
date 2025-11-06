import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-international-phone/style.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Mark Digital Agency - Web Development & Digital Solutions',
  description: 'Professional web development, digital marketing, and IT solutions. We create modern websites, mobile apps, and digital experiences that drive business growth.',
  keywords: 'web development, digital agency, mobile apps, IT solutions, digital marketing, website design',
  authors: [{ name: 'Mark Digital Agency' }],
  openGraph: {
    title: 'Mark Digital Agency - Web Development & Digital Solutions',
    description: 'Professional web development, digital marketing, and IT solutions.',
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
  verification: {
    google: 'your-google-verification-code', // Add your verification code
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="dark">
        <Providers>
          <div className="App">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
