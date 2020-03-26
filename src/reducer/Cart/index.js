const ProductInitialState = {
    products:[
        {
            key:1,
            price: "100 ر.س",
            name: "مياة وطني 600 مل ",
            qunaty: "24"

        },
        {
            key:2,
            price: "100 ر.س",
            name: "مياة وطني 600 مل ",
            qunaty: "24"

        },
        {
            key:3,
            price: "100 ر.س",
            name: "مياة وطني 600 مل ",
            qunaty: "24"

        } ,
        
            
    ]
    
}
const actionType = require("../../action")


export default Cart = (state = ProductInitialState, action) => {
    // console.log("state");
    // console.log(state);

    switch (action.type) {
        case actionType.addToCart:
            state ={
                products:[
                    ...state.products
                    ,action.payload
                ]
            }
            // state.products.push(action.payload)
            return state
        case "ACTION_TYPE_2":
            return state
        default:
            return state
    }
}