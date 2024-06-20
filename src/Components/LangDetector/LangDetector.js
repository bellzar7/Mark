import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { EN, UA } from '../../Assets/Images'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import styles from './LangDetector.module.css'

const LangDetector = () => {
  const [t, i18n] = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const [langImage, setLangImage] = useState(null)
  const [langName, setLangName] = useState('Укр')

  useEffect(() => {
    if (i18n.language === 'ua') {
      setLangImage(UA)
      setLangName('Укр')
    } else if (i18n.language === 'en') {
      setLangImage(EN)
      setLangName('Eng')
    } else {
      console.log('Something went wrong')
    }
  }, [i18n.language])

  return (
    <Dropdown className={styles.myLang}>
      <DropdownTrigger id="dropdown-basic">
        <button className={styles.myLang_btn}>
          <img src={langImage} alt={langImage} />
          <span>{langName}</span>
        </button>
      </DropdownTrigger>

      <DropdownMenu>
        <DropdownItem
          onPress={() => {
            changeLanguage('ua')
          }}
          textValue={'ua'}
        >
          <img src={UA} alt={UA} />
          <span>Укр</span>
        </DropdownItem>
        <DropdownItem
          onPress={() => {
            changeLanguage('en')
          }}
          textValue={'en'}
        >
          <img src={EN} alt={EN} />
          <span>Eng</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export { LangDetector }
