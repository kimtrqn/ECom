import React from 'react';

import './button-style.scss';

const Button = ({ children, ...otherProps }) => (
    <button className='button-component' { ...otherProps }>
        {children}
    </button>
);


export default Button;