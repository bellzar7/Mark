'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'

export function CookieConsentMessage() {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white text-sm">
          {t('cookie.message') || 'We use cookies to improve your experience'}
        </p>
        <Button
          variant="standard"
          size="sm"
          onClick={accept}
          text={t('cookie.accept') || 'Accept'}
        />
      </div>
    </div>
  )
}
