import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart_actions';

import './cart-icon-style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mdtp = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mstp = ({ cart : { cartItems }}) => ({
    itemCount: cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0)
})

export default connect(mstp, mdtp)(CartIcon);
