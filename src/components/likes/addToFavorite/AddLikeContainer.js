import React from "react";
import {connect} from "react-redux";
import AddLike from "./AddLike";
import {likeState} from "../../../redux/likeStateReducer";
import {isInLikeToggle} from "../../../redux/productStateReducer";

let mapStateToProps = (state, props) => {
    let catName = props.catName
    let cartData = props.glassList
    let checkId = props.checkCardId
    return {
        catName,
        glassList: cartData,
        checkId: checkId,
        disableStatus: props.disableStatus
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        isLikeChecker: (id) => {
            dispatch(isInLikeToggle(id))
        },
        getAboutProduct: (cartData, name) => {
            dispatch(likeState(cartData, name))
        },
    }
}

const AddLikeContainer = connect(mapStateToProps, mapDispatchToProps)(AddLike)
export default AddLikeContainer