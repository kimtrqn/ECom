import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from "./root_reducer";

//middleware is middle between reducer and action
// if recieve action in and then do something 
// passed into reducer;

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares, ));

export default store;