import React from 'react';
import {Button, Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function AddCart(props) {

    let onCartClick = () => {
        props.getAboutProduct(props.glassList[props.checkId])
        props.isCartChecker(props.checkId)
    }

    return (
        <div>
            {
                props.disableStatus ?
                    <Button disabled={props.disableStatus} color={'dark'} className={'neumorph'} onClick={onCartClick}>
                        <Typography>В корзине</Typography>
                        <ShoppingCartOutlinedIcon/>
                    </Button>
                    : <Button disabled={props.disableStatus} color={'dark'} className={'neumorph'} onClick={onCartClick}>
                        <Typography>В корзину</Typography>
                        <ShoppingCartOutlinedIcon />
                    </Button>
            }
        </div>
    );
}

export default AddCart;