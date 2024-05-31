import React, { useEffect, useState } from 'react'
import styles from './WebHeader.module.css'
import { Link } from 'react-scroll'
import _ from 'lodash'
import { logo } from '../../../Assets/Images'
import { LangDecetor } from '../LangDecetor/LangDecetor'

const WebHeader = () => {
  const [show, setShow] = useState(null)

  const controlNavBar = _.throttle(() => {
    const currentScrollY = window.scrollY
    if (lastScrollY < currentScrollY) {
      setShow('true')
    } else {
      setShow('false')
    }
    lastScrollY = currentScrollY
  }, 200)

  let lastScrollY = window.scrollY

  useEffect(() => {
    const handleScroll = () => {
      controlNavBar()
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <header
      className={`${styles.wrap} ${
        show === 'false'
          ? styles.wrapShow
          : show === 'true'
          ? styles.wrapHidden
          : null
      }`}
    >
      <div className={`customContainer ${styles.container}`}>
        <img src={logo} alt="logo" className={styles.container_logo} />
        <div className={styles.container_wrap}>
          <nav className={styles.container_wrap__nav}>
            <Link to={'asd'}>Послуги</Link>
            <Link to={'asd'}>Кейси</Link>
            <Link to={'asd'}>Про нас</Link>
            <Link to={'asd'}>Вакансії</Link>
            <Link to={'asd'}>Контакти</Link>
          </nav>
          <div className={styles.container_wrap__center}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className={styles.container_wrap__center_anim}
            >
              <circle opacity="0.1" cx="9" cy="9" r="9" fill="#30DB5B" />
              <circle opacity="0.2" cx="9" cy="9" r="6" fill="#30DB5B" />
              <circle cx="9" cy="9" r="3" fill="#30DB5B" />
            </svg>
            We are Online
          </div>
          <div className={styles.container_wrap__right}>
            <div>
              <LangDecetor />
            </div>
            <button>Зв’язатись</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default WebHeader
