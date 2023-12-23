import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";

let mapStateToProps =(state)=> {
    return {
        likeStatus: state.likeState.likeIndication,
        cartStatus: state.cartState.cartIndication
    }
}

const HeaderContainer = connect(mapStateToProps)(Header)
export default HeaderContainer;