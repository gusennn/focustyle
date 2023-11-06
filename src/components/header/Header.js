import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import logoImg from "../../assets/svg/logo.svg";

const Header = ({ array }) => {

    { } //js если надо для кнопки

    return (
        <div className='componentContainer'>
            <div className={styles.header}>
                <div className={styles.header__logo}>
                    <NavLink to='/'>
                        <img src={logoImg} alt="логотип" style={{ width: '100%', height: '100%' }} />
                        <span className={styles.header__hidden}>На главную страницу</span>
                    </NavLink>
                </div>
                <ul className={styles.header__nav}>
                    <li>
                        <NavLink to='/' className={`${styles.header__nav__item} ${styles.like}`}>
                            <span className={styles.header__hidden}>Перейти в сохраненные товары</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className={`${styles.header__nav__item} ${styles.basket}`}>
                            <span className={styles.header__hidden}>Перейти в корзину</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className={`${styles.header__nav__item} ${styles.profile}`}>
                            <span className={styles.header__hidden}>Вход в личный кабинет</span>
                        </NavLink>
                    </li>
                    {/*{array.map((el) => (
                        <li>
                            <NavLink to='/' className={el.class}>
                                <span className={styles.header__hidden}>{el.value}</span>
                            </NavLink>
                        </li>
                    ))}*/}
                    <button type="button" className={styles.header__nav__button}>
                        <span className={styles.header__hidden}>Открыть меню</span>
                    </button>
                </ul>
            </div>
        </div >
    )
}

export default Header;