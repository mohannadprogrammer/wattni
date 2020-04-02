import {getDatas, addUser, disactiveUser, updateItem} from '../api';
const ActionTypes = require('./');

export async function addToCart(data) {
  return {
    type: ActionTypes.addToCart,
    payload: data,
  };
}

export async function decrease(data) {
  return {
    type: ActionTypes.decrease,
    payload: data,
  };
}
