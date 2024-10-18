import React, { useRef } from 'react'
import style from './Studio.module.css'
import { studioIcon } from '../../Assets/Images'
import { CustomButton } from '../../Components'
import { btnMsg } from '../../Assets/Icons'
import { useDisclosure } from '@nextui-org/react'
import { PopUp } from '../PopUp'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'

const Studio = () => {
  const modalState = useDisclosure()

  const [t] = useTranslation()

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
        duration: 2,
        staggerChildren: 0.5,
      },
    },
  }

  return (
    <div className={style.wrap} id={'studio'} ref={ref}>
      <div className={`customContainer ${style.box}`}>
        <motion.img
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          src={studioIcon}
          alt=""
          className={style.box_img}
        />
        <div className={style.box_texts}>
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={style.box_texts__title}
          >
            {t('studio.title')}
          </motion.h1>
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={style.box_texts__subtitle}
          >
            {t('studio.subTitle')}
          </motion.p>
        </div>
        <CustomButton
          icon={btnMsg}
          variant={'standard'}
          size={'sm'}
          className={style.box_btn}
          onClick={modalState.onOpen}
          text={`${t('studio.btn')}`}
        />
      </div>
      <PopUp modalState={modalState} />
    </div>
  )
}

export { Studio }
