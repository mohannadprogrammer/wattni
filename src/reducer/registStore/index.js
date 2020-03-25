const registInitialState = {
    phone :"09999288"
}
const actionType = require("../../action")
export default regist = (state = registInitialState, action) => {
    switch (action.type) {
        case actionType.regist:
            return action.payload
        case actionType.setPhone:
            state={phone :action.payload}
            return state
        default:
            return state
    }
}