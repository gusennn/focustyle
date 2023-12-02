import React from "react";
import hpCss from './homePage.module.css'
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import glassIcon from '../../assets/svg/glasses.svg';
import glassFitting from '../../assets/image/img_online_glasess.png';

const HomePage = () => {
    return (
        <div className={`componentContainer ${hpCss.HomePageGradient}`}>
            <div className={hpCss.container__legend}>
                <div className={hpCss.container__legend__text}>
                    <Typography variant={'h3'} className={hpCss.container__title}><strong>очки для всей семьи</strong><br /> с заботой о ваших глазах </Typography>
                    <Typography variant={'h6'} className={hpCss.container__text}>Наши очки, предстваленные на сайте, идеально подходят не только для прогулок в солнечную погоду, но и для того, чтобы рыбалка была удачной, а поездка на автомобиле безопасной, а также они защитят от излишнего излучения при работе за компьютером.</Typography>
                    <Typography variant={'h6'} className={hpCss.container__text}>Функция онлайн-примерки позволит подобрать подходящие именно для вас по форме и размеру очки.</Typography>
                    <NavLink to='/product' className={hpCss.container__legend__nav}><Typography variant={'h6'} style={{ lineHeight: "18px" }}>Перейти в каталог </Typography></NavLink>
                </div>
            </div>
            <div className={hpCss.container__about}>
                <div className={hpCss.container__about__text}>
                    <Typography variant={'h4'} className={hpCss.container__title}><strong>О нашем магазине</strong></Typography>
                    <Typography variant={'h6'} className={hpCss.container__text}>ФокуСтиль - это онлайн-магазин нового поколения! Наш интернет-магазин предлагает уникальную возможность: онлайн-примерку очков. Теперь вы можете подобрать наиболее подходящую модель, не выходя из дома благодаря функции онлайн-примерки. Нужно лишь найти специальный значок очков <img src={glassIcon} alt="Значок очков" />, указывающий на то, что есть возможность примерить онлайн данную модель.</Typography>
                    <NavLink to='/about-store' className={hpCss.container__about__nav}><Typography variant={'h6'} className={hpCss.container__about__nav__text}><strong>Узнать больше</strong></Typography></NavLink>
                </div>
                <div className={hpCss.container__about__img}>
                    <NavLink to='/'><img src={glassFitting} alt="Примерка" style={{ width: "100%", height: "100%" }} /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default HomePage;