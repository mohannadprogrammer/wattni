import { createOrderApi } from "../api";
const ActionTypes = require("./");

export async function setData(data) {

    return {
        type: ActionTypes.setOrderData,
        payload: data
    };
}

export async function createOder(order) {
    let res = await createOrderApi(order).then(res => res.data.data.data);

    return {
        type: ActionTypes.createOder,
        payload: reslt
    };
}