import React from 'react';
import hCSS from './header.module.css'
import logoImg from '../../assets/svg/logo.svg'
import { useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = [
    {
        title: 'Каталог',
        href: 'product'
    },
    {
        title: 'Цены или что то такое',
        href: 'pricing'
    },
    {
        title: 'Разработчики проекта',
        href: 'blog'
    }
];

const Header = (props) => {

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
            <div className={hCSS.header}>
                <div className={hCSS.header__logo}>
                    <NavLink to='/'>
                        <img src={logoImg} alt="логотип" style={{ width: '100%', height: '100%' }} />
                        <span className={hCSS.header__hidden}>На главную страницу</span>
                    </NavLink>
                </div>
                <ul className={hCSS.header__nav}>
                    <li>
                        <NavLink to='/' className={`${hCSS.header__nav__item} ${hCSS.like}`}>
                            <span className={hCSS.header__hidden}>Перейти в сохраненные товары</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart' className={`${hCSS.header__nav__item} ${hCSS.basket}`}>
                            <span className={hCSS.header__hidden}>Перейти в корзину</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className={`${hCSS.header__nav__item} ${hCSS.profile}`}>
                            <span className={hCSS.header__hidden}>Вход в личный кабинет</span>
                        </NavLink>
                    </li>
                    <button type="button" className={hCSS.header__nav__button} onClick={mobNavOpen}>
                        <span className={hCSS.header__hidden}>Открыть меню</span>
                    </button>
                </ul>
            </div>
            <div id={'showMenu'} className={hCSS.menu}>
                <div className={hCSS.menu__content}>
                    <button type="button" className={hCSS.menu__button} onClick={mobNavClose}>
                        <span className={hCSS.header__hidden}>Закрыть меню</span>
                    </button>
                    <ul className={hCSS.menu__list}>
                        {pages.map((el) => (
                            <li>

                                <NavLink to={`/${el.href}`} className={hCSS.menu__list__item}>{el.title}</NavLink>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;

