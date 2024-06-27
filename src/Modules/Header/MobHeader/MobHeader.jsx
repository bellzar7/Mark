import React, { memo, useState } from 'react'
import styles from './MobHeader.module.css'
import { scroller } from 'react-scroll'
import { logo } from '../../../Assets/Images'
import { useTranslation } from 'react-i18next'
import { CustomButton, LangDetector } from '../../../Components'
import { btnArrow } from '../../../Assets/Icons'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react'

const MobHeader = memo(({ modalState }) => {
  const [iconChange, setIconChange] = useState(true)

  const [t] = useTranslation()

  let { onOpen } = modalState

  const scrollTo = (where) => {
    scroller.scrollTo(where)
  }

  return (
    <header className={`customContainer ${styles.wrap}`}>
      <div className={styles.wrap_container}>
        <img src={logo} alt="logo" className={styles.wrap_container_logo} />

        <Dropdown
          onOpenChange={() => setIconChange(!iconChange)}
          className={styles.myBurger}
        >
          <DropdownTrigger>
            <button className={styles.myBurger_toggleBtn}>
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
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownSection>
              <DropdownItem
                onPress={() => scrollTo('asd')}
                textValue={'services'}
              >
                {t('header.nav1')}
              </DropdownItem>
              <DropdownItem onPress={() => scrollTo('asd')} textValue={'cases'}>
                {t('header.nav2')}
              </DropdownItem>
              <DropdownItem
                onPress={() => scrollTo('asd')}
                textValue={'aboutUs'}
              >
                {t('header.nav3')}
              </DropdownItem>
              <DropdownItem
                onPress={() => scrollTo('asd')}
                textValue={'vacancies'}
              >
                {t('header.nav4')}
              </DropdownItem>
              <DropdownItem
                onPress={() => scrollTo('asd')}
                textValue={'contacts'}
              >
                {t('header.nav5')}
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem isReadOnly={true} textValue={'lang'}>
                <LangDetector />
              </DropdownItem>
              <DropdownItem textValue={'btn'}>
                <CustomButton
                  variant={'header'}
                  icon={btnArrow}
                  size={'md'}
                  className={styles.myBurger_custBtn}
                  onClick={onOpen}
                />
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  )
})

export default MobHeader
