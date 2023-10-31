import './App.css';
import React from "react";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import ProductArchiveContainer from "./components/productArchive/ProductArchiveContainer";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="product" element={<ProductArchiveContainer />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
