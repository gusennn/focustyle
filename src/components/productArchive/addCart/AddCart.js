import React from 'react';
import { Button, Modal, Paper, Typography } from "@mui/material";
import basket from '../../../assets/svg/iconBasket.svg'

import AddCartModal from "./AddCartModal";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AddCart(props) {
    props.getCatName(props.catName)

    let onCartClick = () => {
        props.getAboutProduct(props.glassList[props.checkId], props.catName)
        props.isCartChecker(props.checkId)
    }
    return (
        <div>
            {
                props.disableStatus ?
                    <AddCartModal />
                    : <Button disabled={props.disableStatus} color={'dark'} className={'neumorph btn'} style={{border: '1px solid #444'}} onClick={onCartClick}>
                        <Typography style={{ fontSize: 18 }}>Добавить <img src={basket} alt="В корзину" /></Typography>
                    </Button>
            }
        </div>
    );
}

export default AddCart;