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

        } ,
        {
            key:3,
            price: "100 ر.س",
            name: "مياة وطني 600 مل ",
            qunaty: "24"

        } ,
        {
            key:4,
            price: "100 ر.س",
            name: "مياة وطني 600 مل ",
            qunaty: "24"

        },
        {
            key:5,
            price: "100 ر.س",
            name: "مياة وطني 600 مل ",
            qunaty: "24"

        }    
    ]
    
}


export default Product = (state = ProductInitialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            
            return state
        case "ACTION_TYPE_2":
            return state
        default:
            return state
    }
}