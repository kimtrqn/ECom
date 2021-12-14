import React from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import './sign-in-style.scss';

class SignIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange}
                        label='email'
                        type="email" 
                        name='email' 
                        value={this.state.email} required />
                    <FormInput 
                        handleChange={this.handleChange}
                        type="password" 
                        name='password' 
                        label='password'
                        value={this.state.password} required />
                    <div className="buttons">
                        <Button type='submit'>Sign in </Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;