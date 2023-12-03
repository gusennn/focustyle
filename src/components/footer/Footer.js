import React from 'react';
import hCSS from './footer.module.css'
import logoImg from '../../assets/svg/logo.svg'
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const links = [
    {
        id: 0,
        title: 'О магазине',
        href: 'about-store'
    },
    {
        id: 1,
        title: 'Дополнительная гарантия',
        href: ''
    },
    {
        id: 2,
        title: 'Политика конфиденциальности',
        href: ''
    },
    {
        id: 3,
        title: 'Помощь',
        href: ''
    },
    {
        id: 4,
        title: 'Доставка и возврат',
        href: ''
    },
    {
        id: 5,
        title: 'Оформление заказа',
        href: ''
    },
];

const socialLinks = [
    {
        id: 0,
        title: 'инстаграм',
        href: '',
        customClass: 'instagram'
    },
    {
        id: 1,
        title: 'вконтакте',
        href: '',
        customClass: 'vk'
    },
    {
        id: 2,
        title: 'телеграм',
        href: '',
        customClass: 'telegram'
    },
    {
        id: 3,
        title: 'ютуб',
        href: '',
        customClass: 'youtube'
    }
]


function Footer(props) {
    return (
        <div className='componentContainer'>
            <div className={hCSS.footer}>
                <div className={hCSS.footer__logo}>
                    <NavLink to='/'>
                        <img src={logoImg} alt="логотип" style={{ width: '100%', height: '100%' }} />
                        <span className={hCSS.footer__hidden}>На главную страницу</span>
                    </NavLink>
                </div>
                <ul className={hCSS.menu__list}>
                    {links.slice(0, 3).map((el) => (
                        <li key={el.id}>
                            <NavLink to={`/${el.href}`} className={hCSS.menu__list__item}>{el.title}</NavLink>
                        </li>
                    ))}
                </ul>
                <ul className={hCSS.menu__list}>
                    {links.slice(3, 7).map((el) => (
                        <li key={el.id}>
                            <NavLink to={`/${el.href}`} className={hCSS.menu__list__item}>{el.title}</NavLink>
                        </li>
                    ))}
                </ul>
                <div className={hCSS.footer__links}>
                    <p className={hCSS.menu__list__title}>Мы в соцсетях</p>
                    <ul className={hCSS.menu__list__social}>
                        {socialLinks.map((el) => (
                            <li key={el.id}>
                                <NavLink to={`/${el.href}`} className={`${hCSS.menu__list__social__item} ${hCSS[el.customClass]}`}><span className={hCSS.footer__hidden}>{el.title}</span></NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Footer;