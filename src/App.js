import './App.css';
import React from "react";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductArchiveContainer from "./components/productArchive/ProductArchiveContainer";
import Footer from "./components/footer/Footer";
import CartContainer from "./components/cart/CartContainer";

function App() {
    const itemsMenu = [{ value: 'О магазине', href: '/' }, { value: 'Контакты', href: '/' }, { value: 'Разработчики проекта', href: '/' }];
    return (
        <div className="App">

            <div className='header'>
                <Header header={'меню бургер'} array={itemsMenu} />
            </div>

            <div className='componentRenderArea'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="product" element={<ProductArchiveContainer />} />
                    <Route path="cart" element={<CartContainer />} />
                </Routes>
            </div>

            <div className='footer'>
                <Footer />
            </div>
            {/*<Menu header={'меню бургер'} array={itemsMenu} />*/}
        </div>
    );
}

export default App;
