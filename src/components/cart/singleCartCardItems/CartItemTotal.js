import React from 'react';
import cartCSS from "../cart.module.css";
import {Typography} from "@mui/material";

const CartItemTotal =(props)=> {
    return (
        <div>
            <Typography
                variant={'h6'}><strong>{Math.round(props.cartPrice - (props.cartPrice * props.cartDiscountPercent) / 100)} ₽</strong></Typography>
        </div>
    );
}

export default CartItemTotal;