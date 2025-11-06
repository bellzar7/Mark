'use client'

import { useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView, motion } from 'framer-motion'
import { useWindowSize } from '@/Components/Hooks/useWindowSize'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, transform: 'translateX(-100px)' },
  visible: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: {
      duration: 0.7,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, transform: 'translateX(50px)' },
  visible: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      delay: 0.06,
    },
  },
}

export const Steps = () => {
  const { t } = useTranslation()
  const { width } = useWindowSize()

  const stepsData = useMemo(
    () => [
      {
        icon: '01',
        title: t('steps.card1.title'),
        text: t('steps.card1.txt'),
      },
      {
        icon: '02',
        title: t('steps.card2.title'),
        text: t('steps.card2.txt'),
      },
      {
        icon: '03',
        title: t('steps.card3.title'),
        text: t('steps.card3.txt'),
      },
      {
        icon: '04',
        title: t('steps.card4.title'),
        text: t('steps.card4.txt'),
      },
      {
        icon: '05',
        title: t('steps.card5.title'),
        text: t('steps.card5.txt'),
      },
      {
        icon: '06',
        title: t('steps.card6.title'),
        text: t('steps.card6.txt'),
      },
    ],
    [t],
  )

  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: width <= 720,
    margin: '-10%',
  })

  return (
    <div className="customContainer py-[60px] md:py-10">
      <h2 className="mb-10 text-center font-gilroy text-[40px] font-semibold leading-[48px] text-[#F2F2F2] md:mb-[30px] md:text-2xl md:leading-[31px]">
        {t('steps.title')}
      </h2>
      <motion.div
        className="flex flex-row flex-wrap justify-center gap-8 2xl:gap-5 lg:gap-5 md:gap-4"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {stepsData.map(({ icon, title, text }, index) => (
          <motion.div
            key={index}
            className="group flex h-[320px] w-[552px] flex-col items-start justify-center gap-7 rounded-[30px] border border-[#121212] bg-[#050505] p-8 transition-[border-color,background-color] duration-150 hover:border-[#0D2657] hover:bg-[rgba(13,38,87,0.1)] 2xl:h-auto 2xl:w-[366px] lg:h-[320px] lg:w-[350px] md:h-auto md:w-full md:rounded-[18px] md:border-[#0D2657]"
            variants={cardVariants}
          >
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[80px] bg-[rgba(39,43,48,0.2)] text-center font-gilroy text-xl font-normal leading-[130%] text-[#0D2657] transition-[background-color,color] duration-150 group-hover:bg-[#0D3789] group-hover:text-[#879DCA] md:bg-[#0D3789] md:text-[#879DCA]">
              {icon}
            </div>
            <div>
              <motion.h3
                className="mb-2 font-gilroy text-[28px] font-semibold leading-normal text-white group-hover:animate-storm 2xl:text-xl md:text-2xl"
                variants={textVariants}
              >
                {title}
              </motion.h3>
              <motion.p
                className="m-0 font-gilroy text-base font-normal leading-[130%] text-[#686A71] group-hover:animate-storm 2xl:text-[15px] md:text-[15px]"
                variants={textVariants}
              >
                {text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
