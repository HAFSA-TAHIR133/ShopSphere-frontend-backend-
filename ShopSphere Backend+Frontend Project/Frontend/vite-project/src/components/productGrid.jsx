import { products } from '../data/products.js';
import { useSelectedProductContext } from '../context/selectedProductContext.jsx';
import '../css/productGrid.css'
import { useCartContext } from '../context/cartContext.jsx';


function ProductGrid() {
    const {handleViewDetails} =useSelectedProductContext();
    const {handleViewBtn} = useCartContext();
    
    
    return (
        <div className="store-container">
            <h3 className="store-title">Available Products</h3>
            <div className='grid-layout'>
                {products.map((value) => (
                    <div className='product-item' key={value.id}>
                        <div className="img-wrapper">
                            <img src={value.image} alt={value.name} width="100px"/> 
                        </div>
                        <h4>{value.name}</h4> 
                        <p className="price">${value.price}</p>

                        <button
                        className="add-to-cart-btn-grid-product"
                        onClick={() => handleViewBtn(value)}>Add to Cart
                        </button>
                        {/* Trigger the parent's state change on click */}
                        <button className="view-btn" onClick={() => handleViewDetails(value)}>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;


