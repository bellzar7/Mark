import Modal from 'react-bootstrap/Modal'
import { popUpStore } from './popUpStore'
import styles from './PopUp.module.css'
import { useForm } from 'react-hook-form'
// import { PhoneNumberUtil } from 'google-libphonenumber'
import { closeBtn, iconName } from '../../Assets/Icons'

function PopUp() {
  const show = popUpStore((state) => state.show)
  const handleClose = popUpStore((state) => state.handleClose)

  const {
    register,
    handleSubmit,
    reset,
    getFieldState,
    formState: { errors, isSubmitting, touchedFields, submitCount },
  } = useForm({ mode: 'all' })
  const fieldState = getFieldState('name')

  // const phoneUtil = PhoneNumberUtil.getInstance()
  // const isPhoneValid = () => {
  //   try {
  //     return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
  //   } catch (error) {
  //     return false
  //   }
  // }
  // const isValid = isPhoneValid(phone)

  const onSubmit = ({ name }) => {
    console.log(fieldState)
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
    border: '2px solid red',
    boxShadow: 'inset 0px 0px 20px 1px rgba(255,0,0,.3)',
  }
  let greenBord = {
    border: '2px solid green',
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <h2>Зворотний зв’язок</h2>
              <img src={closeBtn} alt="close" />
            </div>
            <p>Залиште контакти і наш менеджер зв'яжеться з вами</p>
          </div>

          <div>
            <div>
              <label htmlFor="name">Ім’я</label>
              <div>
                <img src={iconName} alt="people" />
                <input
                  type="text"
                  id={'name'}
                  placeholder={'Ім’я'}
                  style={
                    errors.name ? redBord : !errors.name ? greenBord : null
                  }
                  autoComplete={'off'}
                  {...register('name', {
                    required: true,
                    minLength: 2,
                    maxLength: 30,
                  })}
                />
                <button type={'submit'}>asd</button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

export { PopUp }
