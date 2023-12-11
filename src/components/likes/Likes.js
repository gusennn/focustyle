import React from "react";
import { Typography } from "@mui/material";
import likesCSS from './liked.module.css'
import hpCss from "../homePage/homePage.module.css";
import { NavLink } from "react-router-dom";

const Likes = (props) => {

  return (
    <div className='componentContainer'>
      {props.cartList.length ?
        <div>
        </div>

        : <div>
          <Typography variant={'h6'} className={'componentContainerTitle'}>Пока что любимые товары не выбраны. Вы можете выбрать для себя что-либо в нашем каталоге :)</Typography>
          <NavLink to='/product' className={hpCss.container__legend__nav}><Typography variant={'h6'} style={{ lineHeight: "18px" }}>Перейти в каталог </Typography></NavLink>
        </div>
      }
    </div>
  )
}

export default Likes;