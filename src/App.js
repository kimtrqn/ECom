import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './components/Home';
import Shop from './components/shop/Shop'

import './App.css';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
