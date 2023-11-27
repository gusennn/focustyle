import React from "react";
import CartItemImg from "./CartTitle";
import {Button, Typography} from "@mui/material";
import cartCSS from './cart.module.css'
import CartItemTitleAndPrice from "./CartItemImageAndPrice";
import DeleteBtnContainer from "./DeleteBtnContainer";
import CartTitle from "./CartTitle";
import CartItemImageAndPrice from "./CartItemImageAndPrice";


const Cart = (props) => {
    let onIncrement = (e) => {
        let getItemId = e.target.value
        props.countIncrement(getItemId)
    }
    let onDecrement = (e) => {
        let getItemId = e.target.value
        props.countDecrement(getItemId)
    }

    return (
        <div className='componentContainer'>
            <Typography variant={'h4'} className={'componentContainerTitle'}>Корзина заказов</Typography>
            <div className="neumorph">
                <div className={cartCSS.cartCategory}>
                    <Typography variant={'h6'}>Товар</Typography>
                    <Typography variant={'h6'}>Цена</Typography>
                    <Typography variant={'h6'}>Количество</Typography>
                    <Typography variant={'h6'}>Стоимость</Typography>
                </div>
                {props.cartList.map(cl =>
                    <div className={`${cartCSS.cartItem} cartContainer`}>
                        <div className={cartCSS.titleContainer}>
                            <CartTitle cartTitle={cl.cartTitle}/>
                        </div>
                        <div className={cartCSS.productInfo}>
                            <CartItemImageAndPrice
                                cartImg={cl.cartImage}
                                cartImgAlt={cl.cartTitle}
                                cartPrice={cl.cartPrice}
                                cartDiscountPercent={cl.cartDiscountPercent}
                            />
                        </div>
                        <div className={cartCSS.countAndTrashContainer}>
                            <div className={cartCSS.countBtnWrapper}>
                                <Button value={cl.id} onClick={onIncrement} className={cartCSS.incBtn}
                                        color={'dark'}></Button>
                                <div className={cartCSS.countArea}>{cl.itemCountInCart}</div>
                                <Button value={cl.id} onClick={onDecrement} className={cartCSS.decBtn}
                                        color={'dark'}></Button>
                            </div>
                            <div className={cartCSS.discountPriceContainer}>
                                <Typography
                                    variant={'h6'}><strong>{Math.round(cl.cartPrice - (cl.cartPrice * cl.cartDiscountPercent) / 100)} ₽</strong></Typography>
                            </div>
                            <DeleteBtnContainer cardId={cl.cid} catName={cl.cartCatName} valueId={cl.id}/>
                        </div>
                    </div>
                )}
            </div>
            <div className={cartCSS.totalContainer}>
                <div className={cartCSS.totalItem}>
                    <Typography variant={'h6'} align={"right"}>
                        <strong>Итого:</strong>
                    </Typography>
                    <Typography align={"right"}>
                        {props.totalCartPrice}
                    </Typography>
                </div>
                <div className={cartCSS.totalItem}>
                    <Typography variant={'h6'} align={"right"}>
                        <strong>Скидки:</strong>
                    </Typography>
                    <Typography align={"right"}>
                        -{props.totalCartPrice - props.totalCartPriceDiscount}
                    </Typography>
                </div>
                <div className={cartCSS.totalItem}>
                    <Typography variant={'h6'} align={"right"}>
                        <strong>К оплате:</strong>
                    </Typography>
                    <Typography align={"right"}>
                        {props.totalCartPriceDiscount}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Cart