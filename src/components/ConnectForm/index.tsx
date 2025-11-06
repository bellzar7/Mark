'use client'

import { useDisclosure } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { PopUp } from '../PopUp'

export function ConnectForm() {
  const modalState = useDisclosure()
  const { t } = useTranslation()

  return (
    <>
      <section className="bg-black py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('connectForm.title') || 'Ready to Start?'}
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            {t('connectForm.subtitle') || 'Contact us today'}
          </p>
          <Button
            variant="standard"
            size="lg"
            onClick={modalState.onOpen}
            text={t('connectForm.btn') || 'Get in Touch'}
          />
        </div>
      </section>
      <PopUp modalState={modalState} />
    </>
  )
}
