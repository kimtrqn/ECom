import React from 'react';

import './button-style.scss';

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button 
        className={` ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : '' } button-component`}
        { ...otherProps }>
        {children}
    </button>
);


export default Button;