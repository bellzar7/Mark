import React from 'react'
import Marquee from 'react-fast-marquee'
import { Logo } from './Logo'
import {
  concreteH,
  concreteN,
  delfH,
  delfN,
  eliteH,
  eliteN,
  nembusH,
  nembusN,
  ninaH,
  ninaN,
  optykaH,
  optykaN,
  smileH,
  smileN,
  tredH,
  tredN,
  udH,
  udN,
} from '../../Assets/Images'
import style from './Logos.module.css'

const Logos = () => {
  return (
    <div className={`customContainer ${style.wrap}`}>
      <Marquee
        pauseOnHover={true}
        className={style.marquee}
        gradient={true}
        gradientWidth={'150px'}
        gradientColor={'rgba(5, 5, 5, 0.85) 0%'}
      >
        <Logo logoN={tredN} logoH={tredH} />
        <Logo logoN={concreteN} logoH={concreteH} />
        <Logo logoN={ninaN} logoH={ninaH} />
        <Logo logoN={smileN} logoH={smileH} />
        <Logo logoN={optykaN} logoH={optykaH} />
        <Logo logoN={udN} logoH={udH} />
        <Logo logoN={eliteN} logoH={eliteH} />
        <Logo logoN={delfN} logoH={delfH} />
        <Logo logoN={nembusN} logoH={nembusH} />
      </Marquee>
    </div>
  )
}

export { Logos }
