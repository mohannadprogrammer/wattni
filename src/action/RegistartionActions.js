import { loginApi } from "../api";
const ActionTypes = require("./");

export async function setPhone(data) {

  return {
    type: ActionTypes.setPhone,
    payload: data
  };
}
export async function login(phone) {
  let res = await loginApi(phone).then(res => res.data)
  console.log(res)
  return {
    type: ActionTypes.login,
    payload: res
  };
}
export async function getData(type) {
  const data = await getDatas(type).then(res => {
    console.log("------------------------------------");
    console.log(res);
    return res.data.data;
  });
  return {
    type: ActionTypes.regist,
    payload: "data"
  };
}