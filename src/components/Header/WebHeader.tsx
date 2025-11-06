'use client'

import { memo, useMemo, useCallback } from 'react'
import { Link } from 'react-scroll'
import NextLink from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { logo } from '@/Assets/Images'
import { Button } from '@/components/ui/Button'
import { LangDetector } from '@/components/LangDetector'
import { btnArrow } from '@/Assets/Icons'
import { cn } from '@/lib/utils'

interface ModalState {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onOpenChange: () => void
}

interface WebHeaderProps {
  modalState: ModalState
}

const NAV_ITEMS = [
  { to: 'services', labelKey: 'header.nav1' },
  { to: 'cases', labelKey: 'header.nav2' },
  { to: 'studio', labelKey: 'header.nav3' },
  { to: 'footer', labelKey: 'header.nav5' },
]

export const WebHeader = memo<WebHeaderProps>(({ modalState }) => {
  const { t } = useTranslation()
  const { onOpen } = modalState

  const navLinks = useMemo(
    () =>
      NAV_ITEMS.map((item) => (
        <Link
          smooth
          duration={500}
          key={item.labelKey}
          to={item.to}
          className="cursor-pointer text-white/80 hover:text-white transition-colors font-gilroy text-[15px] font-medium"
        >
          {t(item.labelKey)}
        </Link>
      )),
    [t]
  )

  const handleButtonClick = useCallback(() => {
    onOpen()
  }, [onOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm hidden lg:block">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <NextLink href="/" className="flex-shrink-0">
            <Image src={logo} alt="Mark Digital Agency Logo" width={120} height={40} priority />
          </NextLink>

          <div className="flex items-center gap-12">
            <nav className="flex items-center gap-8">
              {navLinks}
            </nav>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="animate-pulse"
                >
                  <circle opacity="0.1" cx="9" cy="9" r="9" fill="#30DB5B" />
                  <circle opacity="0.2" cx="9" cy="9" r="6" fill="#30DB5B" />
                  <circle cx="9" cy="9" r="3" fill="#30DB5B" />
                </svg>
                <span className="text-white/60 text-sm font-gilroy">
                  We are Online
                </span>
              </div>

              <LangDetector />

              <Button
                variant="header"
                size="md"
                icon={btnArrow}
                onClick={handleButtonClick}
                text={t('header.btn_standard')}
                className="px-6"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
})

WebHeader.displayName = 'WebHeader'
