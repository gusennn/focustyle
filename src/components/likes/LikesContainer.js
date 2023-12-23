import React from "react";
import {connect} from "react-redux";
import Likes from "./Likes";

let mapStateToProps =(state)=> {
    let arr = state.likeState.likeList.filter( fcl => fcl.likeStatus === true)
    return {
        likeList: arr,
    }
}

const LikesContainer = connect(mapStateToProps)(Likes)
export default LikesContainer