import React from "react";
import {connect} from "react-redux";
import AddCart from "./AddCart";
import {cartState} from "../../../redux/cartStateReducer";
import {isInCartToggle} from "../../../redux/productStateReducer";

let mapStateToProps = (state, props) => {
    let cartData = props.glassList
    let checkId = props.checkCardId
    let disableStatus = props.disableStatus
    return {
        glassList: cartData,
        checkId: checkId,
        disableStatus: disableStatus
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        isCartChecker: (id) => {
            dispatch(isInCartToggle(id))
        },
        getAboutProduct: (cartData) => {
            dispatch(cartState(cartData))
        }
    }
}

const AddCartContainer = connect(mapStateToProps, mapDispatchToProps)(AddCart)
export default AddCartContainer