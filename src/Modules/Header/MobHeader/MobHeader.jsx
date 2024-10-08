import React, { memo, useState } from 'react'
import styles from './MobHeader.module.css'
import { Link as PageLink } from 'react-router-dom'
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
import { WEBSITE_ROUTE } from '../../../Constants'

const MobHeader = memo(({ modalState }) => {
  const [iconChange, setIconChange] = useState(true)

  const [t] = useTranslation()

  let { onOpen } = modalState

  const scrollTo = (where) => {
    scroller.scrollTo(where, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  return (
    <header className={`customContainer ${styles.wrap}`}>
      <div className={styles.wrap_container}>
        <PageLink to={WEBSITE_ROUTE}>
          <img src={logo} alt="logo" className={styles.wrap_container_logo} />
        </PageLink>
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
                onPress={() => scrollTo('services')}
                textValue={'services'}
              >
                {t('header.nav1')}
              </DropdownItem>
              <DropdownItem onPress={() => scrollTo('asd')} textValue={'cases'}>
                {t('header.nav2')}
              </DropdownItem>
              <DropdownItem
                onPress={() => scrollTo('studio')}
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
                onPress={() => scrollTo('footer')}
                textValue={'contacts'}
              >
                {t('header.nav5')}
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem isReadOnly={true} textValue={'lang'}>
                <LangDetector />
              </DropdownItem>
              <DropdownItem textValue={'btn'} className={styles.btnWrap}>
                <CustomButton
                  variant={'header'}
                  icon={btnArrow}
                  size={'md'}
                  className={styles.myBurger_custBtn}
                  onClick={onOpen}
                  text={`${t('header.btn_standard')}`}
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
