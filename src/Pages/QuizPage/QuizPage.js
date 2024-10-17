import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { useTranslation } from 'react-i18next'
import { PhoneInput } from 'react-international-phone'
import { useForm } from 'react-hook-form'
import { Checkbox, Radio, RadioGroup } from '@nextui-org/react'

import s from './quiz.module.css'
import {
  iconMail,
  iconName,
  quizArrow,
  quizArrowBtn,
  quizq1,
  quizq2,
  quizq3,
  quizq4,
  quizq5,
  quizq6,
} from '../../Assets/Icons'
import { quizGift } from '../../Assets/Images'
import styles from '../../Modules/PopUp/PopUp.module.css'
import { CustomButton } from '../../Components'
import { sendInTg } from '../../Constants/functions'
import animationDone from '../../Assets/Animations/AnumationDone.json'
import { useNavigate } from 'react-router-dom'
import { WEBSITE_ROUTE } from '../../Constants'

const shakeAnimation = {
  rotate: [-15, 0, -15],
  scale: [1.1, 1, 1.1],
  transition: {
    repeat: Infinity,
    duration: 3,
    ease: 'easeInOut',
  },
}
const QuizPage = () => {
  useEffect(() => {
    ;(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js',
    )

    window.fbq('init', '1253461112452761')
    window.fbq('track', 'PageView')
    window.fbq('track', 'Purchase')
    window.fbq('track', 'Lead')

    return () => {
      window.fbq('consent', 'revoke')
    }
  }, [])

  const [questionNumber, setQuestionNumber] = useState(1)

  const [firstQ, setFirstQ] = useState()
  const [secondQ, setSecondQ] = useState()
  const [thirdQ, setThirdQ] = useState()

  const [t] = useTranslation()
  const [phone, setPhone] = useState('')
  const [isBlurredPhone, setIsBlurredPhone] = useState(false)

  const incQuestionNumber = () => {
    setQuestionNumber((prevState) => prevState + 1)
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({ mode: 'all' })

  const isPhoneValid = (phone) => {
    const phoneUtil = PhoneNumberUtil.getInstance()
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
    } catch (error) {
      return false
    }
  }
  const isValid = isPhoneValid(phone)

  const lottieRef = useRef()
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.7) // Встановлюємо швидкість на 0.5
    }
  }, [])

  const onSubmit = async ({ name, email }) => {
    let msg = `Заявка на консультацію:\nName - ${name}\nPhone - ${phone}\nEmail - ${email}\nfirstQ - ${firstQ}\nsecondQ - ${secondQ}\nthirdQ - ${thirdQ}`
    if (isValid) {
      let resp = await sendInTg(msg)
      if (resp.ok) {
        reset()
        setPhone('')
        setIsBlurredPhone(false)
        setFirstQ(null)
        setSecondQ(null)
        setThirdQ(null)
        incQuestionNumber()
      }
      if (!resp.ok) {
        reset()
        setPhone('')
        setIsBlurredPhone(false)
      }
    }
  }

  const redBord = {
    border: '1px solid rgba(255,0,0,1)',
  }
  const greenBord = {
    border: '1px solid rgba(100,255,100,1)',
  }

  const navigate = useNavigate()

  return (
    <div className={`customContainer ${s.wrap}`}>
      <div className={s.wrap_top}>
        <div
          className={s.wrap_top__arrowWrap}
          onClick={() => {
            if (questionNumber > 1 && questionNumber !== 6) {
              setQuestionNumber((prevState) => prevState - 1)
            }
          }}
        >
          <img src={quizArrow} alt={'quizArrow'} />
        </div>
        <div className={s.wrap_top__tabsWrap}>
          <div
            className={`${questionNumber === 1 ? s.tab_active : s.tab} ${
              questionNumber > 1 ? s.tab_finish : ''
            }`}
          ></div>
          <div
            className={`${questionNumber === 2 ? s.tab_active : s.tab} ${
              questionNumber > 2 ? s.tab_finish : ''
            }`}
          ></div>
          <div
            className={`${questionNumber === 3 ? s.tab_active : s.tab} ${
              questionNumber > 3 ? s.tab_finish : ''
            }`}
          ></div>
          <div
            className={`${questionNumber === 4 ? s.tab_active : s.tab} ${
              questionNumber > 4 ? s.tab_finish : ''
            }`}
          ></div>
          <div
            className={`${questionNumber === 5 ? s.tab_active : s.tab} ${
              questionNumber > 5 ? s.tab_finish : ''
            }`}
          ></div>
        </div>
      </div>

      {questionNumber === 1 && (
        <div className={s.wrap_middle}>
          <motion.img
            src={quizGift}
            alt="quizGift"
            animate={shakeAnimation}
            className={s.wrap_middle__img}
          />
        </div>
      )}

      <div className={s.wrap_bottom}>
        {questionNumber === 1 && (
          <div className={s.box}>
            <div>
              <h1 className={s.box_title}>
                Пройди опитування та отримай <span>15% знижки!</span>
              </h1>
              <p className={s.box_subtitle}>
                Пройди коротке опитування та отримай актуальну інформацію про
                послуги та знижку 15% на будь-яку послугу!
              </p>
            </div>
            <button className={s.box_btn} onClick={incQuestionNumber}>
              Розпочати
            </button>
          </div>
        )}

        {questionNumber === 2 && (
          <div className={s.box}>
            <div>
              <h2 className={s.box_questionTitle}>Чи є у вас наявний сайт?</h2>
              <RadioGroup value={firstQ} onValueChange={setFirstQ}>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Так, у нас є сайт"
                >
                  Так, у нас є сайт
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Поки що ми не маємо сайту"
                >
                  Поки що ми не маємо сайту
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Іний варіант..."
                >
                  Іний варіант...
                </Radio>
              </RadioGroup>
            </div>
            <button
              className={s.box_btn}
              onClick={incQuestionNumber}
              disabled={firstQ == null}
            >
              Продовжити <img src={quizArrowBtn} alt="quizArrowBtn" />
            </button>
          </div>
        )}

        {questionNumber === 3 && (
          <div className={s.box}>
            <div>
              <h2 className={s.box_questionTitle}>Який сайт вам потрібен?</h2>
              <RadioGroup value={secondQ} onValueChange={setSecondQ}>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Сайт-візитка"
                >
                  Сайт-візитка
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Лендінг"
                >
                  Лендінг
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Багатосторінковий"
                >
                  Багатосторінковий
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Сайт для блогу"
                >
                  Сайт для блогу
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Сайт з портфоліо"
                >
                  Сайт з портфоліо
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Інтернет-магазин"
                >
                  Інтернет-магазин
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Іний варіант..."
                >
                  Іний варіант...
                </Radio>
              </RadioGroup>
            </div>
            <button
              className={s.box_btn}
              onClick={incQuestionNumber}
              disabled={secondQ == null}
            >
              Продовжити <img src={quizArrowBtn} alt="quizArrowBtn" />
            </button>
          </div>
        )}

        {questionNumber === 4 && (
          <div className={s.box}>
            <div>
              <h2 className={s.box_questionTitle}>
                Вкажіть вашу сферу бізнесу:
              </h2>
              <RadioGroup value={thirdQ} onValueChange={setThirdQ}>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3 flex`}
                  value="Торгівля та ритейл"
                >
                  <img
                    src={quizq1}
                    alt="quizq1"
                    style={{ display: 'inline' }}
                  />{' '}
                  Торгівля та ритейл
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="IT та технології"
                >
                  <img
                    src={quizq2}
                    alt="quizq1"
                    style={{ display: 'inline' }}
                  />{' '}
                  IT та технології
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Надання послуг"
                >
                  <img
                    src={quizq3}
                    alt="quizq1"
                    style={{ display: 'inline' }}
                  />{' '}
                  Надання послуг
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Логістика та транспорт"
                >
                  <img
                    src={quizq4}
                    alt="quizq1"
                    style={{ display: 'inline' }}
                  />{' '}
                  Логістика та транспорт
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Будівництво та нерухомість"
                >
                  <img
                    src={quizq5}
                    alt="quizq1"
                    style={{ display: 'inline' }}
                  />{' '}
                  Будівництво та нерухомість
                </Radio>
                <Radio
                  className={`${s.box_radioBtn} max-w-[100%] text-[#1D2331] text-[14px] p-3`}
                  value="Іний варіант..."
                >
                  <img
                    src={quizq6}
                    alt="quizq1"
                    style={{ display: 'inline' }}
                  />{' '}
                  Іний варіант...
                </Radio>
              </RadioGroup>
            </div>
            <button
              className={s.box_btn}
              onClick={incQuestionNumber}
              disabled={thirdQ == null}
            >
              Продовжити <img src={quizArrowBtn} alt="quizArrowBtn" />
            </button>
          </div>
        )}

        {questionNumber === 5 && (
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form_top}>
              <div className={styles.form_top__first}>
                <h2 className={styles.form_top__first_title}>
                  Вкажіть ваші данні:
                </h2>
              </div>
            </div>

            <div className={styles.form_bottom}>
              <div className={styles.form_bottom__box}>
                <label htmlFor="name" className={styles.form_bottom__box_lbl}>
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
                    loading={'lazy'}
                  />
                  <input
                    type="text"
                    id={'name'}
                    placeholder={t('popUp.form.inputName.placeholder')}
                    className={styles.form_bottom__box_wrap__inp}
                    {...register('name', {
                      required: 'Це поле є обов`язкове для заповнення',
                      minLength: {
                        value: 2,
                        message: 'Ім`я занадто коротке',
                      },
                      maxLength: {
                        value: 30,
                        message: 'Ім`я занадто довге',
                      },
                    })}
                    autoComplete={'off'}
                  />
                </div>
                {errors?.name && touchedFields?.name ? (
                  <span className={styles.form_bottom__box_error}>
                    {errors.name.message}
                  </span>
                ) : (
                  ''
                )}
              </div>

              <div className={styles.form_bottom__box}>
                <label htmlFor="Phone" className={styles.form_bottom__box_lbl}>
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
                {!isValid && isBlurredPhone ? (
                  <span className={styles.form_bottom__box_error}>
                    Введіть коректний номер телефону
                  </span>
                ) : (
                  ''
                )}
              </div>

              <div className={styles.form_bottom__box}>
                <label htmlFor="Email" className={styles.form_bottom__box_lbl}>
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
                    loading={'lazy'}
                  />
                  <input
                    type="text"
                    id={'Email'}
                    placeholder={t('popUp.form.inputEmail.placeholder')}
                    className={styles.form_bottom__box_wrap__inp}
                    {...register('email', {
                      required: false,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Невірний формат email',
                      },
                      minLength: {
                        value: 2,
                        message: 'Email занадто короткий',
                      },
                      maxLength: {
                        value: 30,
                        message: 'Email занадто довгий',
                      },
                    })}
                  />
                </div>
                {errors?.email && touchedFields?.email ? (
                  <span className={styles.form_bottom__box_error}>
                    {errors.email.message}
                  </span>
                ) : (
                  ''
                )}
              </div>

              <div className={styles.form_bottom__box}>
                <div className={styles.form_bottom__box_checkBoxWrap}>
                  <Checkbox
                    itemID={'check'}
                    id={'check'}
                    {...register('personalData')}
                    defaultSelected
                  >
                    <span className={styles.form_bottom__box_checkBoxWrap__lbl}>
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
                text={`Завершити`}
                disabled={!isValid || errors?.name || errors?.email}
              />
            </div>
          </form>
        )}

        {questionNumber === 6 && (
          <div className={s.box}>
            <Lottie
              animationData={animationDone}
              loop={false}
              lottieRef={lottieRef}
            />
            <div>
              <h1 className={s.box_questionTitle}>Опитування пройдено!</h1>
              <p className={s.box_subtitle}>
                Опитування надіслано. Наш менеджер зв'яжеться з вами для надання
                знижки та обговорення всіх деталей!
              </p>
            </div>
            <div>
              <button
                className={s.box_btn}
                onClick={() => navigate(WEBSITE_ROUTE)}
              >
                На головну
              </button>
              <button
                className={s.box_btnDown}
                onClick={() => navigate(WEBSITE_ROUTE)}
              >
                Детальніше про нас
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { QuizPage }
