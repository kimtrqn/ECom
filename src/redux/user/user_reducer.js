const INITIAL_STATE = {
    currentUser: null,
};


const userReducer = (state=INITIAL_STATE, action) => {
    Object.freeze(state);

    switch (action.type) {
        case 'SET_CURRENT_USER':
            return Object.assign({}, state, action.payload);
        default: 
            return state;
    }
};

export default userReducer;