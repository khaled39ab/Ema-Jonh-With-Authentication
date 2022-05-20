import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;