import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { popUpStore } from './popUpStore'
import styles from './PopUp.module.css'
import { useForm } from 'react-hook-form'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { closeBtn, iconMail, iconName } from '../../Assets/Icons'
import { DevTool } from '@hookform/devtools'
import { PhoneInput } from 'react-international-phone'
import { CustomButton } from '../../Components'
import { useEffect, useState } from 'react'

function PopUp() {
  const show = popUpStore((state) => state.show)
  const handleClose = popUpStore((state) => state.handleClose)

  const {
    register,
    handleSubmit,
    reset,
    getFieldState,
    control,
    formState: { isSubmitSuccessful },
  } = useForm({ mode: 'all' })

  const isPhoneValid = (phone) => {
    const phoneUtil = PhoneNumberUtil.getInstance()
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
    } catch (error) {
      return false
    }
  }
  const [phone, setPhone] = useState('')
  const [isBluredPhone, setIsBluredPhone] = useState(false)

  const isValid = isPhoneValid(phone)

  const name = getFieldState('name')
  const email = getFieldState('email')
  console.log(name)
  console.log(email)

  const onSubmit = ({ name, email, personalData }) => {
    console.log(name, phone, email, personalData)

    // let msg = `Заявка на консультацію:\nІм'я - ${name}\nТелефон - ${phone}`
    //
    // if (name && isValid) {
    //   fetch(baseURL, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       validator: validator,
    //       chat_id: chatId,
    //       message: msg,
    //     }),
    //   })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok')
    //       }
    //       return response.json()
    //     })
    //     .then((data) => {
    //       reset()
    //     })
    //     .catch((error) => {
    //       console.error('Помилка при виконанні запиту:', error)
    //     })
    // }
  }

  let redBord = {
    boxShadow: 'inset 0px 0px 20px 1px rgba(255,0,0,.3)',
  }
  let greenBord = {
    boxShadow: 'inset 0px 0px 20px 10px rgba(100,255,100,.3)',
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName={styles.myModal}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.form_top}>
            <div className={styles.form_top__first}>
              <h2 className={styles.form_top__first_title}>
                Зворотний зв’язок
              </h2>
              <img
                className={styles.form_top__first_img}
                onClick={handleClose}
                src={closeBtn}
                alt="close"
              />
            </div>
            <p className={styles.form_top__second}>
              Залиште контакти і наш менеджер зв'яжеться з вами
            </p>
          </div>

          <div className={styles.form_bottom}>
            <div className={styles.form_bottom__box}>
              <label htmlFor="name" className={styles.form_bottom__box_lbl}>
                Ім’я
              </label>
              <div
                className={styles.form_bottom__box_wrap}
                style={
                  name.error && name.isTouched
                    ? redBord
                    : !name.error && name.isTouched
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
                  placeholder={'Уведіть своє імʼя'}
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
              <label htmlFor="Phone" className={styles.form_bottom__box_lbl}>
                Номер телефону
              </label>
              <div
                className={styles.form_bottom__box_wrap}
                style={
                  !isValid && isBluredPhone
                    ? redBord
                    : isValid
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
                  onBlur={() => {
                    setIsBluredPhone(true)
                  }}
                />
              </div>
            </div>

            <div className={styles.form_bottom__box}>
              <label htmlFor="Email" className={styles.form_bottom__box_lbl}>
                E-mail <span>(необов’язково)</span>
              </label>
              <div
                className={styles.form_bottom__box_wrap}
                style={
                  email.error && email.isTouched
                    ? redBord
                    : !email.error
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
                  type="email"
                  id={'Email'}
                  placeholder={'Уведіть ваш e-mail'}
                  className={styles.form_bottom__box_wrap__inp}
                  {...register('email', {
                    required: true,
                    minLength: 2,
                    maxLength: 50,
                  })}
                />
              </div>
            </div>

            <div className={styles.form_bottom__box}>
              <div className={styles.form_bottom__box_checkBoxWrap}>
                <Form.Check
                  inline
                  className={styles.form_bottom__box_checkBoxWrap__checkbox}
                  type={'checkbox'}
                  id={'check'}
                  {...register('personalData')}
                />
                <label
                  htmlFor={'check'}
                  className={styles.form_bottom__box_checkBoxWrap__lbl}
                >
                  Я даю згоду на обробку моїх персональних данних для зв’язку зі
                  мною
                </label>
              </div>
            </div>
          </div>

          <div className={styles.form_btns}>
            <CustomButton
              variant={'send'}
              size={'sm'}
              className={styles.form_btns__btn}
            />
            <CustomButton
              variant={'back'}
              size={'sm'}
              className={styles.form_btns__btn}
              onClick={handleClose}
            />
          </div>
        </form>
        <DevTool control={control} />
      </Modal>
    </>
  )
}

export { PopUp }
