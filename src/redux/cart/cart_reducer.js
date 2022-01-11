import { TOGGLE_CART_HIDDEN, ADD_ITEM } from './cart_actions';
import { addItemToCart } from './cart_utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state=INITIAL_STATE, action) => {
    Object.freeze(state);

    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
            return Object.assign({}, state, {hidden: !state.hidden});
        case ADD_ITEM:
            return Object.assign({}, state, { cartItems : addItemToCart(state.cartItems, action.payload) })
        default:
            return state;
    }
};


export default cartReducer;