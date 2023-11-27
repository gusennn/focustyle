import React from 'react';
import cartCSS from "./cart.module.css";
import {Typography} from "@mui/material";

function CartTitle(props) {
    return (
        <div className={cartCSS.cartTitle}>
            <Typography variant={'h6'}>{props.cartTitle}</Typography>
        </div>
    );
}

export default CartTitle;