import React, { useState } from 'react'
import style from './Logos.module.css'

const Logo = ({ logoN, logoH }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <img
      src={isHovered ? logoH : logoN}
      alt="logo"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={style.logo}
    />
  )
}

export { Logo }
