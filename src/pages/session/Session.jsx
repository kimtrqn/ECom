import React from 'react';


import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import './session-style.scss';

const Session = () => (
    <div className="session-page">
        <SignIn />
        <SignUp />
    </div>
);

export default Session;