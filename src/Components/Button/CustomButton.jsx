import React from 'react'
import styles from './CustomButton.module.css'
import { useTranslation } from 'react-i18next'

const CustomButton = ({ variant, icon, size, className, onClick, type }) => {
  const [t] = useTranslation()

  return (
    <button
      type={type}
      className={`${className}
        ${
          variant === 'standard'
            ? `${styles.standard}`
            : variant === 'reject'
            ? `${styles.reject}`
            : variant === 'header'
            ? `${styles.header}`
            : variant === 'send'
            ? `${styles.standard}`
            : variant === 'back'
            ? `${styles.reject}`
            : ''
        }`}
      style={
        size === 'sm'
          ? { height: '44px' }
          : size === 'md'
          ? { height: '48px' }
          : size === 'lg'
          ? { height: '52px' }
          : null
      }
      onClick={onClick}
    >
      {variant === 'standard'
        ? `${t('header.btn_standard')}`
        : variant === 'header'
        ? `${t('header.btn_standard')}`
        : variant === 'reject'
        ? `${t('header.btn_reject')}`
        : variant === 'send'
        ? `${t('popUp.btn_send')}`
        : variant === 'back'
        ? `${t('popUp.btn_back')}`
        : ''}
      {icon && <img src={icon} alt={icon} />}
    </button>
  )
}

export { CustomButton }
