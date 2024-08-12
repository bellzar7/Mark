import { memo, useMemo } from 'react'
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

const AdvantageCard = memo(({ icon, alt, heading, text }) => (
  <div className={style.advantages_card}>
    <div>
      <img className={style.advantages_card_icon} src={icon} alt={alt} />
    </div>
    <div>
      <h1 className={style.advantages_card_heading}>{heading}</h1>
      <p className={style.advantages_card_text}>{text}</p>
    </div>
  </div>
))

const Advantages = () => {
  const { t } = useTranslation()

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

  return (
    <div className={`customContainer ${style.advantages_block}`}>
      <h2 className={style.advantages_heading}>{t('advantages.title')}</h2>
      <div className={style.advantages_cards_block}>
        {advantagesData.map((adv, index) => (
          <AdvantageCard
            key={index}
            icon={adv.icon}
            alt={adv.alt}
            heading={adv.heading}
            text={adv.text}
          />
        ))}
      </div>
    </div>
  )
}

export { Advantages }
