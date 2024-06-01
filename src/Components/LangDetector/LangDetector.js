import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { EN, UA } from '../../Assets/Images'
import './LangDetector.module.css'
import { Dropdown } from 'react-bootstrap'
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
      <Dropdown.Toggle id="dropdown-basic">
        <img src={langImage} alt={langImage} />
        <span>{langName}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            changeLanguage('ua')
          }}
        >
          <img src={UA} alt={UA} />
          <span>Укр</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            changeLanguage('en')
          }}
        >
          <img src={EN} alt={EN} />
          <span>Eng</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export { LangDetector }
