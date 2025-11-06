'use client'

import { useDisclosure } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { PopUp } from '../PopUp'

export function CtaForm() {
  const modalState = useDisclosure()
  const { t } = useTranslation()

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('ctaForm.title') || 'Start Your Project Today'}
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            {t('ctaForm.subtitle') || 'Let\'s build something amazing together'}
          </p>
          <Button
            variant="header"
            size="lg"
            onClick={modalState.onOpen}
            text={t('ctaForm.btn') || 'Contact Us'}
            className="bg-white text-black hover:bg-gray-100"
          />
        </div>
      </section>
      <PopUp modalState={modalState} />
    </>
  )
}
