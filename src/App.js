import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      if (userAuth) { //the user exisit in database
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state));
        })
      }

      //if user dont exisit in database
      this.setState({currentUser: userAuth})
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
