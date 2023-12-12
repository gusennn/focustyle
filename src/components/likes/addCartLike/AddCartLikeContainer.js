import React from "react";
import { connect } from "react-redux";
import AddCartLike from "./AddCartLike";
import { cartGetCatName, cartState } from "../../../redux/cartStateReducer";
import { isInCartToggle, productCatName } from "../../../redux/productStateReducer";

let mapStateToProps = (state, props) => {
  let catName = props.catName
  let cartData = props.glassList
  let checkId = props.checkCardId
  let disableStatus = props.disableStatus
  return {
    catName,
    glassList: cartData,
    checkId: checkId,
    disableStatus: disableStatus
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    cartCatName: (catName) => {
      dispatch(cartGetCatName(catName))
    },
    isCartChecker: (id) => {
      dispatch(isInCartToggle(id))
    },
    getAboutProduct: (cartData, name) => {
      dispatch(cartState(cartData, name))
    },
    getCatName: (catName) => {
      dispatch(productCatName(catName))
    }
  }
}

const AddCartContainerLike = connect(mapStateToProps, mapDispatchToProps)(AddCartLike)
export default AddCartContainerLike