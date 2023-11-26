import React from 'react'
import {connect} from "react-redux";
import Cart from "./Cart";
import {cartItemStateDec, cartItemStateInc} from "../../redux/cartStateReducer";

let mapStateToProps = (state) => {
    let arr = state.cartState.cartList.filter( fcl => fcl.itemCountInCart > 0)
    return {
        cartList: arr,
        totalCartPrice: state.cartState.totalCartPrice,
        totalCartPriceDiscount: state.cartState.totalCartPriceDiscount
    }
}

let mapDispatchToProps =(dispatch)=> {
    return {
        countIncrement: (id)=>{dispatch(cartItemStateInc(id))},
        countDecrement: (id)=>{dispatch(cartItemStateDec(id))},
    }
}


const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default CartContainer