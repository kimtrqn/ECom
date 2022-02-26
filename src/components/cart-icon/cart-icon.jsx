import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart_actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

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

const mstp = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mstp, mdtp)(CartIcon);
