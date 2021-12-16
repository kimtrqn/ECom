import React from 'react';

import Button from '../button/button';

import './cart-drop-style.scss';

const CartDropDown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <Button>GO TO CHECKOUT</Button>
        </div>
    </div>
);

export default CartDropDown;