import React from 'react';

import './checkout-item-style.scss';


//credit to use 
// 4242 4242 4242 4242 -- 
// Exp: 01/20
// CW : 123

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity }}) => {

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>

            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    )
};


export default CheckoutItem;