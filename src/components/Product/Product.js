import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price, seller, ratings} = props.product;
    // const {handleAddToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;