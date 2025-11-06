'use client'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../../Modules').then(mod => mod.Header), { ssr: false })
const Footer = dynamic(() => import('../../Modules').then(mod => mod.Footer), { ssr: false })
const Policy = dynamic(() => import('../../Pages/PolicyPage/Policy').then(mod => mod.Policy), { ssr: false })

export default function PolicyPage() {
  return (
    <>
      <Header />
      <Policy />
      <Footer />
    </>
  )
}
