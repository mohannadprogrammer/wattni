import axios from "./axios";

const URL = "http://serverIp:serverPort";

export function Registaration (username, password) {
    console.log(`${URL} /admin/login`)
    return (
      axios.post(`${URL}/user/login`, { username, password }))
}