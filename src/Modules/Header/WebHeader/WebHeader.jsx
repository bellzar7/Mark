import React, { memo } from 'react'
import styles from './WebHeader.module.css'
import { Link } from 'react-scroll'
import { logo } from '../../../Assets/Images'
import { CustomButton, LangDetector } from '../../../Components'
import { useTranslation } from 'react-i18next'
import { btnArrow } from '../../../Assets/Icons'

const WebHeader = memo(({ modalState }) => {
  const [t] = useTranslation()
  const { onOpen } = modalState

  return (
    <header className={styles.wrap}>
      <div className={`customContainer ${styles.container}`}>
        <img src={logo} alt="logo" className={styles.container_logo} />
        <div className={styles.container_wrap}>
          <nav className={styles.container_wrap__nav}>
            <Link to={'asd'} className={styles.container_wrap__nav_item}>
              {t('header.nav1')}
            </Link>
            <Link to={'asd'} className={styles.container_wrap__nav_item}>
              {t('header.nav2')}
            </Link>
            <Link to={'asd'} className={styles.container_wrap__nav_item}>
              {t('header.nav3')}
            </Link>
            <Link to={'asd'} className={styles.container_wrap__nav_item}>
              {t('header.nav4')}
            </Link>
            <Link to={'asd'} className={styles.container_wrap__nav_item}>
              {t('header.nav5')}
            </Link>
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
            <span className={styles.container_wrap__center_txt}>
              We are Online
            </span>
          </div>
          <div className={styles.container_wrap__right}>
            <LangDetector />

            <CustomButton
              variant={'header'}
              icon={btnArrow}
              size={'md'}
              className={styles.container_wrap__right_btn}
              onClick={onOpen}
            />
          </div>
        </div>
      </div>
    </header>
  )
})

export default WebHeader
