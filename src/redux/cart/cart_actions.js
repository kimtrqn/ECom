export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
})



