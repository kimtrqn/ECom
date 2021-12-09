import React from 'react';

import './button-style.scss';

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in' : '' } button-component`}
        { ...otherProps }>
        {children}
    </button>
);


export default Button;