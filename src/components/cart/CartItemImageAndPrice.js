import React from 'react';
import cartCSS from './cart.module.css'
import {Typography} from "@mui/material";


function CartItemImageAndPrice(props) {
    return (
        <div className={cartCSS.cartImageAndPrice}>
            <div className={cartCSS.cartImage}>
                <img src={props.cartImg} alt={props.cartImgAlt}/>
            </div>
            <div className={cartCSS.cartTitle}>
                <Typography variant={'h6'}>{props.cartImgAlt}</Typography>
            </div>
            <div className={cartCSS.cartPrice}>
                <Typography
                    variant={'h6'}><strong>{Math.round(props.cartPrice - (props.cartPrice * props.cartDiscountPercent) / 100)} ₽</strong></Typography>
                <Typography align={'left'} style={{opacity: .5}} variant={'subtitle1'}><strong><strike>{props.cartPrice} ₽ </strike></strong></Typography>
            </div>
        </div>
    );
}

export default CartItemImageAndPrice;