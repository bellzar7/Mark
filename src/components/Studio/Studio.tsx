'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useDisclosure } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { studioIcon } from '@/Assets/Images'
import { btnMsg } from '@/Assets/Icons'
import { Button } from '../ui/Button'
import { PopUp } from '../PopUp'

export function Studio() {
  const modalState = useDisclosure()
  const { t } = useTranslation()

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
    <>
      <div
        id="studio"
        ref={ref}
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/Assets/Images/studioBG.webp)' }}
      >
        <div className="customContainer flex flex-col items-center gap-8 pt-[150px] pb-[204px] 2xl:pt-[120px] 2xl:pb-[120px] lg:pt-[130px] lg:pb-[160px] md:pt-10 md:pb-[60px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="w-[90px] h-[90px] md:w-[60px] md:h-[60px] relative"
          >
            <Image
              src={studioIcon}
              alt="Studio Icon"
              fill
              className="object-contain"
            />
          </motion.div>

          <div className="flex flex-col items-center gap-4 md:gap-3">
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-[#F2F2F2] text-center font-gilroy text-[92px] font-medium leading-[88px] w-[930px]
                         2xl:text-[60px] 2xl:leading-[64px] 2xl:w-[700px]
                         lg:text-[60px] lg:leading-[120%] lg:w-[587px]
                         md:text-[32px] md:w-[320px] md:leading-normal
                         mb-0"
            >
              {t('studio.title')}
            </motion.h1>

            <motion.p
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-[#686A71] text-center font-gilroy text-[20px] font-normal leading-normal tracking-[0.4px] w-[1200px]
                         2xl:text-base 2xl:w-full
                         lg:text-base lg:w-full lg:tracking-[0.32px]
                         md:text-[15px] md:w-full md:tracking-[0.3px]
                         mb-0"
            >
              {t('studio.subTitle')}
            </motion.p>
          </div>

          <Button
            icon={btnMsg}
            variant="standard"
            size="sm"
            onClick={modalState.onOpen}
            text={t('studio.btn')}
            className="py-3 px-12 gap-2"
          />
        </div>
      </div>
      <PopUp modalState={modalState} />
    </>
  )
}
