import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart_actions';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './cart-drop-style.scss';


//dispatch is a props because we use CONNECT from redux and
//it automatically add with out having a container of mdtp
// make sure to invoke the method that pass down in dispatch/action

const CartDropDown = ({ cartItems, history, dispatch }) => (
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
        
        <Button onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}
            >GO TO CHECKOUT</Button>
    </div>
);

// export default CartDropDown;

const mstp = createStructuredSelector({
    cartItems: selectCartItems
});


//if connect doesnt have a a first arguement of mdtp, 
// connect automatic add it in for you
// const mdtp = dispatch => ({

// })

export default withRouter(connect(mstp)(CartDropDown));