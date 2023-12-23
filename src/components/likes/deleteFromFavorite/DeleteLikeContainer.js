import React from "react";
import {connect} from "react-redux";
import DeleteBtn from "./DeleteBtn";
import {deleteLikeItem} from "../../../redux/productStateReducer";
import {likeItemDelete} from "../../../redux/likeStateReducer";

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
        likeItemDelete: (id)=>{dispatch(likeItemDelete(id))},
        likeItemGetCatName: (catName, cardId) => {
            dispatch(deleteLikeItem(catName, cardId))
        }
    }
}

const DeleteLikeContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteBtn)
export default DeleteLikeContainer