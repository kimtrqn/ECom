import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import ShopPage from './components/shop/shop';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
