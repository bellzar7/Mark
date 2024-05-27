import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import styles from './MobHeader.module.css'
import { Link } from 'react-scroll'

const MobHeader = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <header className={styles.wrap}>
      <div className={`customContainer ${styles.wrap_container}`}>
        <img src="" alt="logo" className={styles.wrap_container_logo} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          onClick={handleShow}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.66663 8.29159C2.66663 7.55521 3.26358 6.95825 3.99996 6.95825H28C28.7363 6.95825 29.3333 7.55521 29.3333 8.29159C29.3333 9.02797 28.7363 9.62492 28 9.62492H3.99996C3.26358 9.62492 2.66663 9.02797 2.66663 8.29159ZM2.66663 16.0002C2.66663 15.2639 3.26358 14.6669 3.99996 14.6669H28C28.7363 14.6669 29.3333 15.2639 29.3333 16.0002C29.3333 16.7366 28.7363 17.3336 28 17.3336H3.99996C3.26358 17.3336 2.66663 16.7366 2.66663 16.0002ZM2.66663 23.7089C2.66663 22.9725 3.26358 22.3756 3.99996 22.3756H28C28.7363 22.3756 29.3333 22.9725 29.3333 23.7089C29.3333 24.4453 28.7363 25.0422 28 25.0422H3.99996C3.26358 25.0422 2.66663 24.4453 2.66663 23.7089Z"
            fill="#233140"
          />
        </svg>
        <Modal
          show={show}
          onHide={handleClose}
          style={{
            top: '60px',
            width: '90%',
            transform: 'translateX(5%)',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            onClick={handleClose}
            className={styles.wrap_container_closeBtn}
          >
            <path
              d="M7.68826 7.68826C8.60594 6.77058 10.0938 6.77058 11.0115 7.68826L16 12.6768L20.9885 7.68826C21.9062 6.77058 23.3941 6.77058 24.3117 7.68826C25.2294 8.60594 25.2294 10.0938 24.3117 11.0115L19.3232 16L24.3117 20.9885C25.2294 21.9062 25.2294 23.3941 24.3117 24.3117C23.3941 25.2294 21.9062 25.2294 20.9885 24.3117L16 19.3232L11.0115 24.3117C10.0938 25.2294 8.60594 25.2294 7.68826 24.3117C6.77058 23.3941 6.77058 21.9062 7.68826 20.9885L12.6768 16L7.68826 11.0115C6.77058 10.0938 6.77058 8.60594 7.68826 7.68826Z"
              fill="#FCC70C"
            />
          </svg>

          <ul className={styles.wrap_container_modalWrap}>
            <li className={styles.wrap_container_modalWrap__link}>
              <Link to={'offers'} offset={-30} onClick={handleClose}>
                header.link1
              </Link>
            </li>
            <li className={styles.wrap_container_modalWrap__link}>
              <Link to={'about'} offset={-30} onClick={handleClose}>
                header.link2
              </Link>
            </li>
            <li className={styles.wrap_container_modalWrap__link}>
              <Link to={'steps'} onClick={handleClose}>
                header.link3
              </Link>
            </li>
            <li className={styles.wrap_container_modalWrap__link}>
              <Link to={'contact'} onClick={handleClose}>
                header.link4
              </Link>
            </li>
          </ul>
        </Modal>
      </div>
    </header>
  )
}

export default MobHeader
