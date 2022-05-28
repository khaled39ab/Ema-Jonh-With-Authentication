import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        /*  cart.push(product) //according to js   
        But react works with ref(bellow, copy the cart & also add product in ana array)
        const newCart = [...cart, selectedProduct];*/
        let newCart = [];
        const existProducts = cart.find(product => product.id === selectedProduct.id);
        if (!existProducts) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else {
            const restProducts = cart.filter(product => product.id !== selectedProduct.id)
            existProducts.quantity = existProducts.quantity + 1;
            newCart = [...restProducts, existProducts]
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;