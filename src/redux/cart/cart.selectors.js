import { createSelector } from "reselect";

const selectCart = state => state.cart;

//selector always help to stop rerender components when state
//changes with memorization
// create selector take in a collection and a function
export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accQuantity, cartItem) => 
            accQuantity + cartItem.quantity, 0
        )
)