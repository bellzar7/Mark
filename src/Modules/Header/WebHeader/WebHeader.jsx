import React, { useEffect, useState } from 'react'
import styles from './WebHeader.module.css'
import { Link } from 'react-scroll'
import _ from 'lodash'
import { logo } from '../../../Assets/Images'

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
      </div>
    </header>
  )
}

export default WebHeader
