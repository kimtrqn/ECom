import { combineReducers } from "redux";

import cartReducer from "./cart/cart_reducer";
import userReducer from "./user/user_reducer";


export default combineReducers({
    user: userReducer,
    cart: cartReducer
});

