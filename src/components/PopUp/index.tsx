'use client'

import { Modal, ModalContent, Checkbox } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { PhoneInput } from 'react-international-phone'
import { memo, useEffect, useRef, useState } from 'react'
import { random } from 'lodash'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Toastify } from '@/components/Toastify'
import { closeBtn, iconMail, iconName } from '@/Assets/Icons'
import { getUTMParams, sendInTg } from '@/Constants/functions'

const videos = [
  'https://www.youtube.com/watch?v=_jpzpRoIgw8',
  'https://www.youtube.com/watch?v=2AzCdyjFuT4',
  'https://www.youtube.com/watch?v=hbR9Oht6sk4',
  'https://www.youtube.com/watch?v=oX2soG_3mh4',
  'https://www.youtube.com/watch?v=GevtQPBjBOw',
]

interface ModalState {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onOpenChange: () => void
}

interface PopUpProps {
  modalState: ModalState
}

export const PopUp = memo<PopUpProps>(({ modalState }) => {
  const [t] = useTranslation()
  const { isOpen, onClose, onOpenChange } = modalState
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors, touchedFields },
  } = useForm({ mode: 'all' })

  const [phone, setPhone] = useState('')
  const [isBlurredPhone, setIsBlurredPhone] = useState(false)

  const isPhoneValid = (phone: string) => {
    const phoneUtil = PhoneNumberUtil.getInstance()
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
    } catch (error) {
      return false
    }
  }
  const isValid = isPhoneValid(phone)

  const close = () => {
    onClose()
    reset()
    setPhone('')
    setIsBlurredPhone(false)
  }

  const toastId = useRef<any>(null)

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
      setPhone('')
      setIsBlurredPhone(false)
      onClose()
    }
  }, [isSubmitSuccessful, reset, onClose])

  const onSubmit = async (data: { name: string; email: string }) => {
    const utmParams = getUTMParams()
    const msg = `Заявка на консультацію:\nName - ${data.name}\nPhone - ${phone}\nEmail - ${data.email}\n${videos[random(0, videos.length - 1)]}\nUTMS:\nutm_source: ${utmParams.utm_source}\nutm_medium: ${utmParams.utm_medium}\nutm_campaign: ${utmParams.utm_campaign}\nutm_content: ${utmParams.utm_content}`

    if (isValid) {
      if (toastId.current) {
        toast.dismiss(toastId.current)
      }
      toastId.current = toast(<Toastify type="pending" />, {
        autoClose: false,
        hideProgressBar: true,
      })

      const resp = await sendInTg(msg)
      if (resp && resp.ok) {
        toast.update(toastId.current, {
          render: <Toastify type="success" />,
          type: 'success',
          icon: false,
          autoClose: 3000,
          hideProgressBar: false,
        })
      } else {
        toast.update(toastId.current, {
          render: `${t('toastify.warning.title')}`,
          type: 'error',
          autoClose: 7000,
        })
      }
    }
  }

  const redBorder = { border: '1px solid rgba(255,0,0,1)' }
  const greenBorder = { border: '1px solid rgba(100,255,100,1)' }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-white max-w-[90%] sm:max-w-md">
      <ModalContent>
        <div className="relative">
          <button
            onClick={close}
            className="absolute right-4 top-4 z-50 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Image src={closeBtn} alt="Close" width={24} height={24} />
          </button>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('popUp.form.title.first')} <span className="text-blue-600">{t('popUp.form.title.second')}</span>
              </h2>
              <p className="text-gray-600">{t('popUp.form.subTitle')}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('popUp.form.inputName.lbl')}
                </label>
                <div
                  className="flex items-center gap-2 px-4 py-3 border rounded-lg"
                  style={errors?.name && touchedFields?.name ? redBorder : !errors?.name && touchedFields?.name ? greenBorder : undefined}
                >
                  <Image src={iconName} alt="Name" width={20} height={20} />
                  <input
                    type="text"
                    id="name"
                    placeholder={t('popUp.form.inputName.placeholder')}
                    className="flex-1 outline-none"
                    {...register('name', {
                      required: "Це поле є обов'язкове для заповнення",
                      minLength: { value: 2, message: "Ім'я занадто коротке" },
                      maxLength: { value: 30, message: "Ім'я занадто довге" },
                    })}
                    autoComplete="off"
                  />
                </div>
                {errors?.name && touchedFields?.name && (
                  <span className="text-red-500 text-sm mt-1">{errors.name.message as string}</span>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('popUp.form.inputPhone.lbl')}
                </label>
                <div
                  className="border rounded-lg overflow-hidden"
                  style={!isValid && isBlurredPhone ? redBorder : isValid && isBlurredPhone ? greenBorder : undefined}
                >
                  <PhoneInput
                    defaultCountry="ua"
                    value={phone}
                    onChange={(e) => setPhone(e)}
                    onBlur={() => setIsBlurredPhone(true)}
                  />
                </div>
                {!isValid && isBlurredPhone && (
                  <span className="text-red-500 text-sm mt-1">Введіть коректний номер телефону</span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('popUp.form.inputEmail.lbl.first')} <span className="text-gray-400">{t('popUp.form.inputEmail.lbl.second')}</span>
                </label>
                <div
                  className="flex items-center gap-2 px-4 py-3 border rounded-lg"
                  style={errors?.email && touchedFields?.email ? redBorder : !errors?.email && touchedFields?.email ? greenBorder : undefined}
                >
                  <Image src={iconMail} alt="Email" width={20} height={20} />
                  <input
                    type="text"
                    id="email"
                    placeholder={t('popUp.form.inputEmail.placeholder')}
                    className="flex-1 outline-none"
                    {...register('email', {
                      required: false,
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Невірний формат email',
                      },
                    })}
                  />
                </div>
                {errors?.email && touchedFields?.email && (
                  <span className="text-red-500 text-sm mt-1">{errors.email.message as string}</span>
                )}
              </div>

              <Checkbox defaultSelected {...register('personalData')}>
                <span className="text-sm text-gray-600">{t('popUp.form.inputCheckbox.lbl')}</span>
              </Checkbox>
            </div>

            <div className="flex gap-3">
              <Button
                variant="standard"
                size="sm"
                type="submit"
                text={t('popUp.form.btn.submit')}
                disabled={!isValid || !!errors?.name || !!errors?.email}
                className="flex-1"
              />
              <Button
                variant="reject"
                size="sm"
                type="button"
                text={t('popUp.form.btn.reject')}
                onClick={close}
              />
            </div>
          </form>
        </div>
      </ModalContent>
    </Modal>
  )
})

PopUp.displayName = 'PopUp'
