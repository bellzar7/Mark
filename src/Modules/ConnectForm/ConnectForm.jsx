import React, { useRef, useState } from 'react'
import style from './ConnectForm.module.css'
import { connectFormPhoto, connectFormPhoto2 } from '../../Assets/Images'
import { btnArrow, iconName } from '../../Assets/Icons'
import { PhoneInput } from 'react-international-phone'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { toast } from 'react-toastify'
import { CustomButton, Toastify } from '../../Components'
import { sendInTg } from '../../Constants/functions'

const ConnectForm = () => {
  const [t] = useTranslation()

  const [windowWidth] = useState(window.innerWidth)

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
    <div className={`customContainer ${style.wrap}`}>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.box_texts}>
            <h2 className={style.box_texts__title}>{t('connectForm.title')}</h2>
            <h3 className={style.box_texts__subtitle}>
              {t('connectForm.subtitle')}{' '}
              <span>{t('connectForm.subtitleSpan')}</span>{' '}
              {t('connectForm.subtitleNext')}
            </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={style.box_form}>
            <div className={style.box_form__box}>
              <label htmlFor="name" className={style.box_form__box_lbl}>
                {t('connectForm.form.inputName.lbl')}{' '}
                <span>{t('connectForm.form.inputName.span')}</span>
              </label>
              <div
                className={style.box_form__box_wrap}
                style={
                  errors?.name && touchedFields?.name
                    ? redBord
                    : !errors?.name && touchedFields?.name
                    ? greenBord
                    : null
                }
              >
                <img
                  className={style.box_form__box_wrap__img}
                  src={iconName}
                  alt="people"
                  loading={'lazy'}
                />
                <input
                  type="text"
                  id={'name'}
                  placeholder={t('connectForm.form.inputName.placeholder')}
                  className={style.box_form__box_wrap__inp}
                  {...register('name', {
                    required: false,
                    minLength: 2,
                    maxLength: 30,
                  })}
                  autoComplete={'off'}
                />
              </div>
            </div>

            <div className={style.box_form__box}>
              <label htmlFor="Phone" className={style.box_form__box_lbl}>
                {t('connectForm.form.inputPhone.lbl')}
              </label>
              <div
                className={style.box_form__box_wrap}
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
                  className={style.box_form__box_wrap__telInp}
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
            <div className={style.box_form__btnBox}>
              <CustomButton
                variant={'standard'}
                text={t('connectForm.form.btn')}
                icon={btnArrow}
                type={'submit'}
                size={'sm'}
                className={style.box_form__btnBox_btn}
              />
            </div>
          </form>
        </div>
        <img
          src={windowWidth >= 1821 ? connectFormPhoto : connectFormPhoto2}
          alt=""
          className={style.container_img}
        />
      </div>
    </div>
  )
}

export { ConnectForm }
