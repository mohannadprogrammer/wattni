const ProductInitialState = {
    products:[
        
    
            
    ],
    
    
}
const actionType = require("../../action")


export default Cart = (state = ProductInitialState, action) => {
    // console.log("state");
    // console.log(state);

    switch (action.type) {
        case actionType.addToCart:
            let v =state.products.find((value,index,object)=>{
                    return value.id ===action.payload.id 

                    
                 
            });

            // console.log("V= ",v)
            if (v==undefined){
                state.products.push(action.payload)   
            }
            // state.products.push(action.payload)
            return {...state}
        case "ACTION_TYPE_2":
            return state
        default:
            return state
    }               
}