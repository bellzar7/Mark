'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
} from '@nextui-org/react'
import { EN, UA } from '@/Assets/Images'

export function LangDetector() {
  const [_, i18n] = useTranslation()
  const [langImage, setLangImage] = useState(UA)
  const [langName, setLangName] = useState('Укр')

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  useEffect(() => {
    if (i18n.language === 'ua') {
      setLangImage(UA)
      setLangName('Укр')
    } else if (i18n.language === 'en') {
      setLangImage(EN)
      setLangName('Eng')
    }
  }, [i18n.language])

  return (
    <Dropdown className="bg-black border border-gray-800">
      <DropdownTrigger>
        <Button
          variant="light"
          className="flex items-center gap-2 px-3 py-2 min-w-0 h-auto bg-transparent hover:bg-gray-900 transition-colors data-[hover=true]:bg-gray-900"
        >
          <Image src={langImage} alt={langName} width={20} height={14} />
          <span className="text-white text-sm font-gilroy">{langName}</span>
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Language selection">
        <DropdownItem
          key="ua"
          onPress={() => changeLanguage('ua')}
          textValue="ua"
          className="text-white"
        >
          <div className="flex items-center gap-2">
            <Image src={UA} alt="Ukrainian" width={20} height={14} />
            <span>Укр</span>
          </div>
        </DropdownItem>
        <DropdownItem
          key="en"
          onPress={() => changeLanguage('en')}
          textValue="en"
          className="text-white"
        >
          <div className="flex items-center gap-2">
            <Image src={EN} alt="English" width={20} height={14} />
            <span>Eng</span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
