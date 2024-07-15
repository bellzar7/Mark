import React from 'react'
import styles from './Toastify.module.css'
import { Spinner } from '@nextui-org/react'
import { iconDone } from '../../Assets/Icons'
import { useTranslation } from 'react-i18next'

const Toastify = ({ type }) => {
  const [t] = useTranslation()

  if (type === 'pending') {
    return (
      <div className={styles.wrap}>
        <Spinner color="default" />
        <div className={styles.wrap_text}>
          <h3 className={styles.wrap_text__title}>
            {t('toastify.pending.title')}
          </h3>
          <p className={styles.wrap_text__subTitle}>
            {t('toastify.pending.subTitle')}
          </p>
        </div>
      </div>
    )
  }
  if (type === 'success') {
    return (
      <div className={styles.wrap}>
        <img src={iconDone} alt="done" loading={'lazy'} />
        <div className={styles.wrap_text}>
          <h3 className={styles.wrap_text__title}>
            {t('toastify.success.title')}
          </h3>
          <p className={styles.wrap_text__subTitle}>
            {t('toastify.success.subTitle')}
          </p>
        </div>
      </div>
    )
  }
}

export { Toastify }
