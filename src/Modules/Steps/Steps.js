import React, { useMemo } from 'react'
import style from './steps.module.css'
import { useTranslation } from 'react-i18next'

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

  return (
    <div className={`customContainer ${style.steps_block}`}>
      <h2 className={style.steps_heading}>{t('steps.title')}</h2>
      <div className={style.steps_cards_block}>
        {stepsData.map(({ icon, title, text }, index) => (
          <div key={index} className={style.steps_card}>
            <div className={style.steps_icons_block}>{icon}</div>
            <div>
              <h1 className={style.steps_card_heading}>{title}</h1>
              <p className={style.steps_card_text}>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Steps }
