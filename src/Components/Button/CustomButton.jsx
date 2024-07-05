import React, { memo } from 'react'
import styles from './CustomButton.module.css'
import { useTranslation } from 'react-i18next'

const CustomButton = memo(
  ({ variant, icon, size, className, onClick, type, text }) => {
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
        {text}
        {icon && <img src={icon} alt={icon} />}
      </button>
    )
  },
)

export { CustomButton }
