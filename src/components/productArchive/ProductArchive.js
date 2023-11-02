import React from "react";
import {Button, Paper, Typography} from "@mui/material";
import archCss from './productArchive.module.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const ProductArchive = (props) => {
    let glassesList = props.productData.glasses.solarGlass
    return (
        <div className='componentContainer'>
            <div className={archCss.glassCardWrapper}>

                {glassesList.map((g) => (
                    <div key={g.id}
                         variant={"elevation"}
                         elevation={2}
                         className={`${archCss.glassCard} neumorph`}>
                        <div className={archCss.glassColorPointer}
                             style={{backgroundColor: `${g.gLensColorHEX}`}}></div>
                        <img src={g.gImgUrl} alt={g.gTitle}/>
                        <Typography
                            className={archCss.glassCardTitle}
                            variant="h6"
                                    align={'center'}>{g.gTitle}</Typography>
                        <div className={archCss.cardAttributes}>
                            <Typography variant={'h6'}><strong>Материал оправы: </strong>{g.gFrameMaterial}</Typography>
                            <Typography variant={'h6'}><strong>Цвет оправы: </strong>{g.gFrameColor}</Typography>
                            <Typography variant={'h6'}><strong>Пол: </strong>{g.gGender}</Typography>
                            <Typography variant={'h6'}><strong>Тип линзы: </strong>{g.gLensType}</Typography>
                            <Typography variant={'h6'}><strong>Цвет линз: </strong>{g.gLensColor}</Typography>
                            <Typography variant={'h6'}><strong>Материал линз: </strong>{g.gLensMaterial}</Typography>
                            <div className={archCss.cardPrice}>
                                <Typography variant={'h6'}><strong>{Math.round(g.gPrice - (g.gPrice * g.gDiscountPercent) / 100)} ₽</strong></Typography>
                                <Typography variant={'h6'}><strike>{g.gPrice} ₽ </strike></Typography>
                            </div>
                        </div>
                        <div className={archCss.cardButtonsWrapper}>
                            <Button className={'neumorph'}>
                                <Typography>В корзину</Typography>
                                <ShoppingCartOutlinedIcon />
                            </Button>
                            <Button className={'neumorph'}>
                                <Typography>Примерить</Typography>
                                <AutoAwesomeIcon />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
//удалить этот коммент

export default ProductArchive