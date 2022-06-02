import http from "../utils/http"
// Khai báo những API liên quan đến Authentication

const authApi = {
  // post data vào register: nhận vào data và gửi dữ liệu data lên API
  register(data) {
    return http.post('register', data) // Gửi dữ liệu lên API
  },
  // post data vào login
  login(data) {
    return http.post('login', data)
  },
  logout() {
    return http.post('logout')
  }
}
// console.log(123);
export default authApi;