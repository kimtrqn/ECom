import React from 'react';

import CollectionItem from './Collection-items';
import '../stylesheets/preview-style.scss';

const Preview = ({ title, items }) => {


    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )
};

export default Preview;