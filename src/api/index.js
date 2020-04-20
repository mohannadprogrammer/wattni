import axios from "./axios";

const URL = "http://watanyapp.com/api";

// require("./product.js")
export function getProductApi(langang) {
  // console.log(`${URL} /product_api?language=en`)
  return (
    axios.get(`${URL}/product_api?language=${langang}`))
}


//login and registration 
export function loginApi(phone) {
  console.log(`${URL}/`)
  return (
    axios.post(`${URL}/login_phone`, { phone }))
}
export function LoginConfiramtion(phone, activation_key) {
  console.log(`${URL} /`)
  return (
    axios.post(`${URL}/login_phone_code`, { phone, activation_key }))
}
export function Registaration(user_name, phone) {
  // console.log(`${URL} /admin/login`)
  return (
    axios.post(`${URL}/user_api`, { user_name, phone }))
}
export function updateUserInformation(id, userData) {

  return (
    axios.post(`${URL}/user_api/` + id, userData))
}


/// order apo 
export function createOrderApi(order) {

  return (
    axios.post(`${URL}/order_api`, order))
}