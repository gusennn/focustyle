import React from "react";
import {Typography} from "@mui/material";
import archCss from './productArchive.module.css'

const ProductArchive = (props) => {
    let glassesList = props.productData.glasses.solarGlass
    return (
        <>
            <div className={archCss.exampleClass}>

                {glassesList.map((g) => (
                    <div className={archCss.exampleCard}>
                        <img src={g.gImgUrl} alt=""/>
                        <Typography variant={"h6"}>{g.gTitle}</Typography>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductArchive