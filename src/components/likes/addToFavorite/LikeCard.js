import React from 'react';
import {Typography} from "@mui/material";
import tabsCSS from "../../productArchive/tabContent/tabContent.module.css";
import cartCSS from "../../cart/cart.module.css";
import DeleteLikeContainer from "../deleteFromFavorite/DeleteLikeContainer";

function LikeCard(props) {
    return (
        <div className={`neumorph ${tabsCSS.glassCard}`}>
            <DeleteLikeContainer cardId={props.cid} catName={props.likeCatName} valueId={props.id} />
            <img src={props.likeImage} alt=""/>
            <Typography variant={'h6'}>{props.likeTitle}</Typography>
            <div className={tabsCSS.cardAttributes}>
                <Typography variant={'h6'}><strong>Пол: </strong>{props.gGender}</Typography>
                <Typography variant={'h6'}><strong>Тип очков: </strong>{props.gType}</Typography>
                <Typography variant={'h6'}><strong>Материал оправы: </strong>{props.gFrameMaterial}</Typography>
                <Typography variant={'h6'}><strong>Цвет оправы: </strong>{props.gFrameColor}</Typography>
                <Typography variant={'h6'}><strong>Тип линзы: </strong>{props.gLensType}</Typography>
                <Typography variant={'h6'}><strong>Цвет линз: </strong>{props.gLensColor}</Typography>
                <Typography variant={'h6'}><strong>Материал линз: </strong>{props.gLensMaterial}</Typography>
            </div>
            <div className={cartCSS.cartPrice}>
                <Typography
                    variant={'h6'}><strong>{Math.round(props.likeItemPrice - (props.likeItemPrice * props.likeItemDiscountPercent) / 100)} ₽</strong></Typography>
                <Typography align={'left'} style={{opacity: .5}} variant={'subtitle1'}><strong><strike>{props.likeItemPrice} ₽ </strike></strong></Typography>
            </div>
        </div>
    );
}

export default LikeCard;