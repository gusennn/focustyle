import React from "react";
import hpCss from './homePage.module.css'


const HomePage =()=> {
  return (
    <div class="wrap">
    <div class="header">
      <nav class="header_nav">
        <a href="!#"><img src="../../assets/svg/logo.svg" alt="" class="logo"></img></a>
        <ul class="header_list">
          <li class="header_item"><a href="!#"><img src="../../assets/svg/" alt=""></img></a></li>
          <li class="header_item"><a href="!#"><img src="../../assets/svg/" alt=""></img></a></li>
          <li class="header_item"><a href="!#"><img src="../../assets/svg/" alt=""></img></a></li>
          <li class="header_item"><a href="!#"><img src="../../assets/svg/" alt="menu"></img></a></li>
        </ul>
      </nav>
    </div>
    <main class="main">
      <div class="page_content">
        <h1 class="main_title">Очки для всей семьи<br></br>
          <span class="main_title_span">С заботой о ваших глазах</span></h1>
        <p>
          Наши очки, представленные на сайте, идеально подходят не только для прогулок в солнечную погоду, но и для того чтобы рыбалка была удачной, а поедка на автомобиле безопасной. А также они защитят от излишнего излучения при работе за компьютером.
        </p><br></br>
        <p>
          Функция онлайн-примерки позволит подобрать подходящий именно для вас по форме и размеру очки.
        </p>
      </div>
      <button class="main_btn"><span>Перейти в каталог</span></button>
    </main>

    <section class="about">
      <div class="about_content">
        <h2 class="about_title">О нашем магазине</h2>
        <p class="about_text">
          ФокуСтиль - это онлайн-магазин нового поколения! Наш интернет-магазин предлагает уникальную возможность: онлайн-примерку очков. Теперь вы можете подобрать наиболее подходящую модель, не выходя из дома благодаря функции онлайн-примерки. Нужно лишь найти специальный значок очков      , указывающий на то, что есть возможность примерить онлайн данную модель.
        </p>
        <span class="about_span">Узнать больше</span><a href="#!"><img src="./img/arrow_1.svg" alt="arrow"></img></a>
      </div>
      <img src="./img/img_online_glasess 1.jpg" alt=""></img>
    </section>
  </div>
  )
}

export default HomePage