import React, { useMemo, useRef } from 'react'
import style from './steps.module.css'
import { useTranslation } from 'react-i18next'
import { useInView, motion } from 'framer-motion'

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

const Steps = () => {
  const { t } = useTranslation()

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
    // once: true,
    margin: '-10%',
  })

  return (
    <div className={`customContainer ${style.steps_block}`}>
      <h2 className={style.steps_heading}>{t('steps.title')}</h2>
      <motion.div
        className={style.steps_cards_block}
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {stepsData.map(({ icon, title, text }, index) => (
          <motion.div
            key={index}
            className={style.steps_card}
            variants={cardVariants}
          >
            <div className={style.steps_icons_block}>{icon}</div>
            <div>
              <motion.h3
                className={style.steps_card_heading}
                variants={textVariants}
              >
                {title}
              </motion.h3>
              <motion.p
                className={style.steps_card_text}
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

export { Steps }
