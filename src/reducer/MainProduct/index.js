const ProductInitialState = {
    products: [
        // {
        //     key:1,
        //     price: "100",
        //     type:"200",
        //     name: "مياة وطني 600 مل ",
        //     qunaty: "24",
        //     count:0

        // },
        // {
        //     key:2,
        //     type:"330",
        //     price: "100",
        //     name: "مياة وطني 600 مل ",
        //     qunaty: "24"
        //     ,count:0
        // },
        // {
        //     key:3,
        //     type:"600",
        //     price: "100",
        //     name: "مياة وطني 600 مل ",
        //     qunaty: "24"
        //     ,count:0
        // },
        // {
        //     key:4,
        //     type:"1.5",
        //     price: "100",
        //     name: "مياة وطني 600 مل ",
        //     qunaty: "24"
        //     ,count:0
        // },
        // {
        //     key:5,
        //     type:"3.8",
        //     price: "100",
        //     name: "مياة وطني 600 مل ",
        //     qunaty: "24"
        //     ,count:0
        // },
        // {
        //     key:8,
        //     type:"5",
        //     price: "100",
        //     name: "مياة وطني 600 مل ",
        //     qunaty: "24"
        //     ,count:0
        // },
        // {
        //     key:6,
        //     type:"12",
        //     price: "100",
        //     name: "مياة وطني 600 مل ",
        //     qunaty: "24"
        //     ,count:0
        // },{
        //     key:7,
        //     type:"600",
        //     price: "100",
        //     name: "مياة وطني 600 مل ",
        //     qunaty: "24"
        //     ,count:0
        // },
    ],
    // loader: true

}
const actionType = require("../../action")


export default Product = (state = ProductInitialState, action) => {
    switch (action.type) {
        case actionType.getProduct:
            action.payload.forEach(element => {
                state.products.push({ ...element, count: 0 })
            });
            // action.payload.count++
            // for (let  ob :action.payload){

            // }
            state.loader = false
            // state.products=action.payload 
            return { ...state }
        case actionType.addToCart:
            action.payload.count++
            return { ...state }
        case actionType.decrease:
            action.payload.count--
            return { ...state }
        default:
            return state
    }
}