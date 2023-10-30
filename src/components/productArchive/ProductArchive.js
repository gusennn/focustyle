import React from "react";
import {Typography} from "@mui/material";

const ProductArchive =(props)=> {
    let glassesList = props.productData.glasses.solarGlass
    return (
        <>
            {glassesList.map ((g) => (
                <div>
                    <img src={g.glassImgUrl} alt=""/>
                    <Typography variant={"h6"}>{g.glassesTitle}</Typography>
                </div>
            ))}

        </>
    )
}

export default ProductArchive