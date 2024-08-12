import React, { useState } from 'react'
import style from './Cases.module.css'
import { casesBtnArrow } from '../../Assets/Icons'
import {
  casesBtnOverlay,
  casesConcF,
  casesConcFMob,
  casesConcS,
  casesConcSMob,
  casesErovasF,
  casesErovasFMob,
  casesErovasS,
  casesErovasSMob,
  casesNinaF,
  casesNinaFMob,
  casesNinaS,
  casesNinaSMob,
  casesUsmailF,
  casesUsmailFMob,
  casesUsmailS,
  casesUsmailSMob,
} from '../../Assets/Images'

const Cases = () => {
  const width = window.screen.width

  const getImage = (desktopImg, mobileImg) =>
    width <= 720 ? mobileImg : desktopImg

  const casesData = [
    {
      revert: false,
      first: getImage(casesConcF, casesConcFMob),
      second: getImage(casesConcS, casesConcSMob),
      link: 'https://concrete-bureau.com/',
    },
    {
      revert: true,
      first: getImage(casesNinaS, casesNinaSMob),
      second: getImage(casesNinaF, casesNinaFMob),
      link: 'https://easter-baking.nina-leus.com.ua/',
    },
    {
      revert: false,
      first: getImage(casesUsmailF, casesUsmailFMob),
      second: getImage(casesUsmailS, casesUsmailSMob),
      link: 'https://usmilephilly.com/',
    },
    {
      revert: true,
      first: getImage(casesErovasS, casesErovasSMob),
      second: getImage(casesErovasF, casesErovasFMob),
      link: 'https://erovas.work/?page=1',
    },
  ]

  return (
    <div className={`customContainer ${style.wrap}`} id={'cases'}>
      <h2 className={style.wrap_title}>Наші кейси</h2>
      {casesData.map((caseItem, index) => (
        <Case
          key={index}
          revert={caseItem.revert}
          first={caseItem.first}
          second={caseItem.second}
          link={caseItem.link}
        />
      ))}
    </div>
  )
}

const Case = ({ revert, first, second, link }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)

  return (
    <div
      className={`${style.case} ${
        revert ? style.case_revertCase : style.case_rowCase
      }`}
    >
      <div className={style.case_box}>
        <img
          src={first}
          alt="first"
          loading="lazy"
          className={style.case_box__img}
        />
        <div className={style.case_box__btnWrap}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button
              className={style.case_box__btnWrap_btn}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={casesBtnArrow} alt="arrow" loading="lazy" />
              <img
                src={casesBtnOverlay}
                alt="overlay"
                loading="lazy"
                className={`${style.case_box__btnWrap_btn__overlay} ${
                  isHover ? style.case_box__btnWrap_btn__overlayHovered : ''
                }`}
              />
            </button>
          </a>
        </div>
      </div>
      <img
        src={second}
        alt="second"
        className={style.case_secondImg}
        loading="lazy"
      />
    </div>
  )
}

export { Cases }
