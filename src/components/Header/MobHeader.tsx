'use client'

import { memo, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { scroller } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react'
import { logo } from '@/Assets/Images'
import { Button } from '@/components/ui/Button'
import { LangDetector } from '@/components/LangDetector'
import { btnArrow } from '@/Assets/Icons'

interface ModalState {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onOpenChange: () => void
}

interface MobHeaderProps {
  modalState: ModalState
}

export const MobHeader = memo<MobHeaderProps>(({ modalState }) => {
  const [iconChange, setIconChange] = useState(true)
  const [t] = useTranslation()
  const { onOpen } = modalState

  const scrollTo = (where: string) => {
    scroller.scrollTo(where, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  return (
    <header className="container mx-auto lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="flex items-center justify-between py-4">
        <NextLink href="/">
          <Image src={logo} alt="Mark Digital Agency Logo" width={100} height={32} priority />
        </NextLink>

        <Dropdown
          onOpenChange={() => setIconChange(!iconChange)}
          className="bg-black border border-gray-800"
        >
          <DropdownTrigger>
            <button className="p-2 hover:bg-gray-900 rounded-lg transition-colors">
              {iconChange ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform"
                >
                  <path
                    d="M3 7H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 17H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform"
                >
                  <path
                    d="M6 19L18.7279 6.27208"
                    stroke="#138E31"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 6L18.7279 18.7279"
                    stroke="#138E31"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </DropdownTrigger>

          <DropdownMenu aria-label="Navigation Menu">
            <DropdownSection>
              <DropdownItem
                key="services"
                onPress={() => scrollTo('services')}
                textValue="services"
                className="text-white"
              >
                {t('header.nav1')}
              </DropdownItem>
              <DropdownItem
                key="cases"
                onPress={() => scrollTo('cases')}
                textValue="cases"
                className="text-white"
              >
                {t('header.nav2')}
              </DropdownItem>
              <DropdownItem
                key="studio"
                onPress={() => scrollTo('studio')}
                textValue="studio"
                className="text-white"
              >
                {t('header.nav3')}
              </DropdownItem>
              <DropdownItem
                key="footer"
                onPress={() => scrollTo('footer')}
                textValue="footer"
                className="text-white"
              >
                {t('header.nav5')}
              </DropdownItem>
            </DropdownSection>

            <DropdownSection>
              <DropdownItem
                key="lang"
                isReadOnly={true}
                textValue="lang"
                className="cursor-default"
              >
                <LangDetector />
              </DropdownItem>
              <DropdownItem key="button" textValue="button" className="p-0">
                <Button
                  variant="header"
                  icon={btnArrow}
                  size="md"
                  onClick={onOpen}
                  text={t('header.btn_standard')}
                  className="w-full"
                />
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  )
})

MobHeader.displayName = 'MobHeader'
