import React from "react";
import {Typography} from "@mui/material";

const ProductArchive =(props)=> {
    let glassesList = props.productData.glasses.solarGlass
    return (
        <>
            {glassesList.map ((g) => (
                <div>
                    <img src={g.gImgUrl} alt=""/>
                    <Typography variant={"h6"}>{g.gTitle}</Typography>
                </div>
            ))}

        </>
    )
}

export default ProductArchive