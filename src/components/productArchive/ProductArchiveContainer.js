import React from "react";
import {connect} from "react-redux";
import ProductArchive from "./ProductArchive";
import {productTabSwitch} from "../../redux/productStateReducer";

let mapStateToProps =(state)=> {
    return {
        productData: state.productState.glasses,
        productDesc: state.productState.glassesCategoryDescription,
        columnCount: state.productState.columnCount
    }
}

let mapDispatchToProps =(dispatch)=> {
    return {
        tabsSwitcher: (num)=>{dispatch(productTabSwitch(num))}
    }
}

const ProductArchiveContainer = connect(mapStateToProps, mapDispatchToProps)(ProductArchive)
export default ProductArchiveContainer;