import React from 'react'
import {connect} from "react-redux";
import Cart from "./Cart";

let mapStateToProps = (state) => {
    return {
        cartList: state.cartState.cartList
    }
}


const CartContainer = connect(mapStateToProps)(Cart)
export default CartContainer