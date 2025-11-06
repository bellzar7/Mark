'use client'

import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <NextUIProvider>
        <SpeedInsights />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {children}
        <ReCAPTCHA
          sitekey="6Ld_FDwqAAAAADdM1ke4HgZ7jIylNEKxdRF-VVsX"
          size="invisible"
        />
      </NextUIProvider>
    </I18nextProvider>
  )
}
