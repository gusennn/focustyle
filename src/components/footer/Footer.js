import React from 'react';
import hCSS from './footer.module.css'
import logoImg from '../../assets/svg/logo.svg'
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const links = [
    {
        title: 'О магазине',
        href: 'about-store'
    },
    {
        title: 'Дополнительная гарантия',
        href: ''
    },
    {
        title: 'Политика конфиденциальности',
        href: ''
    },
    {
        title: 'Помощь',
        href: ''
    },
    {
        title: 'Доставка и возврат',
        href: ''
    },
    {
        title: 'Оформление заказа',
        href: ''
    },
];

const socialLinks = [
    {
        title: 'инстаграм',
        href: '',
        customClass: 'instagram'
    },
    {
        title: 'вконтакте',
        href: '',
        customClass: 'vk'
    },
    {
        title: 'телеграм',
        href: '',
        customClass: 'telegram'
    },
    {
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
                        <li>
                            <NavLink to={`/${el.href}`} className={hCSS.menu__list__item}>{el.title}</NavLink>
                        </li>
                    ))}
                </ul>
                <ul className={hCSS.menu__list}>
                    {links.slice(3, 7).map((el) => (
                        <li>
                            <NavLink to={`/${el.href}`} className={hCSS.menu__list__item}>{el.title}</NavLink>
                        </li>
                    ))}
                </ul>
                <div>
                    <p className={hCSS.menu__list__title}>Мы в соцсетях</p>
                    <ul className={hCSS.menu__list__social}>
                        {socialLinks.map((el) => (
                            <li>
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