const ProductInitialState = {
    products:[
        {
            key:1,
            price: "100 ر.س",
            type:"200",
            name: "مياة وطني 600 مل ",
            qunaty: "24",
            count:0

        },
        {
            key:2,
            type:"200",
            price: "100 ر.س",
            name: "مياة وطني 600 مل ",
            qunaty: "24"
            ,count:0
        },
    ]
    
}
const actionType = require("../../action")


export default Product = (state = ProductInitialState, action) => {
    switch (action.type) {
        case actionType.addToCart:
            // state.products.find({key:action.data.key});
            let v =state.products.find((value,index,object)=>{
                return value.key ==action.payload.key
                
            });
            v.count++

            console.log("V2= ",v)
            
            // state ={
            //     products:
            // }
            
            return state
        case "ACTION_TYPE_2":
            return state
        default:
            return state
    }
}