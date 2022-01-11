import React from 'react';
import { connect } from 'react-redux';

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

const mstp = ({ cart: { cartItems }}) => ({
    cartItems
});

export default connect(mstp)(CartDropDown);