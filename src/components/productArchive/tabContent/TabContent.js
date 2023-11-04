import React from 'react';
import archCss from "./productArchive.module.css";
import {Button, Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function TabContent(props) {

    let glassList = props.glassesList

    return (
        <div className={archCss.glassCardWrapper}>
            {glassList.map((g) => (
                <div key={g.id}
                     variant={"elevation"}
                     elevation={2}
                     className={`${archCss.glassCard} neumorph`}>
                    <svg width={30} height={30} className={archCss.glassColorPointer}>
                        <circle cx="15" cy="15" r="15" fill={g.gLensColorHEX}></circle>
                    </svg>
                    <img src={g.gImgUrl} alt={g.gTitle}/>
                    <Typography
                        className={archCss.glassCardTitle}
                        variant="h6"
                        align={'center'}>{g.gTitle}</Typography>
                    <div className={archCss.cardAttributes}>
                        <Typography variant={'h6'}><strong>Пол: </strong>{g.gGender}</Typography>
                        <Typography variant={'h6'}><strong>Тип очков: </strong>{g.gType}</Typography>
                        <Typography variant={'h6'}><strong>Материал оправы: </strong>{g.gFrameMaterial}</Typography>
                        <Typography variant={'h6'}><strong>Цвет оправы: </strong>{g.gFrameColor}</Typography>
                        <Typography variant={'h6'}><strong>Тип линзы: </strong>{g.gLensType}</Typography>
                        <Typography variant={'h6'}><strong>Цвет линз: </strong>{g.gLensColor}</Typography>
                        <Typography variant={'h6'}><strong>Материал линз: </strong>{g.gLensMaterial}</Typography>
                        <div className={archCss.cardPrice}>
                            <Typography variant={'h6'}><strong>{Math.round(g.gPrice - (g.gPrice * g.gDiscountPercent) / 100)} ₽</strong></Typography>
                            <Typography variant={'h6'}><strike>{g.gPrice} ₽ </strike></Typography>
                        </div>
                    </div>
                    <div className={archCss.cardButtonsWrapper}>
                        <Button color={'dark'} className={'neumorph'}>
                            <Typography>В корзину</Typography>
                            <ShoppingCartOutlinedIcon />
                        </Button>
                        <Button color={'dark'} className={'neumorph'}>
                            <Typography>Примерить</Typography>
                            <AutoAwesomeIcon />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TabContent;