import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './OrderReview.css'

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();

    const handleRemoveProduct = product => {
        const rest = cart.filter(prod => prod._id !== product._id);
        setCart(rest);
        removeFromDb(product._id)
    }

    const clearCart = (products) => {
        const rest = cart.filter(prod => prod._id === products._id);
        setCart(rest);
        deleteShoppingCart()
    }

    return (
        <div className="shop-container">
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItems
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={() => clearCart(products)} className='clear-cart-btn'>
                        Clear Cart <span><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></span>
                    </button> <br />
                    <Link to={'/inventory'}>
                        <button className='review-order-btn'>
                            Proceed Checkout <span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;