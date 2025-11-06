'use client'

import { useTranslation } from 'react-i18next'
import { Spinner } from '@nextui-org/react'
import { iconDone } from '@/Assets/Icons'

interface ToastifyProps {
  type: 'pending' | 'success'
}

export function Toastify({ type }: ToastifyProps) {
  const { t } = useTranslation()

  if (type === 'pending') {
    return (
      <div className="flex items-center gap-3">
        <Spinner color="default" />
        <div className="flex flex-col gap-0">
          <h3 className="m-0 font-gilroy text-base font-medium leading-5 text-[#19191C]">
            {t('toastify.pending.title')}
          </h3>
          <p className="m-0 font-gilroy text-xs font-normal leading-tight text-[#7E818B]">
            {t('toastify.pending.subTitle')}
          </p>
        </div>
      </div>
    )
  }

  if (type === 'success') {
    return (
      <div className="flex items-center gap-3">
        <img src={iconDone} alt="done" loading="lazy" />
        <div className="flex flex-col gap-0">
          <h3 className="m-0 font-gilroy text-base font-medium leading-5 text-[#19191C]">
            {t('toastify.success.title')}
          </h3>
          <p className="m-0 font-gilroy text-xs font-normal leading-tight text-[#7E818B]">
            {t('toastify.success.subTitle')}
          </p>
        </div>
      </div>
    )
  }

  return null
}
