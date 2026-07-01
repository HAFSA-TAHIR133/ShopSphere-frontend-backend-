import React from 'react';
import '../css/heroSection.css';

function Hero() {
  return (
    <section className="hero-section">
      <img 
        src="/img2.jpeg" 
        alt="Special Summer Sale Banner" 
        className="hero-banner-img" 
      />

      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-badge">Limited Time Offer</span>
          <h1 className="hero-offer-text">
            Up to <span className="highlight">50% OFF</span> Everything
          </h1>
          <p className="hero-subtext">
            Upgrade your style with our exclusive collection. Free shipping on orders over $50!
          </p>
          
          <button  type="button" className="hero-btn"> Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;