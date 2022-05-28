import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css'

const ReviewItems = (props) => {
    const {handleRemoveProduct, product} = props;
    const { name, quantity, shipping, img, price } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="product-info-container">
                <div className="product-info">
                    <h5 className='product-name' title={name}>{name}</h5>
                    <p>Price: <span className='orange-color'>${price}</span></p>
                    <p><small>Shipping Charge: <span className='orange-color'>${shipping}</span></small></p>
                    <p><small>Quantity: <span style={{color:'red'}}>{quantity}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveProduct(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;