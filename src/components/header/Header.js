import React from "react";
import {NavLink} from "react-router-dom";

const Header =()=> {
    return (
        <>
            <div style={{ display: "flex", justifyContent: 'flex-end',gap: 10 }}>
                {/* NavLink - спец.тег React. Аналог тега <a> */}
                <NavLink to='/'>Дом</NavLink>
                <NavLink to='/product'>Каталог</NavLink>
                <NavLink to='/cart'>Корзина</NavLink>
            </div>
        </>
    )
}

export default Header;