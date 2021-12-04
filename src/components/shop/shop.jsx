import React from 'react';

import SHOP_DATA from './shop-data';
import Preview from '../preview';

import '../../stylesheets/shop-style.scss';

class ShopPage extends React.Component {

    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <Preview 
                            key={id} {...otherCollectionProps} />

                    ))
                }
            </div>
        )
    }

};

export default ShopPage;