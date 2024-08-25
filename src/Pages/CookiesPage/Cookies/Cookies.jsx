import React from 'react'
import style from '../../PolicyPage/Policy/Policy.module.css'

const Cookies = () => {
  return (
    <div className={style.policy}>
      <div className={'customContainer'}>
        <h2 className={style.policy_title}>Cookie Policy</h2>
        <div className={style.policy_texts}>
          <p className={style.policy_texts__prgrf}>
            Наша політика використання кукі описує, як ми використовуємо
            кукі-файли та подібні технології для покращення вашого досвіду на
            нашому веб-сайті.
          </p>
          <div>
            <h4 className={style.policy_texts__title}>Що таке кукі?</h4>
            <p className={style.policy_texts__prgrf}>
              Кукі — це невеликі текстові файли, які зберігаються на вашому
              пристрої, коли ви відвідуєте веб-сайти. Вони допомагають веб-сайту
              запам'ятовувати інформацію про ваш візит, що може полегшити
              наступний візит і зробити сайт кориснішим для вас.
            </p>
          </div>
          <div>
            <h4 className={style.policy_texts__title}>
              Як ми використовуємо кукі?
            </h4>
            <p className={style.policy_texts__prgrf}>
              Ми використовуємо кукі для різних цілей, зокрема:
              <ul>
                <li>Забезпечення коректної роботи нашого веб-сайту;</li>
                <li>Запам'ятовування ваших уподобань та налаштувань;</li>
                <li>Аналізу трафіку та покращення продуктивності сайту;</li>
                <li>Забезпечення безпеки та запобігання шахрайству.</li>
              </ul>
            </p>
          </div>
          <div>
            <h4 className={style.policy_texts__title}>Контроль над кукі.</h4>
            <p className={style.policy_texts__prgrf}>
              Ви можете контролювати та керувати кукі-файлами через налаштування
              вашого браузера. Ви можете видалити всі кукі, які вже знаходяться
              на вашому пристрої, і налаштувати браузер так, щоб він не зберігав
              нові кукі. Зверніть увагу, що якщо ви вимкнете кукі, деякі функції
              нашого сайту можуть працювати неправильно.
            </p>
          </div>
          <div>
            <h4 className={style.policy_texts__title}>
              Зміни у політиці кукі.
            </h4>
            <p className={style.policy_texts__prgrf}>
              Ми можемо періодично оновлювати цю політику кукі, і будь-які зміни
              будуть розміщені на нашому веб-сайті. Продовжуючи використовувати
              наш сайт після внесення змін, ви погоджуєтесь з новою версією
              політики кукі.
            </p>
          </div>
          <div className={style.policy_label}>
            <div className={style.policy_label__wrap}>
              Якщо у вас є будь-які питання або побажання щодо нашої політики
              кукі, будь ласка, зв'яжіться з нами 👋
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Cookies }
