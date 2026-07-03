import { Link ,useNavigate} from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import '../css/navbar.css';

function Navbar() {
  const navigate=useNavigate();

  return (
    <nav className="navbar">
      <Link to="/home" className="logo-container">
          <span className="logo-text logo-text-italic">Shop
              <span className="logo-text-italic logo-text">Sphere</span>
          </span>
      </Link>

      <div className="nav-menu">
        <Link to="/home" className="nav-link">Home</Link>

        <div className="nav-item-wrapper" >
          <button className="nav-btn" onClick={()=> navigate('/profile')}>
            <FaUserCircle /> <span>User</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;