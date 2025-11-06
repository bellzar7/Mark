'use client'

import { useState, useMemo } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import NextLink from 'next/link'
import Image, { StaticImageData } from 'next/image'
import {
  inst_h,
  inst_s,
  tg_h,
  tg_s,
  logotype,
  watsapp_s,
  watsapp_h,
  linkedin_s,
  linkedin_h,
} from '@/Assets/Icons'
import {
  tel,
  mail,
  linkedinLink,
  instLink,
  tgLink,
  watsappLink,
} from '@/Constants/socials'
import { COOKIES_ROUTE, POLICY_ROUTE, WEBSITE_ROUTE } from '@/Constants'

function SocialIcon({ normal, hover, link }: { normal: StaticImageData | string; hover: StaticImageData | string; link: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
      <Image
        src={isHovered ? hover : normal}
        alt="social"
        width={24}
        height={24}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </a>
  )
}

export function Footer() {
  const { t } = useTranslation()

  const links = useMemo(
    () => [
      { to: 'services', label: t('header.nav1') },
      { to: 'cases', label: t('header.nav2') },
      { to: 'studio', label: t('header.nav3') },
      { to: 'footer', label: t('header.nav5') },
    ],
    [t]
  )

  const socialsData = useMemo(
    () => [
      { normal: tg_s, hover: tg_h, link: tgLink },
      { normal: watsapp_s, hover: watsapp_h, link: watsappLink },
      { normal: inst_s, hover: inst_h, link: instLink },
      { normal: linkedin_s, hover: linkedin_h, link: linkedinLink },
    ],
    []
  )

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const date = new Date().getFullYear()

  return (
    <div id="footer" className="bg-black border-t border-gray-900 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <NextLink href={WEBSITE_ROUTE}>
              <Image src={logotype} alt="Mark Digital Agency" width={120} height={40} />
            </NextLink>
          </div>

          <nav className="flex flex-col gap-3">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={500}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <div className="text-gray-500 text-sm">
              © {t('footer.rights.txt')} {date}
            </div>
            <NextLink href={POLICY_ROUTE} className="text-gray-400 hover:text-white transition-colors text-sm">
              🚀 {t('footer.rights.label1')}
            </NextLink>
            <NextLink href={COOKIES_ROUTE} className="text-gray-400 hover:text-white transition-colors text-sm">
              🔬 {t('footer.rights.label2')}
            </NextLink>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-white text-sm font-medium">{t('footer.contacts')}</div>
            <a href={`tel:${tel}`} className="text-gray-400 hover:text-white transition-colors text-sm">
              {tel}
            </a>
            <a href={`mailto:${mail}`} className="text-gray-400 hover:text-white transition-colors text-sm">
              {mail}
            </a>
            <div className="flex gap-3 mt-2">
              {socialsData.map((soc, index) => (
                <SocialIcon key={index} {...soc} />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="mt-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors mx-auto"
        >
          <span className="text-sm">{t('footer.scroll')}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            className="transform rotate-0 transition-transform"
          >
            <path
              d="M0.473649 8.28143C0.607001 8.42188 0.790101 8.50446 0.983649 8.51143C1.19112 8.51527 1.39067 8.43182 1.53365 8.28143L7.23364 2.58144V15.8015C7.23903 16.2135 7.57168 16.5461 7.98364 16.5515C8.39561 16.5461 8.72826 16.2135 8.73364 15.8015V2.58142L14.4336 8.28143C14.6248 8.47793 14.9062 8.55753 15.172 8.49024C15.4377 8.42296 15.6474 8.21902 15.722 7.95524C15.7966 7.69147 15.7248 7.40793 15.5336 7.21143L8.53365 0.21143C8.23655 -0.0704768 7.77075 -0.0704768 7.47365 0.21143L0.473649 7.21143C0.330118 7.35245 0.249268 7.54522 0.249268 7.74643C0.249268 7.94764 0.330118 8.14042 0.473649 8.28143Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
