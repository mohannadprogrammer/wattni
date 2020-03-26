import { getDatas, addUser ,disactiveUser,updateItem} from "../api";
const ActionTypes = require("./");

export async function addToCart(data) {
    console.log("data")
    console.log(data)
    return {
      type: ActionTypes.addToCart,
      payload:data
    };
  }