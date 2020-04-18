const ProductInitialState = {
    products: [



    ],
    response: {
        "status": "1",
        "sum_catoon": 21,
        "total": 362,
        "total_product_price": 345,
        "price_delivery": null,
        "vat_money": 17.25,
        "data": [
            {
                "id": 1,
                "price": "17",
                "product_name": "مياة وطني 200 ملي",
                "number_product": 9,
                "total_price": 153
            },
            {
                "id": 2,
                "price": "16",
                "product_name": "مياة وطني 330 ملي",
                "number_product": 12,
                "total_price": 192
            }
        ]
    }



}
const actionType = require("../../action")


export default payment = (state = ProductInitialState, action) => {

    switch (action.type) {
        case actionType.addToCart:

            return { ...state }
        case "ACTION_TYPE_2":
            return state
        default:
            return state
    }
}