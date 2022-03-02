import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from './cart_actions';
import { addItemToCart, removeItemFromCart } from './cart_utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state=INITIAL_STATE, action) => {
    Object.freeze(state);

    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
            return Object.assign({}, state, { hidden: !state.hidden });
        case ADD_ITEM:
            return Object.assign({}, state, { cartItems : addItemToCart(state.cartItems, action.payload) });
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CLEAR_ITEM_FROM_CART: 
            return {
                ...state, 
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
};


export default cartReducer;