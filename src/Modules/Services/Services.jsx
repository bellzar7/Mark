import React, { useRef } from 'react'
import style from './Services.module.css'
import { Box } from './Box'
import { serviceFrst, serviceScnd, serviceThrd } from '../../Assets/Images'
import { useDisclosure } from '@nextui-org/react'
import { PopUp } from '../PopUp'
import { useTranslation } from 'react-i18next'
import { useInView, motion } from 'framer-motion'

const Services = () => {
  const [t] = useTranslation()
  const modalState = useDisclosure()

  const boxes = [
    {
      img: serviceFrst,
      title: `${t('services.card1.title')}`,
      subTitle: `${t('services.card1.subtitle')}`,
      services: {
        first: { name: `${t('services.card1.services.first')}` },
        second: {
          name: `${t('services.card1.services.second')}`,
        },
        third: { name: `${t('services.card1.services.third')}` },
        fourth: {
          name: `${t('services.card1.services.fourth')}`,
        },
      },
    },
    {
      img: serviceScnd,
      title: `${t('services.card2.title')}`,
      subTitle: `${t('services.card2.subtitle')}`,
      services: {
        first: { name: `${t('services.card2.services.first')}` },
        second: {
          name: `${t('services.card2.services.second')}`,
        },
        third: { name: `${t('services.card2.services.third')}` },
        fourth: {
          name: `${t('services.card2.services.fourth')}`,
        },
      },
    },
    {
      img: serviceThrd,
      title: `${t('services.card3.title')}`,
      subTitle: `${t('services.card3.subtitle')}`,
      services: {
        first: { name: `${t('services.card3.services.first')}` },
        second: {
          name: `${t('services.card3.services.second')}`,
        },
        third: { name: `${t('services.card3.services.third')}` },
        fourth: {
          name: `${t('services.card3.services.fourth')}`,
        },
      },
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    margin: '-30%',
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.5,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, transform: 'translateY(-50px)' },
    visible: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
      className={`customContainer ${style.wrap}`}
      id={'services'}
    >
      <h2 className={style.wrap_title}>{t('services.title')}</h2>
      <div className={style.wrap_boxes}>
        {boxes.map((box, index) => {
          return (
            <motion.div variants={cardVariants} key={index}>
              <Box
                img={box.img}
                title={box.title}
                subTitle={box.subTitle}
                services={box.services}
                modalState={modalState}
                variants={cardVariants}
              />
            </motion.div>
          )
        })}
      </div>
      <PopUp modalState={modalState} />
    </motion.div>
  )
}

export { Services }
