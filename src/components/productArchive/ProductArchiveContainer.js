import React from "react";
import {connect} from "react-redux";
import ProductArchive from "./ProductArchive";
import {addFavor, productCatNameTry, productIdTry, productTabSwitch} from "../../redux/productStateReducer";

let mapStateToProps =(state)=> {
    return {
        productData: state.productState.glasses,
        productDesc: state.productState.glassesCategoryDescription,
        columnCount: state.productState.columnCount,
    }
}

let mapDispatchToProps =(dispatch)=> {
    return {
        tabsSwitcher: (num)=>{dispatch(productTabSwitch(num))},
        getTryId: (id, catName)=>{dispatch(productIdTry(id, catName))},

    }
    debugger
}

const ProductArchiveContainer = connect(mapStateToProps, mapDispatchToProps)(ProductArchive)
export default ProductArchiveContainer;