import { Modal, ModalContent } from '@nextui-org/react'
import styles from './PopUp.module.css'
import { useForm } from 'react-hook-form'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { closeBtn, iconMail, iconName } from '../../Assets/Icons'
import { PhoneInput } from 'react-international-phone'
import { CustomButton, Toastify } from '../../Components'
import { memo, useEffect, useRef, useState } from 'react'
import { random } from 'lodash'
import { sendInTg } from '../../Constants/functions'
import { toast, ToastContainer } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { Checkbox } from '@nextui-org/react'

const videos = [
  'https://www.youtube.com/watch?v=_jpzpRoIgw8',
  'https://www.youtube.com/watch?v=2AzCdyjFuT4',
  'https://www.youtube.com/watch?v=hbR9Oht6sk4',
  'https://www.youtube.com/watch?v=oX2soG_3mh4',
  'https://www.youtube.com/watch?v=GevtQPBjBOw',
]

const PopUp = memo(({ modalState }) => {
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

  const isPhoneValid = (phone) => {
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
  const toastId = useRef(null)

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
      setPhone('')
      setIsBlurredPhone(false)
      onClose()
    }
  }, [isSubmitSuccessful])

  const onSubmit = async ({ name, email }) => {
    toastId.current = toast(<Toastify type={'pending'} />, {
      autoClose: 3000,
      hideProgressBar: true,
    })

    let msg = `Заявка на консультацію:\nName - ${name}\nPhone - ${phone}\nEmail - ${email}\n${
      videos[random(0, videos.length - 1)]
    }`
    if (isValid) {
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
    }
  }

  const redBord = {
    boxShadow: 'inset 0px 0px 5px 5px rgba(255,0,0,.2)',
  }
  const greenBord = {
    boxShadow: 'inset 0px 0px 5px 5px rgba(100,255,100,.2)',
  }

  return (
    <>
      <ToastContainer />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={styles.myModal}
        hideCloseButton={true}
        placement={'center'}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.form_top}>
                  <div className={styles.form_top__first}>
                    <h2 className={styles.form_top__first_title}>
                      {t('popUp.form.title')}
                    </h2>
                    <img
                      className={styles.form_top__first_img}
                      onClick={close}
                      src={closeBtn}
                      alt="close"
                    />
                  </div>
                  <p className={styles.form_top__second}>
                    {t('popUp.form.subtitle')}
                  </p>
                </div>

                <div className={styles.form_bottom}>
                  <div className={styles.form_bottom__box}>
                    <label
                      htmlFor="name"
                      className={styles.form_bottom__box_lbl}
                    >
                      {t('popUp.form.inputName.lbl')}
                    </label>
                    <div
                      className={styles.form_bottom__box_wrap}
                      style={
                        errors?.name && touchedFields?.name
                          ? redBord
                          : !errors?.name && touchedFields?.name
                          ? greenBord
                          : null
                      }
                    >
                      <img
                        className={styles.form_bottom__box_wrap__img}
                        src={iconName}
                        alt="people"
                      />
                      <input
                        type="text"
                        id={'name'}
                        placeholder={t('popUp.form.inputName.placeholder')}
                        className={styles.form_bottom__box_wrap__inp}
                        {...register('name', {
                          required: true,
                          minLength: 2,
                          maxLength: 30,
                        })}
                        autoComplete={'off'}
                      />
                    </div>
                  </div>

                  <div className={styles.form_bottom__box}>
                    <label
                      htmlFor="Phone"
                      className={styles.form_bottom__box_lbl}
                    >
                      {t('popUp.form.inputPhone.lbl')}
                    </label>
                    <div
                      className={styles.form_bottom__box_wrap}
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
                        className={styles.form_bottom__box_wrap__telInp}
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

                  <div className={styles.form_bottom__box}>
                    <label
                      htmlFor="Email"
                      className={styles.form_bottom__box_lbl}
                    >
                      {t('popUp.form.inputEmail.lbl.first')}{' '}
                      <span>{t('popUp.form.inputEmail.lbl.second')}</span>
                    </label>
                    <div
                      className={styles.form_bottom__box_wrap}
                      style={
                        errors?.email && touchedFields?.email
                          ? redBord
                          : !errors?.email && touchedFields?.email
                          ? greenBord
                          : null
                      }
                    >
                      <img
                        className={styles.form_bottom__box_wrap__img}
                        src={iconMail}
                        alt="people"
                      />
                      <input
                        type="text"
                        id={'Email'}
                        placeholder={t('popUp.form.inputEmail.placeholder')}
                        className={styles.form_bottom__box_wrap__inp}
                        {...register('email', {
                          required: true,
                          minLength: 2,
                          maxLength: 50,
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          },
                        })}
                      />
                    </div>
                  </div>

                  <div className={styles.form_bottom__box}>
                    <div className={styles.form_bottom__box_checkBoxWrap}>
                      <Checkbox
                        itemID={'check'}
                        id={'check'}
                        {...register('personalData')}
                        defaultSelected
                      >
                        <span
                          className={styles.form_bottom__box_checkBoxWrap__lbl}
                        >
                          {t('popUp.form.inputCheckbox.lbl')}
                        </span>
                      </Checkbox>
                    </div>
                  </div>
                </div>

                <div className={styles.form_btns}>
                  <CustomButton
                    variant={'standard'}
                    size={'sm'}
                    className={styles.form_btns__btn}
                    type={'submit'}
                    text={`${t('popUp.btn_send')}`}
                  />
                  <CustomButton
                    variant={'reject'}
                    size={'sm'}
                    className={styles.form_btns__btn}
                    onClick={onClose}
                    type={'button'}
                    text={`${t('popUp.btn_back')}`}
                  />
                </div>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
})

export { PopUp }
