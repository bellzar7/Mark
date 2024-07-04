import React from 'react'
import style from './advantages.module.css'
import {
  AdaptiveIcon,
  ConversiesIcon,
  FigmaIcon,
  ReactIcon,
  SpeedIcon,
  StatisticsIcon,
} from '../../Assets/Icons'

const Advantages = () => {
  return (
    <div className={`customContainer ${style.advantages_block}`}>
      <div>
        <h1 className={style.advantages_heading}>Наші переваги</h1>
      </div>
      <div className={style.advantages_cards_block}>
        <div className={style.advantages_card}>
          <div>
            <img
              className={style.advantages_card_icon}
              src={FigmaIcon}
              alt="FigmaIcon"
            />
          </div>
          <div>
            <h1 className={style.advantages_card_heading}>Сучасний дизайн</h1>
            <p className={style.advantages_card_text}>
              В нашій команді працюють досвідчені дизайнери, які створять
              оригінальний і сучасний дизайн для вашого вебсайту
            </p>
          </div>
        </div>
        <div className={style.advantages_card}>
          <div>
            <img
              className={style.advantages_card_icon}
              src={AdaptiveIcon}
              alt="AdaptiveIcon"
            />
          </div>
          <div>
            <h1 className={style.advantages_card_heading}>Адаптивність</h1>
            <p className={style.advantages_card_text}>
              Усі сайти, які ми створюємо, будуть чудово виглядати на 4К
              екранах, пристроях Apple, так і на мобільних пристроях.
            </p>
          </div>
        </div>
        <div className={style.advantages_card}>
          <div>
            <img
              className={style.advantages_card_icon}
              src={SpeedIcon}
              alt="SpeedIcon"
            />
          </div>
          <div>
            <h1 className={style.advantages_card_heading}>Швидкість</h1>
            <p className={style.advantages_card_text}>
              Швидкі сайти надають кращий досвід користувачам, збільшують
              ймовірність здійснення необхідних дій та покращують конверсію.
            </p>
          </div>
        </div>
        <div className={style.advantages_card}>
          <div>
            <img
              className={style.advantages_card_icon}
              src={ReactIcon}
              alt="ReactIcon"
            />
          </div>
          <div>
            <h1 className={style.advantages_card_heading}>
              Оптимальні технології
            </h1>
            <p className={style.advantages_card_text}>
              Позитивний досвід використання сучасних технологій напряму
              підвищить лояльність користувачів до компанії та продукту.
            </p>
          </div>
        </div>
        <div className={style.advantages_card}>
          <div>
            <img
              className={style.advantages_card_icon}
              src={ConversiesIcon}
              alt="ConversiesIcon"
            />
          </div>
          <div>
            <h1 className={style.advantages_card_heading}>Конверсія</h1>
            <p className={style.advantages_card_text}>
              Успішна конверсія приведе до збільшення продажів, залучення нових
              клієнтів та підвищення лояльності.
            </p>
          </div>
        </div>
        <div className={style.advantages_card}>
          <div>
            <img
              className={style.advantages_card_icon}
              src={StatisticsIcon}
              alt="StatisticsIcon"
            />
          </div>
          <div>
            <h1 className={style.advantages_card_heading}>Статистика</h1>
            <p className={style.advantages_card_text}>
              Використання аналітичних інструментів дозволяє відслідковувати
              поведінку відвідувачів та аналізувати дані.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Advantages }
