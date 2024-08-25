import React from 'react'
import style from '../../PolicyPage/Policy/Policy.module.css'
import { useTranslation } from 'react-i18next'

const Cookies = () => {
  const { t } = useTranslation()
  return (
    <div className={style.policy}>
      <div className={'customContainer'}>
        <h2 className={style.policy_title}>{t('cookiesPage.title')}</h2>
        <div className={style.policy_texts}>
          <p className={style.policy_texts__prgrf}>
            {t('cookiesPage.subtitle')}
          </p>
          <div>
            <h4 className={style.policy_texts__title}>
              {t('cookiesPage.box1.title')}
            </h4>
            <p className={style.policy_texts__prgrf}>
              {t('cookiesPage.box1.subtitle')}
            </p>
          </div>
          <div>
            <h4 className={style.policy_texts__title}>
              {t('cookiesPage.box2.title')}
            </h4>
            <p className={style.policy_texts__prgrf}>
              {t('cookiesPage.box2.subtitle')}
              <ul>
                <li>{t('cookiesPage.box2.txt1')}</li>
                <li>{t('cookiesPage.box2.txt2')}</li>
                <li>{t('cookiesPage.box2.txt3')}</li>
                <li>{t('cookiesPage.box2.txt4')}</li>
              </ul>
            </p>
          </div>
          <div>
            <h4 className={style.policy_texts__title}>
              {t('cookiesPage.box3.title')}
            </h4>
            <p className={style.policy_texts__prgrf}>
              {t('cookiesPage.box3.subtitle')}
            </p>
          </div>
          <div>
            <h4 className={style.policy_texts__title}>
              {t('cookiesPage.box4.title')}
            </h4>
            <p className={style.policy_texts__prgrf}>
              {t('cookiesPage.box4.subtitle')}
            </p>
          </div>
          <div className={style.policy_label}>
            <div className={style.policy_label__wrap}>
              {t('cookiesPage.label')} 👋
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Cookies }
