import React from "react";
import {connect} from "react-redux";
import DeleteBtn from "./DeleteBtn";
import {cartItemDelete} from "../../redux/cartStateReducer";
import {deleteCartItem} from "../../redux/productStateReducer";

let mapStateToProps =(state, props)=> {
    let valueId = props.valueId
    let catName = props.catName
    let cardId = props.cardId
    return {
        valueId,
        catName,
        cardId,
    }
}

let mapDispatchToProps =(dispatch)=> {
    return {
        cartItemDelete: (id)=>{dispatch(cartItemDelete(id))},
        cartItemGetCatName: (catName, cardId) => {
            dispatch(deleteCartItem(catName, cardId))
        }
    }
}

const DeleteBtnContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteBtn)
export default DeleteBtnContainer