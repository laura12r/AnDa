const INITIAL_STATE = {
    isLogged: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'IS_LOGGED': {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}