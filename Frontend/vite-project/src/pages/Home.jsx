import React, { useState, useEffect, useCallback } from 'react';
import '../css/home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../context/authContext';

const Home = () => {
  const navigate =useNavigate();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const {API_URL}=useAuthContext();

  // Fetch Product
  const fetchProducts = useCallback(async (pageNum) => {
    if (loading) return;
    
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/products?page=${pageNum}&limit=12`);
      
      if (res.data.success) {

        setProducts((prev) => {
            const existingIds = new Set(prev.map(p => p.id));

            const newProducts = res.data.products.filter(
                p => !existingIds.has(p.id)
            );

            return [...prev, ...newProducts];
        });        
        setHasMore(res.data.pagination.hasNextPage);
    
}
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  // Initial Load
  useEffect(() => {
    fetchProducts(1);
  }, []);

  // Infinite Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 100 >= 
          document.documentElement.scrollHeight && !loading && hasMore) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  // Load more when page changes
  useEffect(() => {
    if (page > 1) {
      fetchProducts(page);
    }
  }, [page]);

  return (
    <div className="main-products-container">
      <h1 className="our-products">Our Products</h1>

      <div className="iterate-over-product">
        {products.map(product => (
          <div key={product.id} className="single-product">
            <img 
              src={product.ProductImages?.[0]?.imageUrl || product.thumbnail} 
              alt={product.title}
              onClick={() => navigate(`/product/${product.id}`)}
              className="product-image"
            />
            <div className="details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              {product.discount > 0 && (
                <p className="discount">-{product.discount}% OFF</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {loading && <p className="loading-more-products">Loading more products...</p>}
      {!hasMore && products.length > 0 && <p className="finish-products">No more products</p>}
    </div>
  );
};

export default Home;