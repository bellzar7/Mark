import React from 'react'
import style from './Services.module.css'
import { Box } from './Box'
import { serviceFrst, serviceScnd, serviceThrd } from '../../Assets/Images'
import { useDisclosure } from '@nextui-org/react'
import { PopUp } from '../PopUp'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const [t] = useTranslation()
  const modalState = useDisclosure()

  const boxes = [
    {
      img: serviceFrst,
      title: `${t('services.card1.title')}`,
      subTitle: `${t('services.card1.subtitle')}`,
      services: {
        first: { name: `${t('services.card1.services.first')}`, price: '490$' },
        second: {
          name: `${t('services.card1.services.second')}`,
          price: '790$',
        },
        third: { name: `${t('services.card1.services.third')}`, price: '990$' },
        fourth: {
          name: `${t('services.card1.services.fourth')}`,
          price: '1500$',
        },
      },
    },
    {
      img: serviceScnd,
      title: `${t('services.card2.title')}`,
      subTitle: `${t('services.card2.subtitle')}`,
      services: {
        first: { name: `${t('services.card2.services.first')}`, price: '490$' },
        second: {
          name: `${t('services.card2.services.second')}`,
          price: '790$',
        },
        third: { name: `${t('services.card2.services.third')}`, price: '990$' },
        fourth: {
          name: `${t('services.card2.services.fourth')}`,
          price: '1500$',
        },
      },
    },
    {
      img: serviceThrd,
      title: `${t('services.card3.title')}`,
      subTitle: `${t('services.card3.subtitle')}`,
      services: {
        first: { name: `${t('services.card3.services.first')}`, price: '490$' },
        second: {
          name: `${t('services.card3.services.second')}`,
          price: '790$',
        },
        third: { name: `${t('services.card3.services.third')}`, price: '990$' },
        fourth: {
          name: `${t('services.card3.services.fourth')}`,
          price: '1500$',
        },
      },
    },
  ]

  return (
    <div className={`customContainer ${style.wrap}`}>
      <h2 className={style.wrap_title}>{t('services.title')}</h2>
      <div className={style.wrap_boxes}>
        {boxes.map((box, index) => {
          return (
            <Box
              key={index}
              img={box.img}
              title={box.title}
              subTitle={box.subTitle}
              services={box.services}
              modalState={modalState}
            />
          )
        })}
      </div>
      <PopUp modalState={modalState} />
    </div>
  )
}

export { Services }
