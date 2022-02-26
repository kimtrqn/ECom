import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './cart-drop-style.scss';

const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />
                )
            }
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
);

// export default CartDropDown;

const mstp = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mstp)(CartDropDown);