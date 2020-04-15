import { getProductApi } from '../api';
const ActionTypes = require('./');

export async function getProduct(lang) {
  let product = await getProductApi(lang).then(res => res.data.data.data);
  console.log(product)
  return {
    type: ActionTypes.getProduct,
    payload: product
  }
}
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
export async function startLoading(data) {
  return {
    type: ActionTypes.startLoading,
    payload: data,
  };
}
export async function stopLoading() {
  return {
    type: ActionTypes.stopLoading,
    payload: data,
  };
}