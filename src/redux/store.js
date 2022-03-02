import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from "./root_reducer";

//middleware is middle between reducer and action
// if recieve action in and then do something 
// passed into reducer;

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares, ));


export const persistor = persistStore(store);

export default { store, persistStore };