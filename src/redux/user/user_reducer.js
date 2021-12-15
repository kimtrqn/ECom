import { SET_CURRENT_USER } from './user_action';

const INITIAL_STATE = {
    currentUser: null,
};


const userReducer = (state=INITIAL_STATE, action) => {
    Object.freeze(state);

    switch (action.type) {
        case SET_CURRENT_USER:
            return Object.assign({}, state, { currentUser: action.payload });
        default: 
            return state;
    }
};

export default userReducer;