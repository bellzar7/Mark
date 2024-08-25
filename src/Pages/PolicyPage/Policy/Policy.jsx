import React from 'react'
import style from './Policy.module.css'
import { useTranslation } from 'react-i18next'

const Policy = () => {
  const { t } = useTranslation()
  return (
    <div className={style.policy}>
      <div className={'customContainer'}>
        <h2 className={style.policy_title}>{t('policy.title')}</h2>
        <div className={style.policy_texts}>
          <p className={style.policy_texts__prgrf}>{t('policy.subtitle')}</p>
          <div>
            <h4 className={style.policy_texts__title}>
              {t('policy.box1.title')}
            </h4>
            <p className={style.policy_texts__prgrf}>
              {t('policy.box1.subtitle')}
            </p>
          </div>
          <div>
            <h4 className={style.policy_texts__title}>
              {t('policy.box2.title')}
            </h4>
            <p className={style.policy_texts__prgrf}>
              {t('policy.box2.subtitle')}
            </p>
          </div>
          <div>
            <h4 className={style.policy_texts__title}>
              {t('policy.box3.title')}
            </h4>
            <p className={style.policy_texts__prgrf}>
              {t('policy.box3.subtitle')}
            </p>
          </div>
          <div>
            <h4 className={style.policy_texts__title}>
              {t('policy.box4.title')}
            </h4>
            <p className={style.policy_texts__prgrf}>
              {t('policy.box4.subtitle')}
            </p>
          </div>
          <div className={style.policy_label}>
            <div className={style.policy_label__wrap}>
              {t('policy.label')} 👋
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Policy }
