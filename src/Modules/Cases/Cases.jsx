import React, { useRef, useState } from 'react'
import style from './Cases.module.css'
import { casesBtnArrow } from '../../Assets/Icons'
import {
  casesBtnOverlay,
  casesMastermF,
  casesMastermFMob,
  casesMastermS,
  casesMastermSMob,
  casesWebuF,
  casesWebuFMob,
  casesWebuS,
  casesWebuSMob,
} from '../../Assets/Images'
import { useWindowSize } from '../../Components/Hooks'
import { useInView } from 'framer-motion'

const Cases = () => {
  const { width } = useWindowSize()

  const getImage = (desktopImg, mobileImg) =>
    width <= 720 ? mobileImg : desktopImg

  const casesData = [
    {
      revert: false,
      first: getImage(casesWebuF, casesWebuFMob),
      second: getImage(casesWebuS, casesWebuSMob),
      link: 'https://webuniverseua.com/showend',
    },
    {
      revert: true,
      first: getImage(casesMastermS, casesMastermSMob),
      second: getImage(casesMastermF, casesMastermFMob),
      link: 'https://bellzar7.github.io/agency/',
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, {
    // once: true,
    margin: '-10%',
  })

  return (
    <div className={`customContainer ${style.wrap}`} id={'cases'} ref={ref}>
      <h2 className={style.wrap_title}>Наші кейси</h2>
      {casesData.map((caseItem, index) => (
        <Case
          key={index}
          revert={caseItem.revert}
          first={caseItem.first}
          second={caseItem.second}
          link={caseItem.link}
          styleS={{
            transform: `translateX(${isInView ? 0 : 500}px)`,
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          styleF={{
            transform: `translateX(${isInView ? 0 : -500}px)`,
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
      ))}
    </div>
  )
}

const Case = ({ revert, first, second, link, styleF, styleS }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)

  return (
    <div
      className={`${style.case} ${
        revert ? style.case_revertCase : style.case_rowCase
      }`}
    >
      <div className={style.case_box} style={revert ? styleS : styleF}>
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
        style={revert ? styleF : styleS}
      />
    </div>
  )
}

export { Cases }
