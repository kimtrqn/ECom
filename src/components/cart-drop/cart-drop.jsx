import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './cart-drop-style.scss';

const CartDropDown = ({ cartItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <span className="empty-message">
                    Your cart is empty
                </span>
            }
        </div>
        <Button onClick={() => history.push('/checkout')}>GO TO CHECKOUT</Button>
    </div>
);

// export default CartDropDown;

const mstp = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mstp)(CartDropDown));