const INITIAL_STATE = {
    isChangeFirstName: false,
    isChangeLastName: false,
    isChangeEmail: false,
    isChangeGender: false,
    isChangeDate: false,
    isChangePhone: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PERSONAL_INFORMATION': {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}