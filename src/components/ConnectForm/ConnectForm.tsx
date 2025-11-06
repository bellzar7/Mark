'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { connectFormPhoto, connectFormPhoto2 } from '@/Assets/Images'
import { btnArrow, iconName } from '@/Assets/Icons'
import { PhoneInput } from 'react-international-phone'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { toast } from 'react-toastify'
import { Button } from '@/components/ui/Button'
import { Toastify } from '@/components/Toastify'
import { getUTMParams, sendInTg } from '@/lib/functions'
import { useWindowSize } from '@/Components/Hooks/useWindowSize'
import 'react-international-phone/style.css'

interface FormData {
  name: string
}

export const ConnectForm = () => {
  const { t } = useTranslation()
  const { width } = useWindowSize()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<FormData>({ mode: 'all' })

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

  const toastId = useRef<any>(null)

  const onSubmit = async ({ name }: FormData) => {
    if (isValid) {
      if (toastId.current) {
        toast.dismiss(toastId.current)
      }
      toastId.current = toast(<Toastify type={'pending'} />, {
        autoClose: false,
        hideProgressBar: true,
      })
      const utmParams = getUTMParams()
      let msg = `Заявка на консультацію:\nName - ${name}\nPhone - ${phone}\nUTMS:\nutm_source: ${utmParams.utm_source}\nutm_medium: ${utmParams.utm_medium}\nutm_campaign: ${utmParams.utm_campaign}\nutm_content: ${utmParams.utm_content}`

      let resp = await sendInTg(msg)
      if (resp.ok) {
        toast.update(toastId.current, {
          render: <Toastify type={'success'} />,
          type: 'success',
          icon: false,
          autoClose: 3000,
          hideProgressBar: false,
        })
      }
      if (!resp.ok) {
        toast.update(toastId.current, {
          render: `${t('toastify.warning.title')}`,
          type: 'error',
          autoClose: 7000,
        })
      }

      reset()
      setPhone('')
      setIsBlurredPhone(false)
    } else {
      setIsBlurredPhone(true)
    }
  }

  const redBord = {
    boxShadow: 'inset 0px 0px 5px 5px rgba(255,0,0,.2)',
  }
  const greenBord = {
    boxShadow: 'inset 0px 0px 5px 5px rgba(100,255,100,.2)',
  }

  return (
    <div className="customContainer py-10 lg:py-0 lg:pb-10 md:py-0 md:pb-0">
      <div className="relative z-0 h-[370px] w-full rounded-[30px] bg-gradient-to-r from-[#0249B4] via-[rgba(2,73,180,0.5)] to-[#0249B4] lg:h-[320px] md:h-[378px] md:overflow-hidden md:rounded-[24px] after:absolute after:bottom-px after:left-px after:right-px after:top-px after:z-[1] after:rounded-[30px] after:bg-black md:after:rounded-[24px]">
        <div className="absolute bottom-0.5 left-0.5 right-0.5 top-0.5 z-[3] flex flex-col items-start justify-center gap-12 rounded-[30px] bg-[rgba(41,165,255,0.05)] px-[50px] py-[60px] lg:px-6 md:gap-7 md:rounded-[24px] md:px-4 md:py-7">
          <div className="flex flex-col items-start gap-1 md:gap-2">
            <h2 className="mb-0 text-center font-gilroy text-[52px] font-semibold leading-normal text-[#F2F2F2] 2xl:text-5xl lg:text-[40px] md:text-xl">
              {t('connectForm.title')}
            </h2>
            <h3 className="mb-0 text-center font-gilroy text-2xl font-normal leading-normal tracking-[0.48px] text-[#F2F2F2] 2xl:text-xl 2xl:tracking-[0.4px] lg:text-lg lg:tracking-[0.36px] md:text-start md:text-[15px] md:tracking-[0.3px]">
              {t('connectForm.subtitle')}{' '}
              <span className="font-bold text-[#0654CA]">
                {t('connectForm.subtitleSpan')}
              </span>{' '}
              {t('connectForm.subtitleNext')}
            </h3>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full items-center gap-3 md:flex-col md:items-stretch md:gap-5"
          >
            <div className="w-[350px] lg:w-[223px] md:w-full">
              <label
                htmlFor="name"
                className="mb-1.5 font-gilroy text-base font-normal leading-[120%] text-[#F2F2F2]"
              >
                {t('connectForm.form.inputName.lbl')}{' '}
                <span className="font-gilroy text-sm font-normal leading-[120%] text-[#515C6D]">
                  {t('connectForm.form.inputName.span')}
                </span>
              </label>
              <div
                className="flex h-11 items-center gap-2 rounded-xl border border-[#CACDD5] bg-white px-3 py-2.5 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
                style={
                  errors?.name && touchedFields?.name
                    ? redBord
                    : !errors?.name && touchedFields?.name
                    ? greenBord
                    : undefined
                }
              >
                <img
                  className="h-5 w-5"
                  src={iconName}
                  alt="people"
                  loading="lazy"
                />
                <input
                  type="text"
                  id="name"
                  placeholder={t('connectForm.form.inputName.placeholder')}
                  className="w-full rounded-md border-none pl-[3px] outline-none placeholder:font-gilroy placeholder:text-sm placeholder:font-normal placeholder:leading-6 placeholder:text-[#AAADB9]"
                  {...register('name', {
                    required: false,
                    minLength: 2,
                    maxLength: 30,
                  })}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="w-[350px] lg:w-[223px] md:w-full">
              <label
                htmlFor="Phone"
                className="mb-1.5 font-gilroy text-base font-normal leading-[120%] text-[#F2F2F2]"
              >
                {t('connectForm.form.inputPhone.lbl')}
              </label>
              <div
                className="flex h-11 items-center gap-2 rounded-xl border border-[#CACDD5] bg-white px-3 py-2.5 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] [&>div>button]:!h-6 [&>div>button]:!border-none [&>div>input]:!h-6 [&>div>input]:!w-full [&>div>input]:!rounded-md [&>div>input]:!border-none [&>div>input]:!font-gilroy [&>div>input]:!text-sm [&>div>input]:!font-normal [&>div>input]:!leading-6 [&>div>input]:!text-black [&>div]:h-6 [&>div]:w-full"
                style={
                  !isValid && isBlurredPhone
                    ? redBord
                    : isValid && isBlurredPhone
                    ? greenBord
                    : undefined
                }
              >
                <PhoneInput
                  defaultCountry="ua"
                  onChange={(e) => {
                    setPhone(e)
                  }}
                  value={phone}
                  onFocus={() => {
                    setIsBlurredPhone(true)
                  }}
                />
              </div>
            </div>
            <div className="flex h-full items-end md:mt-2.5">
              <Button
                variant="standard"
                text={t('connectForm.form.btn')}
                icon={btnArrow}
                type="submit"
                size="sm"
                className="w-[250px] justify-center px-12 py-3 lg:w-[202px] lg:px-6 md:w-full md:px-12"
              />
            </div>
          </form>
        </div>
        <Image
          src={width >= 1821 ? connectFormPhoto : connectFormPhoto2}
          alt=""
          className="absolute right-0 z-[2] h-full w-auto lg:-right-[30px] lg:-top-[30px] md:z-[1] md:hidden"
          width={500}
          height={600}
        />
      </div>
    </div>
  )
}
