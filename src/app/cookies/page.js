'use client'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../../Modules').then(mod => mod.Header), { ssr: false })
const Footer = dynamic(() => import('../../Modules').then(mod => mod.Footer), { ssr: false })
const Cookies = dynamic(() => import('../../Pages/CookiesPage/Cookies').then(mod => mod.Cookies), { ssr: false })

export default function CookiesPage() {
  return (
    <>
      <Header />
      <Cookies />
      <Footer />
    </>
  )
}
