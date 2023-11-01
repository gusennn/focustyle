import React from "react";
import { Typography } from "@mui/material";
import archCss from './productArchive.module.css'

const ProductArchive = (props) => {
    let glassesList = props.productData.glasses.solarGlass
    return (
        <>
            <div className={archCss.exampleClass}>

                {glassesList.map((g) => (
                    <div className={archCss.exampleCard}>
                        <img src={g.gImgUrl} alt="" />
                        <Typography variant="h6">{g.gTitle}</Typography>
                        <Typography variant="span" display="block"><span style={{ fontWeight: 'bold' }}>Материал оправы: </span>{g.gFrameMaterial}</Typography>
                        <Typography variant="span" display="block"><span style={{ fontWeight: 'bold' }}>Цвет оправы: </span>{g.gFrameColor}</Typography>
                        <Typography variant="span" display="block"><span style={{ fontWeight: 'bold' }}>Пол: </span>{g.gGender}</Typography>
                        <Typography variant="span" display="block"><span style={{ fontWeight: 'bold' }}>Тип линзы: </span>{g.gLensType}</Typography>
                        <Typography variant="span" display="block"><span style={{ fontWeight: 'bold' }}>Цвет линз: </span>{g.gLensColor}</Typography>
                        <Typography variant="span" display="block"><span style={{ fontWeight: 'bold' }}>Материал линз: </span>{g.gLensMaterial}</Typography>
                        <Typography variant="span" display="block"><span style={{ textDecoration: 'line-through' }}>{g.gPrice} Р </span></Typography>
                        <Typography variant="span" display="block"><span style={{ fontWeight: 'bold' }}>{Math.round(g.gPrice - (g.gPrice * g.gDiscountPercent) / 100)} Р</span></Typography>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductArchive