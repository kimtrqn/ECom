import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user_action';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header';
import Home from './pages/homepage/Home';
import Shop from './pages/shop/Shop';
import Session from './pages/session/Session';
import CheckoutPage from './pages/checkout/checkout';


import './App.css';

class App extends React.Component {

  // it equal null because it sign out 
  unsubscribeFromAuth = null;

  // set unsubscribeFromAuth to a new method to set the user 
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      if (userAuth) { //the user exisit in database
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      }

      //if user dont exisit in database
      setCurrentUser(userAuth)
    });
  }

  // it setting it back to null so there is no user left
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  
  render() {
    return (
      <div>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact path='/signin' 
            render={() => this.props.currentUser ? <Redirect to='/' /> : <Session />} />
        </Switch>
      </div>
    )
  };
}


const mstp =  createStructuredSelector({
  currentUser: selectCurrentUser
});


const mdtp = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mstp, mdtp)(App);
