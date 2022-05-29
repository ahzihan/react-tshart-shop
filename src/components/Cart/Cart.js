import React from 'react';
import './Cart.css';

const Cart = ( props ) => {
    const { cart, handleRemoveToCart } = props;
    //Conditional rendering options
    //1.Element variable
    //2.ternary operator condition ? true : false
    //3.&& operator (shorthand)
    //4. || operator (shorthand)
    let message;
    if ( cart.length === 0 ) {
        message = <p>Please add at list one items.</p>;
    } else {
        message = <p>Thanks for adding item</p>;
    }

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h3>Selected Items: {cart.length}</h3>
            {message}
            {
                cart.map( tShirt => <div className='add-to-cart'>
                    <img src={tShirt.picture} alt="" />
                    <div className='t-info'>
                        <div>
                            <p>Name: {tShirt.name}</p>
                            <p>Price: ${tShirt.price}</p>
                        </div>
                        <button className='cart-btn' onClick={() => handleRemoveToCart( tShirt )}>X</button>
                    </div>
                </div> )
            }
            {cart.length !== 2 || <p>WoW! Buy 2 Get 1 Offer for you.</p>}
            {cart.length === 3 && <p className='orange'>Congratulations!</p>}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;