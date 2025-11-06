'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'

// Initialize i18next
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(resourcesToBackend((language, namespace) => import(`../../public/locales/${language}/${namespace}.json`)))
    .init({
      supportedLngs: ['ua', 'en'],
      fallbackLng: 'ua',
      lng: undefined,
      fallbackNS: 'translation',
      defaultNS: 'translation',
      ns: 'translation',
      debug: false,
      detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator'],
        caches: ['cookie'],
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    })
}

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <SpeedInsights />
      <ToastContainer />
      {children}
      <ReCAPTCHA
        sitekey="6Ld_FDwqAAAAADdM1ke4HgZ7jIylNEKxdRF-VVsX"
        size="invisible"
      />
    </NextUIProvider>
  )
}
