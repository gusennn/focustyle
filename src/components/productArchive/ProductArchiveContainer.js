import React from "react";
import {connect} from "react-redux";
import ProductArchive from "./ProductArchive";

let mapStateToProps =(state)=> {
    return {
        productData: state.productState,
    }
}

const ProductArchiveContainer = connect(mapStateToProps)(ProductArchive)
export default ProductArchiveContainer;