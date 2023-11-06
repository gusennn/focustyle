import React from 'react';
import tabsCSS from "./tabContent.module.css";
import {Button, Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AddCartContainer from "../../cart/addCart/AddCartContainer";

function TabContent(props) {

    let glassList = props.glassesList
    let categoryDescription = props.categoryDescription

    return (
        <div className={tabsCSS.glassCardWrapper}>
            { categoryDescription.map( cd => <div className={tabsCSS.catDescription}>
                <Typography className={tabsCSS.catDescTitle} variant={'h4'}>{cd.descTitle}</Typography>
                <Typography className={tabsCSS.catDescText} variant={'h6'}>{cd.descText}</Typography>
            </div> )}
            {glassList.map((g) => (
                <div key={g.id}
                     variant={"elevation"}
                     elevation={2}
                     style={{background: `linear-gradient(45deg, transparent 50%, ${g.gLensColorHEX}30 120%) `}}
                     className={`${tabsCSS.glassCard} neumorph`}>
                    <p>{g.isInCart}</p>
                    <img src={g.gImgUrl} alt={g.gTitle}/>
                    <Typography
                        className={tabsCSS.glassCardTitle}
                        variant="h6"
                        align={'center'}>{g.gTitle}</Typography>
                    <div className={tabsCSS.cardAttributes}>
                        <Typography variant={'h6'}><strong>Пол: </strong>{g.gGender}</Typography>
                        <Typography variant={'h6'}><strong>Тип очков: </strong>{g.gType}</Typography>
                        <Typography variant={'h6'}><strong>Материал оправы: </strong>{g.gFrameMaterial}</Typography>
                        <Typography variant={'h6'}><strong>Цвет оправы: </strong>{g.gFrameColor}</Typography>
                        <Typography variant={'h6'}><strong>Тип линзы: </strong>{g.gLensType}</Typography>
                        <Typography variant={'h6'}><strong>Цвет линз: </strong>{g.gLensColor}</Typography>
                        <Typography variant={'h6'}><strong>Материал линз: </strong>{g.gLensMaterial}</Typography>
                    </div>
                    <div className={tabsCSS.cardPrice}>
                        <Typography
                            variant={'h6'}><strong>{Math.round(g.gPrice - (g.gPrice * g.gDiscountPercent) / 100)} ₽</strong></Typography>
                        <Typography variant={'h6'}><strike>{g.gPrice} ₽ </strike></Typography>
                    </div>
                    <div className={tabsCSS.cardButtonsWrapper}>
                        <AddCartContainer glassList={glassList} checkCardId={g.id} disableStatus={g.isInCart}/>
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