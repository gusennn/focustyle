import React from "react";
import {Typography} from "@mui/material";
import DeleteLikeContainer from "./deleteFromFavorite/DeleteLikeContainer";
import {NavLink} from "react-router-dom";
import hpCss from "../homePage/homePage.module.css";
import cartCSS from "../cart/cart.module.css";
import tabsCSS from "../productArchive/tabContent/tabContent.module.css";
import LikeCard from "./addToFavorite/LikeCard";

const Likes = (props) => {
    return (
        <div className='componentContainer'>
            {
                props.likeList.length ?
                    <div className={tabsCSS.glassCardWrapper}>
                        {
                            props.likeList.map( ll =>
                            <LikeCard likeImage={ll.likeImage}
                                      likeTitle={ll.likeTitle}
                                      gGender={ll.gGender}
                                      gType={ll.gType}
                                      gFrameMaterial={ll.gFrameMaterial}
                                      gFrameColor={ll.gFrameColor}
                                      gLensType={ll.gLensType}
                                      gLensColor={ll.gLensColor}
                                      gLensMaterial={ll.gLensMaterial}
                                      likeItemPrice={ll.likeItemPrice}
                                      likeItemDiscountPercent={ll.likeItemDiscountPercent}
                                      id={ll.id}
                                      cid={ll.cid}
                                      likeCatName={ll.likeCatName}
                            />
                            )
                        }
                    </div>
                    : <div>
                        <Typography variant={'h6'} className={'componentContainerTitle'}>Список Избранных товаров пуст. Вы можете добавить их в нашем каталоге :)</Typography>
                        <NavLink to='/product' className={hpCss.container__legend__nav}><Typography variant={'h6'} style={{ lineHeight: "18px" }}>Перейти в каталог </Typography></NavLink>
                    </div>
            }
        </div>
    )
}

export default Likes;