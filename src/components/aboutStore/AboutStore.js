import React from 'react';
import aboutCSS from './about.module.css';
import { Typography } from "@mui/material";
import glassIcon from '../../assets/svg/glasses.svg';

const AboutStore = () => {
  return (
    <div className='componentContainer'>
      <div className={aboutCSS.container}>
        <Typography variant={'h4'} className={aboutCSS.container__title}><strong>О нашем магазине</strong></Typography>
        <Typography variant={'h6'} className={aboutCSS.container__text}>ФокуСтиль - это онлайн-магазин нового поколения! Наш интернет-магазин предлагает уникальную возможность: онлайн-примерку очков. Теперь вы можете подобрать наиболее подходящую модель, не выходя из дома благодаря функции онлайн-примерки. Нужно лишь найти специальный значок очков <img src={glassIcon} alt="Примерка" />, указывающий на то, что есть возможность примерить онлайн данную модель. </Typography>
        <Typography variant={'h6'} className={aboutCSS.container__text}>Основная ценность нашего магазина - это предоставление широкого ассортимента очков различных видов, которые не только обеспечивают защиту глаз, но и улучшают качество зрения в различных условиях. У нас вы найдете стильные и функциональные солнцезащитные очки, удобные и практичные очки для рыбалки, безопасные очки для вождения и комфортные очки для работы за компьютером. </Typography>
        <Typography variant={'h6'} className={aboutCSS.container__text}>Просто выберите понравившиеся очки, добавьте их в корзину и оформите заказ. Мы гарантируем быструю и надежную доставку, а также качественный сервис. Не откладывайте свое здоровье на потом - приобретайте очки на нашем сайте уже сегодня и наслаждайтесь комфортом и безопасностью! </Typography>
      </div>
    </div>
  )
}


export default AboutStore;