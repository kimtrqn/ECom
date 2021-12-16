import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart_actions';

import Button from '../button/button';

import './collection-item-style.scss';

const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item;
    return(
        <div className='collection-item'>
            <div 
                className="image"
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
            >
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div> 
            <Button inverted onClick={() => addItem(item)}>Add to Cart</Button>
        </div>
    )
};

const mdtp = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});


export default connect(null, mdtp)(CollectionItem);