import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart_actions';

import './checkout-item-style.scss';


//credit to use 
// 4242 4242 4242 4242 -- 
// Exp: 01/20
// CW : 123

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>

            <span className="name">{name}</span>
            <span className="quantity">
                <div 
                    className="arrow"
                    onClick={() => removeItem(cartItem)}
                >&#10094;</div>
                <span className="value">{quantity}</span>
                <div 
                    className="arrow"
                    onClick={() => addItem(cartItem)}
                >&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div 
                className="remove-button"
                onClick={() => clearItemFromCart(cartItem)}
            >&#10005;</div>
        </div>
    )
};

const mdtp = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mdtp)(CheckoutItem);