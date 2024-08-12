import React, { useState, useMemo } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

import style from './Footer.module.css'
import {
  inst_h,
  inst_s,
  tg_h,
  tg_s,
  arrowUp,
  logotype,
} from '../../Assets/Icons'
import { tel, mail, linkedinLink, instLink } from '../../Constants/socials'

const Footer = () => {
  const { t } = useTranslation()

  const links = useMemo(
    () => [
      { to: 'services', label: t('header.nav1') },
      { to: 'cases', label: t('header.nav2') },
      { to: 'studio', label: t('header.nav3') },
      { to: 'asd4', label: t('header.nav4') },
      { to: 'asd5', label: t('header.nav5') },
    ],
    [t],
  )

  const socialsData = useMemo(
    () => [
      { normal: inst_s, hover: inst_h, link: instLink },
      { normal: tg_s, hover: tg_h, link: linkedinLink },
    ],
    [],
  )

  return (
    <div className={style.bg} id={'footer'}>
      <div className={`customContainer ${style.wrap}`}>
        <img
          src={logotype}
          alt="logo"
          className={style.wrap_logo}
          loading="lazy"
        />
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
            © {t('footer.rights.txt')}
          </div>
          <div className={style.wrap_rights__label}>
            🚀{t('footer.rights.label1')}
          </div>
          <div className={style.wrap_rights__label}>
            🔬{t('footer.rights.label2')}
          </div>
          <div className={style.wrap_rights__label}>
            👋{t('footer.rights.label3')}
          </div>
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
        <Link to="studio" smooth duration={500} className={style.wrap_scroll}>
          <div className={style.wrap_scroll__txt}>{t('footer.scroll')}</div>
          <img
            src={arrowUp}
            alt="arrowUp"
            className={style.wrap_scroll__arrow}
          />
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
