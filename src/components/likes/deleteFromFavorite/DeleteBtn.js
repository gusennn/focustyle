import React from 'react';
import cartCSS from "../../cart/cart.module.css";
import likeCss from '../liked.module.css'
import {Button} from "@mui/material";

function DeleteBtn(props) {

    let onDelete =(e)=> {
        let getItemId = Number(e.currentTarget.value)
        props.likeItemDelete(getItemId)
        props.likeItemGetCatName(props.catName, props.cardId)
    }

    return (
        <div className={likeCss.deleteBtn}>
            <Button value={props.valueId} className={cartCSS.deleteBtn} onClick={onDelete}>
            </Button>
        </div>
    );
}

export default DeleteBtn;