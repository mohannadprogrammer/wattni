const registInitialState = {
    status: 0,
    phone: "",
    code: "",
    loader: false
}

const actionType = require("../../action")
export default regist = (state = registInitialState, action) => {
    switch (action.type) {
        case actionType.regist:
            return action.payload
        case actionType.setPhone:
            state = { phone: action.payload }
            return { ...state }
        case actionType.login:
            // if ()
            state.status = action.payload.status
            if (action.payload.activation_key) {
                state.code = action.payload.activation_key
            }
            // state = action.payload
            return { ...state }
        default:
            return state
    }
}