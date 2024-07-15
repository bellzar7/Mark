import React, { useRef, useState } from 'react'
import style from './CTAForm.module.css'
import { CTA_handVave, CTA_icons } from '../../Assets/Images'
import { btnArrow, iconName } from '../../Assets/Icons'
import { PhoneInput } from 'react-international-phone'
import { CustomButton, Toastify } from '../../Components'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { toast } from 'react-toastify'
import { sendInTg } from '../../Constants/functions'

const CtaForm = () => {
  const [t] = useTranslation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({ mode: 'all' })

  const [phone, setPhone] = useState('')
  const [isBlurredPhone, setIsBlurredPhone] = useState(false)

  const isPhoneValid = (phone) => {
    const phoneUtil = PhoneNumberUtil.getInstance()
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
    } catch (error) {
      return false
    }
  }
  const isValid = isPhoneValid(phone)

  const toastId = useRef(null)

  const onSubmit = async ({ name }) => {
    if (isValid) {
      if (toastId.current) {
        toast.dismiss(toastId.current)
      }
      toastId.current = toast(<Toastify type={'pending'} />, {
        autoClose: false,
        hideProgressBar: true,
      })

      let msg = `Заявка на консультацію:\nName - ${name}\nPhone - ${phone}`

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
    <div className={style.wrap}>
      <div className={`customContainer ${style.wrapper}`}>
        <div className={style.wrapper_top}>
          <div className={style.wrapper_top__notiff}>
            <img
              src={CTA_icons}
              alt=""
              className={style.wrapper_top__notiff_icons}
            />
            <img
              src={CTA_handVave}
              alt=""
              className={style.wrapper_top__notiff_hand}
            />
          </div>
          <div className={style.wrapper_top__texts}>
            <h2 className={style.wrapper_top__texts_title}>
              {t('CTAForm.titleFirst')} <br /> {t('CTAForm.titleSecond')}
            </h2>
            <h3 className={style.wrapper_top__texts_subtitle}>
              {t('CTAForm.subtitleFirst')} <br /> {t('CTAForm.subtitleSecond')}
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={style.wrapper_form}>
          <div className={style.wrapper_form__box}>
            <label htmlFor="name" className={style.wrapper_form__box_lbl}>
              {t('CTAForm.form.inputName.lbl')}{' '}
              <span>{t('CTAForm.form.inputName.span')}</span>
            </label>
            <div
              className={style.wrapper_form__box_wrap}
              style={
                errors?.name && touchedFields?.name
                  ? redBord
                  : !errors?.name && touchedFields?.name
                  ? greenBord
                  : null
              }
            >
              <img
                className={style.wrapper_form__box_wrap__img}
                src={iconName}
                alt="people"
                loading={'lazy'}
              />
              <input
                type="text"
                id={'name'}
                placeholder={t('CTAForm.form.inputName.placeholder')}
                className={style.wrapper_form__box_wrap__inp}
                {...register('name', {
                  required: false,
                  minLength: 2,
                  maxLength: 30,
                })}
                autoComplete={'off'}
              />
            </div>
          </div>

          <div className={style.wrapper_form__box}>
            <label htmlFor="Phone" className={style.wrapper_form__box_lbl}>
              {t('CTAForm.form.inputPhone.lbl')}
            </label>
            <div
              className={style.wrapper_form__box_wrap}
              style={
                !isValid && isBlurredPhone
                  ? redBord
                  : isValid && isBlurredPhone
                  ? greenBord
                  : null
              }
            >
              <PhoneInput
                defaultCountry="ua"
                className={style.wrapper_form__box_wrap__telInp}
                onChange={(e) => {
                  setPhone(e)
                }}
                value={phone}
                onBlur={() => {
                  setIsBlurredPhone(true)
                }}
              />
            </div>
          </div>

          <CustomButton
            variant={'standard'}
            text={t('CTAForm.form.btn')}
            icon={btnArrow}
            type={'submit'}
            size={'sm'}
            className={style.wrapper_form__btn}
          />
        </form>
      </div>
    </div>
  )
}

export { CtaForm }
