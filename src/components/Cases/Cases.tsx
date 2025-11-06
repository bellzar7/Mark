'use client'

import { useRef, useState, memo } from 'react'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { casesBtnArrow } from '@/Assets/Icons'
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
} from '@/Assets/Images'
import { useWindowSize } from '@/Components/Hooks'

interface CaseItemProps {
  revert: boolean
  first: any
  second: any
  link: string
  styleF: React.CSSProperties
  styleS: React.CSSProperties
}

const CaseItem = memo<CaseItemProps>(({ revert, first, second, link, styleF, styleS }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className={`flex items-center gap-8 2xl:gap-5 lg:gap-3 md:flex-col md:gap-3 ${revert ? 'flex-row-reverse md:flex-col' : 'flex-row md:flex-col'}`}>
      <div
        className="w-[560px] h-[600px] rounded-[30px] relative 2xl:w-[360px] 2xl:h-[386px] lg:w-[228px] lg:h-[240px] md:w-full md:h-auto md:rounded-[24px]"
        style={revert ? styleS : styleF}
      >
        <Image
          src={first}
          alt="case"
          fill
          className="object-cover rounded-[30px] md:rounded-[24px]"
        />
        <div className="absolute right-0 bottom-0 p-6 md:p-3">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button
              className="relative flex w-11 h-11 justify-center items-center rounded-[14px] bg-[rgba(10,132,255,0.08)] backdrop-blur-[6px] hover:bg-[rgba(10,132,255,0.25)] active:bg-[rgba(10,132,255,0.3)]"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Image src={casesBtnArrow} alt="arrow" width={20} height={20} />
              <Image
                src={casesBtnOverlay}
                alt="overlay"
                width={170}
                height={90}
                className={`absolute -top-[60px] right-1/2 translate-x-[27%] max-w-[170px] w-[170px] h-[90px] ${isHover ? 'animate-[moveTop_0.5s_forwards]' : 'invisible'}`}
              />
            </button>
          </a>
        </div>
      </div>

      <Image
        src={second}
        alt="case"
        className="h-full w-[1128px] 2xl:w-[760px] lg:h-[240px] lg:w-[484px] md:h-auto md:w-full"
        style={revert ? styleF : styleS}
      />
    </div>
  )
})

CaseItem.displayName = 'CaseItem'

export function Cases() {
  const { width } = useWindowSize()

  const getImage = (desktopImg: any, mobileImg: any) =>
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
    once: width <= 720,
    margin: '-10%',
  })

  return (
    <div
      className="customContainer pt-[100px] pb-10 flex flex-col items-center gap-10 overflow-hidden 2xl:pt-20 lg:pt-[100px] md:pt-5 md:pb-10"
      id="cases"
      ref={ref}
    >
      <h2 className="text-[#F2F2F2] text-center font-gilroy text-[40px] font-semibold leading-[48px] md:text-2xl md:leading-[130%]">
        Наші кейси
      </h2>

      {casesData.map((caseItem, index) => (
        <CaseItem
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

      <style jsx>{`
        @keyframes moveTop {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>
    </div>
  )
}
