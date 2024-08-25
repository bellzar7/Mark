import React, { useState, useMemo } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { Link as PageLink } from 'react-router-dom'

import style from './Footer.module.css'
import {
  inst_h,
  inst_s,
  tg_h,
  tg_s,
  logotype,
  watsapp_s,
  watsapp_h,
  linkedin_s,
  linkedin_h,
} from '../../Assets/Icons'
import {
  tel,
  mail,
  linkedinLink,
  instLink,
  tgLink,
  watsappLink,
} from '../../Constants/socials'
import { COOKIES_ROUTE, POLICY_ROUTE, WEBSITE_ROUTE } from '../../Constants'

const Footer = () => {
  const { t } = useTranslation()

  const links = useMemo(
    () => [
      { to: 'services', label: t('header.nav1') },
      { to: 'cases', label: t('header.nav2') },
      { to: 'studio', label: t('header.nav3') },
      { to: 'asd4', label: t('header.nav4') },
      { to: 'footer', label: t('header.nav5') },
    ],
    [t],
  )

  const socialsData = useMemo(
    () => [
      { normal: tg_s, hover: tg_h, link: tgLink },
      { normal: watsapp_s, hover: watsapp_h, link: watsappLink },
      { normal: inst_s, hover: inst_h, link: instLink },
      { normal: linkedin_s, hover: linkedin_h, link: linkedinLink },
    ],
    [],
  )

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const date = new Date().getFullYear()

  return (
    <div className={style.bg} id={'footer'}>
      <div className={`customContainer ${style.wrap}`}>
        <PageLink to={WEBSITE_ROUTE}>
          <img
            src={logotype}
            alt="logo"
            className={style.wrap_logo}
            loading="lazy"
          />
        </PageLink>
        <nav className={style.wrap_links}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              className={style.wrap_links__link}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className={style.wrap_rights}>
          <div className={style.wrap_rights__txt}>
            © {t('footer.rights.txt')} {date}
          </div>
          <PageLink to={POLICY_ROUTE} className={style.wrap_rights__label}>
            🚀{t('footer.rights.label1')}
          </PageLink>
          <PageLink to={COOKIES_ROUTE} className={style.wrap_rights__label}>
            🔬{t('footer.rights.label2')}
          </PageLink>
          {/*<div className={style.wrap_rights__label}>*/}
          {/*  👋{t('footer.rights.label3')}*/}
          {/*</div>*/}
        </div>
        <div className={style.wrap_contacts}>
          <div className={style.wrap_contacts__txt}>{t('footer.contacts')}</div>
          <a className={style.wrap_contacts__link} href={`tel:${tel}`}>
            {tel}
          </a>
          <a className={style.wrap_contacts__link} href={`mailto:${mail}`}>
            {mail}
          </a>
        </div>
        <div className={style.wrap_socials}>
          {socialsData.map((soc, index) => (
            <SocialMediaIcon
              key={index}
              normal={soc.normal}
              hover={soc.hover}
              link={soc.link}
            />
          ))}
        </div>
        <Link
          to={''}
          onClick={scrollToTop}
          smooth
          duration={500}
          className={style.wrap_scroll}
        >
          <div className={style.wrap_scroll__txt}>{t('footer.scroll')}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            className={style.wrap_scroll__arrow}
          >
            <path
              d="M0.473649 8.28143C0.607001 8.42188 0.790101 8.50446 0.983649 8.51143C1.19112 8.51527 1.39067 8.43182 1.53365 8.28143L7.23364 2.58144V15.8015C7.23903 16.2135 7.57168 16.5461 7.98364 16.5515C8.39561 16.5461 8.72826 16.2135 8.73364 15.8015V2.58142L14.4336 8.28143C14.6248 8.47793 14.9062 8.55753 15.172 8.49024C15.4377 8.42296 15.6474 8.21902 15.722 7.95524C15.7966 7.69147 15.7248 7.40793 15.5336 7.21143L8.53365 0.21143C8.23655 -0.0704768 7.77075 -0.0704768 7.47365 0.21143L0.473649 7.21143C0.330118 7.35245 0.249268 7.54522 0.249268 7.74643C0.249268 7.94764 0.330118 8.14042 0.473649 8.28143Z"
              fill="#C0C0C0"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

const SocialMediaIcon = ({ normal, hover, link }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={isHovered ? hover : normal}
        alt="social-icon"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={style.wrap_socials__img}
        loading="lazy"
      />
    </a>
  )
}

export { Footer }
