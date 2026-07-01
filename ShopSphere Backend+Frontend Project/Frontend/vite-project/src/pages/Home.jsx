import { useState,useEffect } from 'react';
import Navbar from '../components/navbar.jsx';
import Hero from '../components/hero.jsx';
import { useSelectedProductContext } from '../context/selectedProductContext.jsx';
import ProductGrid from '../components/productGrid.jsx';
import ProductCard from '../components/productCard.jsx';
import '../css/homePage.css';
import Footer from '../components/footer.jsx';

function Home() {
    const {selectedProduct,handleProductCardBack} =useSelectedProductContext();
    

    return (
        <div className="home-layout">
            <main className="main-content-area" style={{ minHeight: '70vh' }}>
                {selectedProduct ? (
                    <ProductCard 
                        item={selectedProduct} 
                        onBack={handleProductCardBack} 
                    />
                ) : (
                    <div className='hero=productGrid-section'>
                        <Hero />
                        <ProductGrid />
                    </div>
                    
                )}
            </main>
        </div>
    );
}

export default Home;