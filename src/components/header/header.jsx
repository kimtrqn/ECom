import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/images/crown.svg';

import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-drop/cart-drop';

import './header-style.scss';

const Header = ({ currentUser, hidden }) => (

    <div className='header'>
        <Link to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>

            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : 
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropDown />
        }
        
    </div>
);

//deconstruct a deep object
const mstp = ({ user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
});



export default connect(mstp)(Header);