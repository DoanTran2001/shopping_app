import http from "../utils/http"

const URL = 'categories'

// Những API liên quan đến category
const categoryApi = {
  // Lấy danh sách category
  getCategories() {
    return http.get(URL)
  }
}

export default categoryApi;