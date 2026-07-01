import '../components/productGrid.jsx';
import '../css/productCard.css';
import { useEffect, useState } from 'react';
import { useCartContext } from '../context/cartContext.jsx';

function ProductCard({ item, onBack }) {
    const { cartCount, increaseQuantity, decreaseQuantity, handleViewBtn } = useCartContext();
    const [totalPrice, setTotalPrice] = useState(0);
    
    // Find the active quantity for this specific item in the cart array
    const currentCartItem = cartCount.find(cartItem => cartItem.id === item.id);
    const itemQuantity = currentCartItem ? currentCartItem.quantity : 0;
    
    useEffect(() => {
        const total = cartCount.reduce((sum, value) => sum + parseFloat(value.price) * parseFloat(value.quantity), 0);
        setTotalPrice(total.toFixed(2));
    }, [cartCount]);

    return (
        <div className="single-product-view">
            <button className="back-btn" onClick={onBack}>
                ← Back to Products
            </button>

            <div className="detail-card-container">
                <div className="detail-img-section">
                    <img src={item.image} alt={item.name} />
                </div>

                <div className="detail-info-section">
                    <span className="category-tag">
                        Product Details
                    </span>

                    <h2>{item.name}</h2>

                    <p className="detail-id">
                        Item ID: #{item.id}
                    </p>

                    <h3 className="detail-price">
                        ${item.price}
                    </h3>

                    <p className="detail-description">
                        Premium software engineering equipment engineered
                        for ultimate durability and performance metrics.
                    </p>

                    {/* Styled Quantity Controls */}
                    <div className='quantity-btns'> 
                        <button className="qty-control-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span className="quantity-display">{itemQuantity}</span>
                        <button className="qty-control-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                    </div> 
                    <div className="total-price-display">
                            Cart Total: <span>${totalPrice}</span>
                        </div>

                    {/* Grouped Action Layout */}
                    <div className="action-row">
                        <button
                            className="add-to-cart-btn"
                            onClick={() => handleViewBtn(item)}
                        >
                            Add to Cart
                        </button>

                        <button  className='cont-checkout-btn' type='button'>Checkout</button>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ProductCard;