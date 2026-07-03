import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../context/authContext';
import '../css/ProductDetails.css';

const ProductDetails = () => {
    const {API_URL}=useAuthContext();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/products/${id}`);
        if (res.data.success) {
          setProduct(res.data.product);
          // Set first image as default
          if (res.data.product.ProductImages?.length > 0) {
            setSelectedImage(0);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // TODO: Add to cart logic (we'll do this later)
    alert(`Added ${quantity} ${product.title} to cart!`);
  };

  if (loading) return <p className="product-details-loading">Loading product...</p>;
  if (!product) return <p className="product-details-not-found">Product not found</p>;

return (
  <div className="product-details-container">
    <div className="product-details-content">

      {/* Left: Images */}
      <div className="product-images-section">
        <div className="product-main-image-wrapper">
          <img
            src={product.ProductImages?.[selectedImage]?.imageUrl || product.thumbnail}
            alt={product.title}
            className="product-main-image"
          />
        </div>

        {/* Thumbnail Gallery */}
        <div className="product-thumbnail-gallery">
          {product.ProductImages?.map((img, index) => (
            <img
              key={index}
              src={img.imageUrl}
              alt={`View ${index + 1}`}
              className={`product-thumbnail-image ${
                selectedImage === index
                  ? "product-thumbnail-active"
                  : "product-thumbnail"
              }`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="product-information-section">
        <h1 className="product-details-title">{product.title}</h1>

        <div className="product-price-section">
          <span className="product-price">
            ${product.price}
          </span>

          {product.discount > 0 && (
            <span className="product-discount">
              -{product.discount}% OFF
            </span>
          )}
        </div>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-meta-information">
          <div className="product-category">
            <strong>Category:</strong> {product.Category?.name}
          </div>

          <div className="product-seller">
            <strong>Seller:</strong> {product.Seller?.firstName}{" "}
            {product.Seller?.lastName}
          </div>

          <div className="product-stock">
            <strong>Stock:</strong>

            <span
              className={
                product.stock > 0
                  ? "product-stock-available"
                  : "product-stock-unavailable"
              }
            >
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="product-quantity-section">
          <span className="product-quantity-label">Quantity:</span>

          <div className="product-quantity-controls">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="quantity-decrease-button"
            >−</button>

            <span className="quantity-value">{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)} className="quantity-increase-button" >+
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button onClick={handleAddToCart} disabled={product.stock === 0} className={`add-to-cart-button ${
            product.stock === 0 ? "add-to-cart-disabled" : "add-to-cart-enabled" }`}
        >
          {product.stock > 0 ? "Add to Cart": "Out of Stock"}
        </button>
      </div>
    </div>
  </div>
)
};

export default ProductDetails;