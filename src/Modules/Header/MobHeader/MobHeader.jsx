import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import styles from './MobHeader.module.css'
import { Link } from 'react-scroll'
import { logo } from '../../../Assets/Images'
import { useTranslation } from 'react-i18next'
import { CustomButton, LangDetector } from '../../../Components'
import { btnArrow } from '../../../Assets/Icons'

const MobHeader = () => {
  const [iconChange, setIconChange] = useState(true)

  const [t] = useTranslation()

  return (
    <header className={`customContainer ${styles.wrap}`}>
      <div className={styles.wrap_container}>
        <img src={logo} alt="logo" className={styles.wrap_container_logo} />

        <Dropdown
          className={styles.myLang}
          onToggle={() => {
            setIconChange(!iconChange)
          }}
        >
          <Dropdown.Toggle id="dropdown-basic">
            {iconChange ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={`${styles.myLang_svg} ${
                  iconChange ? styles.show : ''
                }`}
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
                className={`${styles.myLang_svg} ${
                  iconChange ? '' : styles.hide
                }`}
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
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={'asd'}>{t('header.nav1')}</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={'asd'}>{t('header.nav2')}</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={'asd'}>{t('header.nav3')}</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={'asd'}>{t('header.nav4')}</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={'asd'}>{t('header.nav5')}</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <LangDetector />
            </Dropdown.Item>
            <Dropdown.Item>
              <CustomButton variant={'header'} icon={btnArrow} size={'md'} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  )
}

export default MobHeader
