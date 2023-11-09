import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import logoImg from "../../assets/svg/logo.svg";

const Header = ({ array }) => {

    let mobNavOpen = () => {
        let openMenu = document.querySelector('#showMenu');
        openMenu.style.cssText = 'top: 0px;'
    }

    let mobNavClose = () => {
        let openMenu = document.querySelector('#showMenu');
        openMenu.style.cssText = 'top: -10000px;'
    }

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
                    <button type="button" className={styles.header__nav__button} onClick={mobNavOpen}>
                        <span className={styles.header__hidden}>Открыть меню</span>
                    </button>
                </ul>
            </div>
            <div id={'showMenu'} className={styles.menu}>
                <div className={styles.menu__content}>
                    <button type="button" className={styles.menu__button} onClick={mobNavClose}>
                        <span className={styles.header__hidden}>Закрыть меню</span>
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
        </div >
    )
}

export default Header;