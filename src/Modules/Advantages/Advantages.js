import { memo, useMemo, useRef } from 'react'
import style from './advantages.module.css'
import {
  AdaptiveIcon,
  ConversiesIcon,
  FigmaIcon,
  ReactIcon,
  SpeedIcon,
  StatisticsIcon,
} from '../../Assets/Icons'
import { useTranslation } from 'react-i18next'
import { useInView, motion } from 'framer-motion'
import { useWindowSize } from '../../Components/Hooks'

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

const AdvantageCard = memo(({ icon, alt, heading, text }) => (
  <motion.div variants={cardVariants} className={style.advantages_card}>
    <div>
      <img className={style.advantages_card_icon} src={icon} alt={alt} />
    </div>
    <div>
      <motion.h4
        variants={textVariants}
        className={style.advantages_card_heading}
      >
        {heading}
      </motion.h4>
      <motion.p variants={textVariants} className={style.advantages_card_text}>
        {text}
      </motion.p>
    </div>
  </motion.div>
))

const Advantages = () => {
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
    <div className={`customContainer ${style.advantages_block}`}>
      <h2 className={style.advantages_heading}>{t('advantages.title')}</h2>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={style.advantages_cards_block}
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

export { Advantages }
