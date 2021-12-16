import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart_actions';

import './cart-icon-style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">0</span>
    </div>
);

const mdtp = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(null, mdtp)(CartIcon);
