import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { EN, UA } from '../../../Assets/Images'
import './LangDecetor.css'
import { Dropdown } from 'react-bootstrap'

const LangDecetor = () => {
  const [t, i18n] = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const [langImage, setLangImage] = useState(null)

  useEffect(() => {
    i18n.language === 'ua'
      ? setLangImage(UA)
      : i18n.language === 'en'
      ? setLangImage(EN)
      : console.log('smth get wrong')
  }, [i18n.language])

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <img src={langImage} alt="" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <img
            src={UA}
            alt=""
            onClick={() => {
              changeLanguage('ua')
            }}
          />
        </Dropdown.Item>
        <Dropdown.Item>
          <img
            src={EN}
            alt=""
            onClick={() => {
              changeLanguage('en')
            }}
          />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export { LangDecetor }
