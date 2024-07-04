import React from 'react'
import style from './steps.module.css'
import {
  Steps1,
  Steps2,
  Steps3,
  Steps4,
  Steps5,
  Steps6,
} from '../../Assets/Icons'

const Steps = () => {
  return (
    <div className={`customContainer ${style.steps_block}`}>
      <div>
        <h1 className={style.steps_heading}>Етапи роботи</h1>
      </div>
      <div className={style.steps_cards_block}>
        <div className={style.steps_card}>
          <div className={style.steps_icons_block}>
            <img className={style.steps_card_icon} src={Steps1} alt="Steps1" />
          </div>
          <div>
            <h1 className={style.steps_card_heading}>
              Аналіз потреб і вимог клієнта
            </h1>
            <p className={style.steps_card_text}>
              На цьому початковому етапі команда спілкується з клієнтом для
              збору інформації про бізнес, цільову аудиторію, та очікування. Це
              допомагає розуміти основні пріоритети та формувати чітке завдання
              для подальшої роботи.
            </p>
          </div>
        </div>
        <div className={style.steps_card}>
          <div>
            <img className={style.steps_card_icon} src={Steps2} alt="Steps2" />
          </div>
          <div>
            <h1 className={style.steps_card_heading}>Проектування</h1>
            <p className={style.steps_card_text}>
              Етап включає укладання договору, що визначає умови співпраці.
              Одночасно відбувається передплата та створення концепції сайту,
              яка охоплює загальну структуру та функціональність майбутнього
              сайту.
            </p>
          </div>
        </div>
        <div className={style.steps_card}>
          <div>
            <img
              className={style.steps_card_icon}
              src={Steps3}
              alt="SpeedIcon"
            />
          </div>
          <div>
            <h1 className={style.steps_card_heading}>Створення дизайну</h1>
            <p className={style.steps_card_text}>
              Визначаються розміщення елементів, колірна палітра, шрифти та інші
              важливі деталі. Після цього проводиться розробка концепції
              дизайну, яка включає в себе створення прототипів та детальне
              вирішення всіх аспектів веб-інтерфейсу.
            </p>
          </div>
        </div>
        <div className={style.steps_card}>
          <div>
            <img className={style.steps_card_icon} src={Steps4} alt="Steps4" />
          </div>
          <div>
            <h1 className={style.steps_card_heading}>
              Розробка та налаштування
            </h1>
            <p className={style.steps_card_text}>
              На цьому етапі відбувається технічна реалізація проєкту. Команда
              створює функціональний та надійний сайт, забезпечуючи
              відповідність всім стандартам розробки та оптимальну
              продуктивність і безпеку.
            </p>
          </div>
        </div>
        <div className={style.steps_card}>
          <div>
            <img className={style.steps_card_icon} src={Steps5} alt="Steps5" />
          </div>
          <div>
            <h1 className={style.steps_card_heading}>
              Тестування, оптимізація & правки
            </h1>
            <p className={style.steps_card_text}>
              Етап включає тестування на різних пристроях та в браузерах,
              оптимізацію швидкості завантаження сторінок та SEO-параметрів.
              Крім того, реалізуються будь-які необхідні правки та виправлення.
              На цьому етапі завершується оплата.
            </p>
          </div>
        </div>
        <div className={style.steps_card}>
          <div>
            <img className={style.steps_card_icon} src={Steps6} alt="Steps6" />
          </div>
          <div>
            <h1 className={style.steps_card_heading}>Запуск & Підтримка</h1>
            <p className={style.steps_card_text}>
              Завершальний етап, коли сайт запускається та надається повна
              технічна підтримка. Команда допомагає вирішувати будь-які технічні
              питання, забезпечуючи стабільну та успішну роботу сайту в мережі.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Steps }
