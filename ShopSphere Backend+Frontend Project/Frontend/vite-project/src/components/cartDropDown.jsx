import { useCartContext } from '../context/cartContext.jsx';
import { useEffect, useState } from 'react';
import '../css/DropDown.css';

function CartDropDown({ variant }) {
    const { cartCount, increaseQuantity, decreaseQuantity } = useCartContext();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const total = cartCount.reduce((sum, value) => sum + parseFloat(value.price) * parseFloat(value.quantity), 0);
        setTotalPrice(total.toFixed(2));
    }, [cartCount]);

    const isFullPage = variant === "page";

    return (
        <div className={isFullPage ? 'cart-page-container' : 'cart-container'}>
            <div className={isFullPage ? 'full-page-drop-down-cart-items' : ''}>
                
                {/* Headers adapt based on view type */}
                {isFullPage ? (
                    <h3 className="cart-items-h3">Cart Items</h3>
                ) : (
                    <h2>Cart Items</h2>
                )}
                
                {cartCount.map((value, index) => (
                    <div 
                        className={isFullPage ? 'full-page-cart-items-separate' : 'drop-down-cart-items'} 
                        key={value.id}
                    >
                        {/* Dropdown Layout (Shows ONLY the item details, no adjustment buttons) */}
                        {!isFullPage ? (
                            <>
                                <h3>{value.name} (x{value.quantity}): ${value.price}</h3>
                                
        
                            </>
                        ) : (
                            /* Full Cart Page Layout Structure */
                            <>
                                <h3>Item: {index + 1}</h3>
                                <span>{value.name}:</span>
                                <span className='price-drop-down'> ${value.price}</span>
                                <p>Quantity: {value.quantity}</p>
                                <div className="quantity-btns-cart-drop-down">
                                    <button onClick={() => increaseQuantity(value.id)}>+</button>
                                    <button onClick={() => decreaseQuantity(value.id)}>-</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
                
                {/* Total price */}
                <span className={isFullPage ? '' : 'cart-dropdown-total-summary'}>
                    Total Price: ${totalPrice}
                </span>
                <div className='checkout-btn'>
                <button  type='button'>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartDropDown;