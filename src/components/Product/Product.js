import React from 'react';
import './Product.css';
const Product = ( props ) => {
    const { handleAddToCart, product } = props;
    const { name, picture, price, gender } = product;
    return (
        <div className='single-product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p><small>Gender: {gender}</small></p>
            </div>
            <button onClick={() => handleAddToCart( product )}>Add to Cart</button>

        </div>
    );
};

export default Product;