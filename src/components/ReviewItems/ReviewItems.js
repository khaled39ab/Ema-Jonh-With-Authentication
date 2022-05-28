import React from 'react';
import './ReviewItems.css'

const ReviewItems = (props) => {
    const { name, quantity, shipping, img, price } = props.product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="product-info-container">
                <div className="product-info">
                    <h5>{name}</h5>
                    <p>Price: <span className='orange-color'>${price}</span></p>
                    <p>Shipping Charge: <span className='orange-color'>${shipping}</span></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-btn">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;