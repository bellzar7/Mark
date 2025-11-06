'use client'

import dynamic from 'next/dynamic'

// Dynamically import components with no SSR
const Header = dynamic(() => import('../Modules').then(mod => mod.Header), { ssr: false })
const Studio = dynamic(() => import('../Modules').then(mod => mod.Studio), { ssr: false })
const Services = dynamic(() => import('../Modules').then(mod => mod.Services), { ssr: false })
const Cases = dynamic(() => import('../Modules').then(mod => mod.Cases), { ssr: false })
const ConnectForm = dynamic(() => import('../Modules').then(mod => mod.ConnectForm), { ssr: false })
const Advantages = dynamic(() => import('../Modules').then(mod => mod.Advantages), { ssr: false })
const Steps = dynamic(() => import('../Modules').then(mod => mod.Steps), { ssr: false })
const CtaForm = dynamic(() => import('../Modules').then(mod => mod.CtaForm), { ssr: false })
const Footer = dynamic(() => import('../Modules').then(mod => mod.Footer), { ssr: false })
const CookieConsentMessage = dynamic(() => import('../Modules').then(mod => mod.CookieConsentMessage), { ssr: false })

export default function Home() {
  return (
    <>
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
    </>
  )
}
