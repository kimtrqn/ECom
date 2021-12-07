import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/homepage/Home';
import Shop from './pages/shop/Shop';

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
