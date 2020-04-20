const ProductInitialState = {
    products: [

        {
            key: 8,
            type: "5",
            price: "100",
            name: "مياة وطني 600 مل ",
            qunaty: "24"
            , count: 10
        }

    ],
    addOrder: {
        "language": "en",
        "user_id": "1",
        "coupon_code": "",

        "coupon_amount": "0",

        "payment_way": "1",



        "scheduled_type": "2week",
        "city": "geda",
        "section": "g4",
        "address": "hggff",
        "lat": "23.11",
        "lng": "43.22",
        "time_schedule_delivery": "19:50:13",



        "time_delivery": "19:50:13",
        "delivery_period": "morning",
        "product_id": [1, 2],
        "quantity": [9, 12]
    }


}
const actionType = require("../../action")


export default Cart = (state = ProductInitialState, action) => {
    // console.log("state");
    // console.log(state);

    switch (action.type) {
        case actionType.addToCart:
            let v = state.products.find((value, index, object) => {
                return value.id === action.payload.id
            });

            // console.log("V= ",v)
            if (v == undefined) {

                state.products.push(action.payload)
            }
            // state.products.push(action.payload)
            return { ...state }
        case actionType.setOrderData:
            state.addOrder[action.payload.name] = action.payload.value
            return { ...state }
        default:
            return state
    }
}