import React from "react";
import {Button, Typography} from "@mui/material";
import cartCSS from './cart.module.css'
import CartItemImageAndTitle from "./CartItemImageAndTitle";
import DeleteBtnContainer from "./DeleteBtnContainer";
import CartTitle from "./CartTitle";
import hpCss from "../homePage/homePage.module.css";
import {NavLink} from "react-router-dom";

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
            {props.cartList.length ?
                <div>
                <Typography variant={'h4'} className={'componentContainerTitle'}>Корзина заказов</Typography>
                    <div className="neumorph">
                        <div className={cartCSS.cartCategory}>
                            <Typography variant={'h6'}>Товар</Typography>
                            <Typography variant={'h6'}>Цена</Typography>
                            <Typography variant={'h6'}>Количество</Typography>
                            <Typography variant={'h6'}>Стоимость</Typography>
                        </div>
                        {props.cartList.map(cl =>
                            <div className={`${cartCSS.cartItem}`} >
                                <div className={cartCSS.titleContainer}>
                                    <CartTitle cartTitle={cl.cartTitle}/>
                                </div>
                                <div className={cartCSS.productInfo}>
                                    <CartItemImageAndTitle
                                        cartImg={cl.cartImage}
                                        cartImgAlt={cl.cartTitle}
                                    />
                                </div>
                                <div className={cartCSS.cartPrice}>
                                    <Typography
                                        variant={'h6'}><strong>{Math.round(cl.cartPrice - (cl.cartPrice * cl.cartDiscountPercent) / 100)} ₽</strong></Typography>
                                    <Typography align={'left'} style={{opacity: .5}} variant={'subtitle1'}><strong><strike>{cl.cartPrice} ₽ </strike></strong></Typography>
                                </div>
                                <div className={cartCSS.countAndTrashContainer}>
                                    <div className={cartCSS.countBtnWrapper}>
                                        <Button value={cl.id} onClick={onDecrement} className={cartCSS.decBtn}
                                                color={'dark'}></Button>
                                        <div className={cartCSS.countArea}>{cl.itemCountInCart}</div>
                                        <Button value={cl.id} onClick={onIncrement} className={cartCSS.incBtn}
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
                        <div className={cartCSS.totalContainer}>
                            <div className={cartCSS.totalItem}>
                                <Typography variant={'h6'} align={"right"}>
                                    <strong>Итого:</strong>
                                </Typography>
                                <Typography align={"right"}>
                                    {props.totalCartPrice}₽
                                </Typography>
                            </div>
                            <div className={cartCSS.totalItem}>
                                <Typography variant={'h6'} align={"right"}>
                                    <strong>Скидки:</strong>
                                </Typography>
                                <Typography align={"right"} >
                                    -{props.totalCartPrice - props.totalCartPriceDiscount}₽
                                </Typography>
                            </div>
                            <div className={cartCSS.totalItem}>
                                <Typography variant={'h6'} align={"right"}>
                                    <strong>К оплате:</strong>
                                </Typography>
                                <Typography align={"right"} variant={'h6'}>
                                    {props.totalCartPriceDiscount}₽
                                </Typography>
                            </div>
                            <Button color={'dark'} className={`${cartCSS.checkoutBtn}`}>Оформить заказ</Button>
                        </div>
                    </div>
                </div>

                : <div>
                    <Typography variant={'h4'} className={'componentContainerTitle'}>Корзина заказов пуста. Вы можете выбрать для себя что-либо в нашем каталоге :)</Typography>
                    <NavLink to='/product' className={hpCss.container__legend__nav}><Typography variant={'h6'} style={{ lineHeight: "18px" }}>Перейти в каталог </Typography></NavLink>
                </div>
            }


        </div>
    )
}

export default Cart