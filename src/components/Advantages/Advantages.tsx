'use client'

import { memo, useMemo, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import {
  AdaptiveIcon,
  ConversiesIcon,
  FigmaIcon,
  ReactIcon,
  SpeedIcon,
  StatisticsIcon,
} from '@/Assets/Icons'
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
  hidden: { opacity: 0, transform: 'translateX(100px)' },
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

interface AdvantageCardProps {
  icon: StaticImageData | string
  alt: string
  heading: string
  text: string
}

const AdvantageCard = memo(({ icon, alt, heading, text }: AdvantageCardProps) => (
  <motion.div
    variants={cardVariants}
    className="group flex h-[280px] w-[552px] flex-col items-center justify-center gap-6 rounded-[30px] border border-[#121212] bg-[rgb(5,5,5)] p-8 transition-colors duration-150 hover:border-[#0D571F] hover:bg-[rgba(5,142,38,0.1)] 2xl:w-[356px] lg:w-[350px] md:h-auto md:w-full md:rounded-[18px] md:border-[#0D571F]"
  >
    <div className="relative w-[60px] h-[60px]">
      <Image src={icon} alt={alt} width={60} height={60} className="w-[60px] h-[60px]" />
    </div>
    <div>
      <motion.h4
        variants={textVariants}
        className="mb-1 text-center font-gilroy text-[28px] font-semibold leading-normal text-white group-hover:animate-storm md:text-2xl"
      >
        {heading}
      </motion.h4>
      <motion.p
        variants={textVariants}
        className="m-0 text-center font-gilroy text-base font-normal leading-[130%] text-[#686A71] group-hover:animate-storm md:text-[15px]"
      >
        {text}
      </motion.p>
    </div>
  </motion.div>
))

AdvantageCard.displayName = 'AdvantageCard'

export const Advantages = () => {
  const { t } = useTranslation()
  const { width } = useWindowSize()

  const advantagesData = useMemo(
    () => [
      {
        icon: FigmaIcon,
        alt: 'FigmaIcon',
        heading: t('advantages.card1.title'),
        text: t('advantages.card1.txt'),
      },
      {
        icon: AdaptiveIcon,
        alt: 'AdaptiveIcon',
        heading: t('advantages.card2.title'),
        text: t('advantages.card2.txt'),
      },
      {
        icon: SpeedIcon,
        alt: 'SpeedIcon',
        heading: t('advantages.card3.title'),
        text: t('advantages.card3.txt'),
      },
      {
        icon: ReactIcon,
        alt: 'ReactIcon',
        heading: t('advantages.card4.title'),
        text: t('advantages.card4.txt'),
      },
      {
        icon: ConversiesIcon,
        alt: 'ConversiesIcon',
        heading: t('advantages.card5.title'),
        text: t('advantages.card5.txt'),
      },
      {
        icon: StatisticsIcon,
        alt: 'StatisticsIcon',
        heading: t('advantages.card6.title'),
        text: t('advantages.card6.txt'),
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
    <div className="customContainer overflow-hidden py-[60px] md:py-10">
      <h2 className="mb-10 text-center font-gilroy text-[40px] font-semibold leading-[48px] text-[#F2F2F2] md:mb-[30px] md:text-2xl md:leading-[31px]">
        {t('advantages.title')}
      </h2>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="flex flex-row flex-wrap justify-center gap-8 lg:gap-5 md:gap-4"
      >
        {advantagesData.map((adv, index) => (
          <AdvantageCard
            key={index}
            icon={adv.icon}
            alt={adv.alt}
            heading={adv.heading}
            text={adv.text}
          />
        ))}
      </motion.div>
    </div>
  )
}
