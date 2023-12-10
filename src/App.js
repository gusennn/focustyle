import './App.css';
import React from "react";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import AboutStore from "./components/aboutStore/AboutStore";
import { Routes, Route } from "react-router-dom";
import ProductArchiveContainer from "./components/productArchive/ProductArchiveContainer";
import Footer from "./components/footer/Footer";
import CartContainer from "./components/cart/CartContainer";
import TryContainer from "./components/tryRoom/TryContainer";

function App() {
    return (
        <div className="App">
            <div className='header'>
                <Header />
            </div>

            <div className='componentRenderArea'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about-store" element={<AboutStore />} />
                    <Route path="product" element={<ProductArchiveContainer />} />
                    <Route path="cart" element={<CartContainer />} />
                    <Route path="try" element={<TryContainer />} />
                </Routes>
            </div>

            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default App;
