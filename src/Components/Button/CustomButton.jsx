import React from 'react'
import styles from './CustomButton.module.css'
import { useTranslation } from 'react-i18next'

const CustomButton = ({ variant, icon, size, className }) => {
  const [t] = useTranslation()

  return (
    <button
      className={`${className}
        ${
          variant === 'standard'
            ? `${styles.standard}`
            : variant === 'reject'
            ? `${styles.reject}`
            : variant === 'header'
            ? `${styles.header}`
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
    >
      {variant === 'standard' || 'header'
        ? `${t('header.btn_standard')}`
        : variant === 'reject'
        ? `${t('header.btn_reject')}`
        : ''}
      {icon && <img src={icon} alt={icon} />}
    </button>
  )
}

export { CustomButton }
