import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            {/* <div>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div> */}
            <div className='custom-link'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/shop'}>Shop</CustomLink>
                <CustomLink to={'/order-review'}>Order Review</CustomLink>
                <CustomLink to={'/inventory'}>Inventory</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                {
                    user ? <h6 onClick={handleSignOut}>Sign Out</h6> :
                        <CustomLink to={'/login'}>Log In</CustomLink>
                }
            </div>
        </nav>
    );
};

export default Header;