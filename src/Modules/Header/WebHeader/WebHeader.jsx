import React, { memo, useMemo, useCallback } from 'react'
import styles from './WebHeader.module.css'
import { Link } from 'react-scroll'
import { logo } from '../../../Assets/Images'
import { CustomButton, LangDetector } from '../../../Components'
import { useTranslation } from 'react-i18next'
import { btnArrow } from '../../../Assets/Icons'
import classNames from 'classnames'

const NAV_ITEMS = [
  { to: 'services', labelKey: 'header.nav1' },
  { to: 'cases', labelKey: 'header.nav2' },
  { to: 'studio', labelKey: 'header.nav3' },
  { to: 'asd4', labelKey: 'header.nav4' },
  { to: 'footer', labelKey: 'header.nav5' },
]

const WebHeader = memo(({ modalState }) => {
  const { t } = useTranslation()
  const { onOpen } = modalState

  const navLinks = useMemo(
    () =>
      NAV_ITEMS.map((item) => (
        <Link
          key={item.labelKey}
          to={item.to}
          className={styles.container_wrap__nav_item}
        >
          {t(item.labelKey)}
        </Link>
      )),
    [t],
  )

  const handleButtonClick = useCallback(() => {
    onOpen()
  }, [onOpen])

  return (
    <header className={styles.wrap}>
      <div className={classNames('customContainer', styles.container)}>
        <img src={logo} alt="logo" className={styles.container_logo} />
        <div className={styles.container_wrap}>
          <nav className={styles.container_wrap__nav}>{navLinks}</nav>
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
              variant="header"
              icon={btnArrow}
              size="md"
              className={styles.container_wrap__right_btn}
              onClick={handleButtonClick}
              text={t('header.btn_standard')}
            />
          </div>
        </div>
      </div>
    </header>
  )
})

export default WebHeader
