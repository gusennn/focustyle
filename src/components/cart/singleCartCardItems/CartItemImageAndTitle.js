import React from 'react';
import cartCSS from '../cart.module.css'
import {Typography} from "@mui/material";


function CartItemImageAndTitle(props) {
    return (
        <div className={cartCSS.cartImageAndTitle}>
            <div className={cartCSS.cartImage}>
                <img src={props.cartImg} alt={props.cartImgAlt}/>
            </div>
            <div className={cartCSS.cartTitle}>
                <Typography variant={'h6'}>{props.cartImgAlt}</Typography>
            </div>

        </div>
    );
}

export default CartItemImageAndTitle;