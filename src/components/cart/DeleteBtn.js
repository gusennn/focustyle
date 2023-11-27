import React from 'react';
import {Button} from "@mui/material";
import cartCSS from "./cart.module.css";
import delete_svg from '../../assets/svg/trash.svg'

function DeleteBtn(props) {

    let onDelete =(e)=> {
        let getItemId = e.target.value
        props.cartItemDelete(getItemId)
        props.cartItemGetCatName(props.catName, props.cardId)
    }
    return (
        <div className={cartCSS.deleteContainer}>
            <Button value={props.valueId} className={cartCSS.deleteBtn} onClick={onDelete}>
            </Button>
        </div>
    );
}

export default DeleteBtn;