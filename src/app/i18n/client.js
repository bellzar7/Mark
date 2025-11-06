'use client'

import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { useEffect, useState } from 'react'

const runsOnServerSide = typeof window === 'undefined'

// Initialize i18next for client-side
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language, namespace) => import(`../../../public/locales/${language}/${namespace}.json`)))
  .init({
    supportedLngs: ['ua', 'en'],
    fallbackLng: 'ua',
    lng: undefined, // let detect the language on client side
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

export function useTranslation(ns, options) {
  const ret = useTranslationOrg(ns, options)
  const { i18n } = ret

  if (runsOnServerSide && i18n.resolvedLanguage !== options?.lng) {
    i18n.changeLanguage(options?.lng)
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return
      setActiveLng(i18n.resolvedLanguage)
    }, [activeLng, i18n.resolvedLanguage])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!options?.lng || i18n.resolvedLanguage === options.lng) return
      i18n.changeLanguage(options.lng)
    }, [options?.lng, i18n])
  }

  return ret
}
