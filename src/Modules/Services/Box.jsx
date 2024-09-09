import React from 'react'
import style from './Services.module.css'
import { serviceDone } from '../../Assets/Images'
import { CustomButton } from '../../Components'
import { useTranslation } from 'react-i18next'

const Box = ({ img, title, subTitle, services, modalState }) => {
  const [t] = useTranslation()

  const { onOpen } = modalState
  return (
    <div className={style.box}>
      <img src={img} alt="img" className={style.box_img} />
      <div className={style.box_texts}>
        <div className={style.box_texts__top}>
          <h3 className={style.box_texts__top_title}>{title}</h3>
          <p className={style.box_texts__top_subTitle}>{subTitle}</p>
        </div>
        <div className={style.box_texts__bottom}>
          <div className={style.box_texts__bottom_box}>
            <img
              src={serviceDone}
              alt="done"
              className={style.box_texts__bottom_box__img}
            />

            <span className={style.box_texts__bottom_box__txt}>
              {services.first.name}
            </span>
          </div>
          <div className={style.box_texts__bottom_box}>
            <img
              src={serviceDone}
              alt="done"
              className={style.box_texts__bottom_box__img}
            />

            <span className={style.box_texts__bottom_box__txt}>
              {services.second.name}
            </span>
          </div>
          <div className={style.box_texts__bottom_box}>
            <img
              src={serviceDone}
              alt="done"
              className={style.box_texts__bottom_box__img}
            />

            <span className={style.box_texts__bottom_box__txt}>
              {services.third.name}
            </span>
          </div>
          <div className={style.box_texts__bottom_box}>
            <img
              src={serviceDone}
              alt="done"
              className={style.box_texts__bottom_box__img}
            />

            <span className={style.box_texts__bottom_box__txt}>
              {services.fourth.name}
            </span>
          </div>
        </div>
        <div className={style.box_texts__btnWrap}>
          <CustomButton
            variant={'standard'}
            size={'md'}
            className={style.box_texts__btnWrap_btn}
            text={t('services.btn')}
            onClick={onOpen}
          />
        </div>
      </div>
    </div>
  )
}

export { Box }
