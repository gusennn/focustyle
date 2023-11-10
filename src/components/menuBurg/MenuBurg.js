import React from "react";
import styles from "./menu.module.css";


const Menu = ({ array }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__blur}></div>
      <div className={styles.menu__content}>
        <button type="button" className={styles.menu__button}>
          <span className={styles.menu__hidden}>На главную страницу</span>
        </button>
        <ul className={styles.menu__list}>
          {array.map((el) => (
            <li>
              <a href={el.href} className={styles.menu__list__item}>{el.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu;