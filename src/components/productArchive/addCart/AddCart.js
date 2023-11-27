import React from 'react';
import {Button, Typography} from "@mui/material";
import basket from '../../../assets/svg/iconBasket.svg'
import pa from '../productArchive.module.css'


function AddCart(props) {
    props.getCatName(props.catName)

    let onCartClick = () => {
        props.cartCatName(props.catName)
        props.getAboutProduct(props.glassList[props.checkId], props.catName)
        props.isCartChecker(props.checkId)
    }
    return (
        <div>
            {
                props.disableStatus ?
                    <Button disabled={props.disableStatus} color={'dark'} className={`neumorph btn ${pa.addBtn}`} onClick={onCartClick}>
                        <Typography style={{ fontSize: 18}}>В корзине <img style={{opacity: .5}} src={basket} alt="В корзине"/></Typography>
                    </Button>
                    : <Button disabled={props.disableStatus} color={'dark'} className={'neumorph btn'} onClick={onCartClick}>
                        <Typography style={{ fontSize: 18}}>В корзину <img src={basket} alt="В корзину"/></Typography>
                    </Button>
            }
        </div>
    );
}

export default AddCart;