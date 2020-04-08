export function getProductApi (langang) {
    console.log(`${URL} /product_api?language=en`)
    return (
      axios.post(`${URL}/product_api?language=en`, { langange: langang }))
}