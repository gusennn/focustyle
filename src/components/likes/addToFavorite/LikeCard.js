import React from 'react';
import {Typography} from "@mui/material";
import tabsCSS from "../../productArchive/tabContent/tabContent.module.css";
import cartCSS from "../../cart/cart.module.css";
import DeleteLikeContainer from "../deleteFromFavorite/DeleteLikeContainer";

function LikeCard(props) {
    return (
        <div className={`neumorph ${tabsCSS.glassCard}`}>
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
            <DeleteLikeContainer cardId={props.cid} catName={props.likeCatName} valueId={props.id} />
        </div>
    );
}

export default LikeCard;