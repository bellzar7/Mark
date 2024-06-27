import React from 'react'
import style from './Studio.module.css'
import { studioIcon } from '../../Assets/Images'
import { CustomButton } from '../../Components'
import { btnMsg } from '../../Assets/Icons'
import { useDisclosure } from '@nextui-org/react'
import { PopUp } from '../PopUp'
import { useTranslation } from 'react-i18next'

const Studio = () => {
  const modalState = useDisclosure()

  const [t] = useTranslation()

  return (
    <div className={style.wrap}>
      <div className={`customContainer ${style.box}`}>
        <img src={studioIcon} alt="" className={style.box_img} />
        <div className={style.box_texts}>
          <h1 className={style.box_texts__title}>{t('studio.title')}</h1>
          <p className={style.box_texts__subtitle}>{t('studio.subTitle')}</p>
        </div>
        <CustomButton
          icon={btnMsg}
          variant={'studio'}
          size={'sm'}
          className={style.box_btn}
          onClick={modalState.onOpen}
        />
      </div>
      <PopUp modalState={modalState} />
    </div>
  )
}

export { Studio }
