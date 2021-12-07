import React from 'react';

import '../stylesheets/items-style.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (

    <div className="items">
        <div 
            className="image"
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
        >
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div> 
        </div>
    </div>
);


export default CollectionItem;