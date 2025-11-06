'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { CTA_handVave, CTA_icons, CTA_BG } from '@/Assets/Images'
import { btnArrow, iconName } from '@/Assets/Icons'
import { PhoneInput } from 'react-international-phone'
import { Button } from '@/components/ui/Button'
import { Toastify } from '@/components/Toastify'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { toast } from 'react-toastify'
import { getUTMParams, sendInTg } from '@/lib/functions'
import 'react-international-phone/style.css'

interface FormData {
  name: string
}

export const CtaForm = () => {
  const { t } = useTranslation()

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
    <div
      className="w-full bg-cover bg-center pb-20 pt-[78px] lg:pb-[120px] lg:pt-2.5 md:pb-20 md:pt-0"
      style={{ backgroundImage: `url(${CTA_BG})` }}
    >
      <div className="customContainer flex flex-col items-center gap-12 pb-20 pt-[60px] lg:pb-[120px] lg:pt-[90px] md:gap-8 md:pb-20 md:pt-20">
        <div className="flex flex-col items-center gap-5 md:gap-6">
          <div className="flex items-center gap-2 rounded-[30px] bg-[#19191C] px-2 py-[7px] shadow-[0_0_15px_-4px_rgba(25,25,28,0.4)]">
            <Image
              src={CTA_icons}
              alt=""
              width={87}
              height={30}
              className="h-[30px] w-[86.5px]"
            />
            <Image
              src={CTA_handVave}
              alt=""
              width={20}
              height={20}
              className="h-5"
            />
          </div>
          <div className="flex flex-col items-center gap-3 md:gap-2">
            <h2 className="mb-0 text-center font-gilroy text-[60px] font-semibold leading-[120%] text-[#F2F2F2] lg:text-5xl md:text-2xl">
              {t('CTAForm.titleFirst')} <br /> {t('CTAForm.titleSecond')}
            </h2>
            <h3 className="mb-0 text-center font-gilroy text-xl font-normal leading-normal tracking-[0.4px] text-[#AAADB9] lg:text-base lg:tracking-[0.32px] md:text-[15px] md:tracking-[0.3px]">
              {t('CTAForm.subtitleFirst')} <br /> {t('CTAForm.subtitleSecond')}
            </h3>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-end justify-center gap-4 lg:gap-3 md:w-full md:flex-col md:items-center md:gap-5"
        >
          <div className="w-[358.5px] lg:w-[263.5px] md:w-full">
            <label
              htmlFor="name"
              className="mb-1.5 font-gilroy text-base font-normal leading-[120%] text-[#F2F2F2]"
            >
              {t('CTAForm.form.inputName.lbl')}{' '}
              <span className="font-gilroy text-sm font-normal leading-[120%] text-[#515C6D]">
                {t('CTAForm.form.inputName.span')}
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
              {iconName && typeof iconName !== 'string' && (
                <Image
                  className="h-5 w-5"
                  src={iconName}
                  alt="people"
                  width={20}
                  height={20}
                />
              )}
              <input
                type="text"
                id="name"
                placeholder={t('CTAForm.form.inputName.placeholder')}
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

          <div className="w-[358.5px] lg:w-[263.5px] md:w-full">
            <label
              htmlFor="Phone"
              className="mb-1.5 font-gilroy text-base font-normal leading-[120%] text-[#F2F2F2]"
            >
              {t('CTAForm.form.inputPhone.lbl')}
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

          <Button
            variant="standard"
            text={t('CTAForm.form.btn')}
            icon={btnArrow}
            type="submit"
            size="sm"
            className="w-[201px] justify-center px-12 py-3 lg:w-[169px] lg:px-8 md:w-full md:px-12"
          />
        </form>
      </div>
    </div>
  )
}
