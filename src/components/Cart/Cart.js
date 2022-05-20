import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart){
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((price * 0.1).toFixed(2));
    const total = (price + shipping + tax).toFixed(2);

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Price: ${price}</p>
            <p>Shipping Price: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Total: ${total}</h5>
        </div>
    );
};

export default Cart;