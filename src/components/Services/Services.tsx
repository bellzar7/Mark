'use client'

import { useRef, memo } from 'react'
import Image from 'next/image'
import { useDisclosure } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { serviceFrst, serviceScnd, serviceThrd, serviceDone } from '@/Assets/Images'
import { Button } from '@/components/ui/Button'
import { PopUp } from '@/components/PopUp'

interface BoxProps {
  img: any
  title: string
  subTitle: string
  services: {
    first: { name: string }
    second: { name: string }
    third: { name: string }
    fourth: { name: string }
  }
  modalState: ReturnType<typeof useDisclosure>
}

const Box = memo<BoxProps>(({ img, title, subTitle, services, modalState }) => {
  const { t } = useTranslation()
  const { onOpen } = modalState

  return (
    <div className="group p-[30px] flex flex-col items-center gap-[10px] rounded-[30px] border border-[#121212] bg-[#050505] box-border h-[603px] transition-transform duration-300 ease-in-out
                    hover:border-[#0D571F] hover:scale-105 hover:h-auto
                    2xl:h-[489px]
                    lg:p-0 lg:px-5 lg:pb-5 lg:rounded-[32px] lg:border-[#0D571F] lg:h-[595px] lg:transition-none lg:w-[350px] lg:hover:h-[595px] lg:hover:scale-100
                    md:rounded-[24px] md:border-[#08260F] md:w-full md:h-auto md:hover:h-auto md:hover:scale-100 md:hover:border-[#08260F]">
      <Image src={img} alt="service" className="w-auto h-auto" />

      <div className="flex flex-col gap-5 w-full">
        <div className="w-full">
          <h3 className="text-[#F2F2F2] font-gilroy text-[32px] font-semibold leading-normal mb-[5px]
                        2xl:text-[20px] 2xl:font-medium
                        lg:text-2xl lg:font-semibold">
            {title}
          </h3>
          <p className="text-[#686A71] font-gilroy text-base font-[450] leading-[130%] self-stretch mb-0 w-[472px] line-clamp-2 overflow-hidden
                       2xl:text-sm 2xl:font-light 2xl:w-[303px]
                       lg:text-base lg:font-[450] lg:w-[310px] lg:line-clamp-4 lg:h-[84px]
                       md:text-[15px] md:w-full md:h-auto md:line-clamp-none
                       group-hover:2xl:line-clamp-4">
            {subTitle}
          </p>
        </div>

        <div className="flex flex-col gap-5 2xl:gap-4">
          {[services.first, services.second, services.third, services.fourth].map((service, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Image src={serviceDone} alt="done" width={26} height={26} />
              <span className="text-[#F2F2F2] font-gilroy text-lg font-[450] leading-normal
                              2xl:text-base
                              lg:text-base">
                {service.name}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden justify-center items-center group-hover:flex
                       lg:flex">
          <Button
            variant="standard"
            size="md"
            text={t('services.btn')}
            onClick={onOpen}
            className="py-3 px-12"
          />
        </div>
      </div>
    </div>
  )
})

Box.displayName = 'Box'

export function Services() {
  const { t } = useTranslation()
  const modalState = useDisclosure()

  const boxes = [
    {
      img: serviceFrst,
      title: t('services.card1.title'),
      subTitle: t('services.card1.subtitle'),
      services: {
        first: { name: t('services.card1.services.first') },
        second: { name: t('services.card1.services.second') },
        third: { name: t('services.card1.services.third') },
        fourth: { name: t('services.card1.services.fourth') },
      },
    },
    {
      img: serviceScnd,
      title: t('services.card2.title'),
      subTitle: t('services.card2.subtitle'),
      services: {
        first: { name: t('services.card2.services.first') },
        second: { name: t('services.card2.services.second') },
        third: { name: t('services.card2.services.third') },
        fourth: { name: t('services.card2.services.fourth') },
      },
    },
    {
      img: serviceThrd,
      title: t('services.card3.title'),
      subTitle: t('services.card3.subtitle'),
      services: {
        first: { name: t('services.card3.services.first') },
        second: { name: t('services.card3.services.second') },
        third: { name: t('services.card3.services.third') },
        fourth: { name: t('services.card3.services.fourth') },
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
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        ref={ref}
        className="customContainer pt-[100px] pb-10 flex flex-col items-center gap-10
                   2xl:pt-[100px] 2xl:pb-5
                   lg:pt-[100px] lg:pb-10
                   md:pt-20 md:gap-[10px]"
        id="services"
      >
        <h2 className="mb-0 text-[#F2F2F2] text-center font-gilroy text-[40px] font-semibold leading-[48px]
                      md:text-2xl">
          {t('services.title')}
        </h2>

        <div className="flex items-center justify-center w-full gap-8 px-6 h-[700px]
                       2xl:gap-5 2xl:px-0 2xl:h-[600px]
                       lg:flex-wrap lg:px-0 lg:h-auto
                       md:gap-5">
          {boxes.map((box, index) => (
            <motion.div variants={cardVariants} key={index}>
              <Box
                img={box.img}
                title={box.title}
                subTitle={box.subTitle}
                services={box.services}
                modalState={modalState}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <PopUp modalState={modalState} />
    </>
  )
}
