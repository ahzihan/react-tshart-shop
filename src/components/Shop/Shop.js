import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [ tshirts, setTshirts ] = useTshirt();
    const [ cart, setCart ] = useState( [] );

    const handleAddToCart = ( product ) => {
        const exists = cart.find( tShirt => tShirt._id === product._id );
        if ( !exists ) {
            const newCart = [ ...cart, product ];
            setCart( newCart );
        } else {
            alert( 'This Item Already Added!' );
        }

    };
    const handleRemoveToCart = ( selectedItem ) => {
        const rest = cart.filter( tShirt => tShirt._id !== selectedItem._id );
        setCart( rest );
    };
    return (
        <div className='product-container'>
            <div className='shop-container'>
                <h2>All Products</h2>
                <div className='tshirt-container'>
                    {
                        tshirts.map( product => <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product> )
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveToCart={handleRemoveToCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;