import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])

    /*  useEffect(() => {
         const storedCart = getStoredCart()
         const savedCart = [];
         for (const id in storedCart) {
             const addedProduct = products.find(product => product._id === id);
             if (addedProduct) {
                 const quantity = storedCart[id];
                 addedProduct.quantity = quantity;
                 savedCart.push(addedProduct)
             }
         }
         setCart(savedCart)
     }, [products]) */

    const handleAddToCart = (selectedProduct) => {
        /*  cart.push(product) //according to js   
        But react works with ref(bellow, copy the cart & also add product in an array)
        const newCart = [...cart, selectedProduct];*/
        let newCart = [];
        const existProducts = cart.find(product => product._id === selectedProduct._id);
        if (!existProducts) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else {
            const restProducts = cart.filter(product => product._id !== selectedProduct._id)
            existProducts.quantity = existProducts.quantity + 1;
            newCart = [...restProducts, existProducts]
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
    }
    return (
        <div className="shop-container">
            <div>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}>
                                {number + 1}</button>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='clear-cart-btn'>
                        Clear Cart <span><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></span>
                    </button> <br />
                    <Link to={'/order-review'}>
                        <button className='review-order-btn'>
                            Review Order <span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;