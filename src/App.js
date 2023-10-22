import './App.css';
import React from "react";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductArchive from "./components/productArchive/ProductArchive";
import Cart from "./components/cart/Cart";

function App() {
    return (
        <div className="App">
            <Header/>
            {/* Rote - работа со ссылками в доменном имени*/}
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="product" element={<ProductArchive/>}/>
                <Route exact path="cart" element={<Cart />}/>
            </Routes>
        </div>
    );
}

export default App;
