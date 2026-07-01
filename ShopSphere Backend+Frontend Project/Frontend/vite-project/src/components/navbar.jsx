import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import CartDropDown from "../components/cartDropDown";
import UserDropDown from '../components/userDropDown';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useCartContext } from '../context/cartContext.jsx'; 
import '../App.css';

function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const { cartCount } = useCartContext(); 

  const cartRef = useRef(null);
  const userRef = useRef(null);

  // 3. Calculate dynamic total price to show next to the icon
  const navbarTotalPrice = cartCount.reduce(
    (sum, value) => sum + parseFloat(value.price) * parseFloat(value.quantity), 0
).toFixed(2);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
  
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShowUser(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/home" className="logo-container">
          <span className="logo-text logo-text-italic">Shop
              <span className="logo-text-italic logo-text">Sphere</span>
          </span>
      </Link>

      <div className="nav-menu">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">Cart</Link>

        <div className="nav-item-wrapper" ref={cartRef}>
          <button className="nav-btn" onClick={() => setShowCart(!showCart)}>

            {/* 4. Display the total price next to the cart icon here */}

            <FaShoppingCart /><span>${navbarTotalPrice}</span>
   
          </button>
          {showCart && <CartDropDown />}
        </div>

        <div className="nav-item-wrapper" ref={userRef}>
          <button className="nav-btn" onClick={() => setShowUser(!showUser)}>
            <FaUserCircle /> <span>User</span>
          </button>
          {showUser && <UserDropDown />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;