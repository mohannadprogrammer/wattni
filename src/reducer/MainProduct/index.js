const ProductInitialState = {
    product:[

    ]
}


export default Product = (state = ProductInitialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            console.log(state);
            return state
        case "ACTION_TYPE_2":
            return state
        default:
            return state
    }
}