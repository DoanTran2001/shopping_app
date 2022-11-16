import http from "../utils/http"

const URL = "products"

// Những API liên qua đến product
const productApi = {
  // Lấy danh sách products
  getProducts(config) {
    return http.get(URL, config)
  },
  // Lấy chi tiết product
  getProductDetail(id) {
    return http.get(`${URL}/${id}`)
  }
}
export default productApi;