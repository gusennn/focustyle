import './App.css';
import React from "react";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import ProductArchiveContainer from "./components/productArchive/ProductArchiveContainer";
import Footer from "./components/footer/Footer";
import Menu from './components/menuBurg/MenuBurg';


function App() {
    //const itemsNav = [{ value: 'Перейти в сохраненные товары', class: 'like' }, { value: 'Перейти в корзину', class: 'like' }, { value: 'Вход в личный кабинет', class: 'header__nav__item' }]
    const itemsMenu = [{ value: 'О магазине', href: '/' }, { value: 'Контакты', href: '/' }, { value: 'Разработчики проекта', href: '/' }]; //это должно быть в другом месте, но я не знаю куда перенести чтобы не сломать все остальное
    return (
        <div className="App">

            <div className='header'>
                <Header />
            </div>

            <div className='componentRenderArea'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="product" element={<ProductArchiveContainer />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </div>

            <div className='footer'>
                <Footer />
            </div>
            <Menu header={'меню бургер'} array={itemsMenu} />
        </div>
    );
}

export default App;
