import { purchaseStatus } from "../constants/status"
import http from "../utils/http"

const URL = 'purchases'

const purchaseApi = {
  // Thêm sp vào giỏ hàng
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data)
  },
  // Lấy danh sách sp trong giỏ hàng
  getCartPurchases() {
    return http.get(URL, {
      params: {
        status: purchaseStatus.inCart
      }
    })
  }
}
export default purchaseApi