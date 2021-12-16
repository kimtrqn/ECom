import { TOGGLE_CART_HIDDEN } from './cart_actions';

const INITIAL_STATE = {
    hidden: true
};

const cartReducer = (state=INITIAL_STATE, action) => {
    Object.freeze(state);

    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
            return Object.assign({}, state, {hidden: !state.hidden})

        default:
            return state;
    }
};


export default cartReducer;