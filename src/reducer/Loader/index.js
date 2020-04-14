const registInitialState = {
    loader: false
}

const actionType = require("../../action")
export default regist = (state = registInitialState, action) => {
    switch (action.type) {
        case actionType.startLoading:
            state.loader = true
            return { ...state }
        case actionType.stopLoading:
            state.loader = false
            return { ...state }
        default:
            return state
    }
}