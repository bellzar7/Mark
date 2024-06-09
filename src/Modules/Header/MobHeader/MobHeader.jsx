import React, { useState } from 'react'
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

        <div className={styles.myBurger}>
          <button
            className={styles.myBurger_toggle}
            onClick={() => {
              setIconChange(!iconChange)
            }}
          >
            {iconChange ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={`${styles.myBurger_svg} ${
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
                className={`${styles.myBurger_svg} ${
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
          </button>
          <div
            className={
              iconChange ? styles.hideMenu : styles.myBurger_menu__back
            }
            onClick={() => {
              setIconChange(!iconChange)
            }}
          ></div>
          <div className={iconChange ? styles.hideMenu : styles.myBurger_menu}>
            <div className={styles.myBurger_menu__item}>
              <Link to={'asd'}>{t('header.nav1')}</Link>
            </div>
            <div className={styles.myBurger_menu__item}>
              <Link to={'asd'}>{t('header.nav2')}</Link>
            </div>
            <div className={styles.myBurger_menu__item}>
              <Link to={'asd'}>{t('header.nav3')}</Link>
            </div>
            <div className={styles.myBurger_menu__item}>
              <Link to={'asd'}>{t('header.nav4')}</Link>
            </div>
            <div className={styles.myBurger_menu__item}>
              <Link to={'asd'}>{t('header.nav5')}</Link>
            </div>
            <div
              className={styles.myBurger_menu__item}
              onClick={() => {
                setIconChange(false)
              }}
            >
              <LangDetector />
            </div>
            <div className={styles.myBurger_menu__item}>
              <CustomButton variant={'header'} icon={btnArrow} size={'md'} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MobHeader
