import axios from "./axios";

const URL = "http://watanyapp.com/api";

// require("./product.js")
export function getProductApi (langang) {
  // console.log(`${URL} /product_api?language=en`)
  return (
    axios.get(`${URL}/product_api?language=${langang}`))
}

export function Registaration (username, password) {
    console.log(`${URL} /admin/login`)
    return (
      axios.post(`${URL}/user/login`, { username, password }))
}
