import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import Header from './components/header/header';
import Home from './pages/homepage/Home';
import Shop from './pages/shop/Shop';
import Session from './pages/session/Session';

import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  };

  // it equal null because it sign out 
  unsubscribeFromAuth = null;

  // set unsubscribeFromAuth to a new method to set the user 
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})

      console.log(user);
    });
  }

  // it setting it back to null so there is no user left
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  
  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={Session} />
        </Switch>
      </div>
    )
  };
}

export default App;
