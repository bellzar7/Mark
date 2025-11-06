'use client'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header').then(m => m.Header), { ssr: false })
const Studio = dynamic(() => import('@/components/Studio').then(m => m.Studio), { ssr: false })
const Services = dynamic(() => import('@/components/Services').then(m => m.Services), { ssr: false })
const Cases = dynamic(() => import('@/components/Cases').then(m => m.Cases), { ssr: false })
const ConnectForm = dynamic(() => import('@/components/ConnectForm').then(m => m.ConnectForm), { ssr: false })
const Advantages = dynamic(() => import('@/components/Advantages').then(m => m.Advantages), { ssr: false })
const Steps = dynamic(() => import('@/components/Steps').then(m => m.Steps), { ssr: false })
const CtaForm = dynamic(() => import('@/components/CtaForm').then(m => m.CtaForm), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer').then(m => m.Footer), { ssr: false })
const CookieConsentMessage = dynamic(() => import('@/components/CookieConsentMessage').then(m => m.CookieConsentMessage), { ssr: false })

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Studio />
      <Services />
      <Cases />
      <ConnectForm />
      <Advantages />
      <Steps />
      <CtaForm />
      <Footer />
      <CookieConsentMessage />
    </main>
  )
}
