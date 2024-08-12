import React, { useState, useEffect, useCallback } from 'react'
import style from './CookieConsentMessage.module.css'
import { cookies } from '../../Assets/Images'
import { useTranslation } from 'react-i18next'

const CookieConsentMessage = () => {
  const { t } = useTranslation()

  const [isAccepted, setIsAccepted] = useState(() => {
    return localStorage.getItem('cookieConsent') === 'accepted'
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (consent) {
      setIsAccepted(consent === 'accepted')
    }
  }, [])

  const handleAccept = useCallback(() => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsAccepted(true)
  }, [])

  const handleDecline = useCallback(() => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsAccepted(true)
  }, [])

  if (isAccepted || localStorage.getItem('cookieConsent') === 'declined') {
    return null
  }

  return (
    <div className={style.wrap}>
      <img src={cookies} alt="cookies" className={style.wrap_img} />
      <div className={style.wrap_txts}>
        <h4 className={style.wrap_txts__title}>{t('cookies.title')}</h4>
        <p className={style.wrap_txts__subtitle}>
          {t('cookies.subtitle.first')}
          <span>{t('cookies.subtitle.second')}</span>{' '}
          {t('cookies.subtitle.third')}
        </p>
      </div>
      <div className={style.wrap_btns}>
        <button onClick={handleAccept} className={style.wrap_btns__accept}>
          {t('cookies.btns.first')}
        </button>
        <button onClick={handleDecline} className={style.wrap_btns__decline}>
          {t('cookies.btns.second')}
        </button>
      </div>
    </div>
  )
}

export { CookieConsentMessage }
