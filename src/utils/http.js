import axios from "axios";
import LocalStorage from "../constants/localStorage";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//  =================================== Axios ===================================
// Ví dụ: getUser thì cần token truyền lên để xác thực
// Còn getProduct thì k cần token

class Http {
  constructor() {
    // Create axios
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    /*
      Interceptors: dùng để config request trước khi gửi lên server hoặc config response trước khi được xử lý bởi then và catch( Cấu hình dữ liệu trả về hoạc cấu hình dữ liệu truyền lên API)
    */




    // Bạn có thể chặn các yêu cầu hoặc phản hồi trước khi chúng được xử lý bởi Then hoặc Catch
    // Add a request interceptor: Thêm một trình chặn yêu cầu
    this.instance.interceptors.response.use(
      (response) => {
        // Do something with response data: Làm điều gì đó với dữ liệu phản hồi

        //handle data trước khi nhận response
        // console.log(response); // {data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
        const result = { ...response.data, status: response.status };  // Chỉ nhận data và status
        // console.log(result); // {message: 'Lấy các sản phẩm thành công', data: {…}, status: 200}
        return result;
      },
      ({ response }) => {
        // Do something with response error: Làm điều gì đó với lỗi phản hồi
        // Nếu lỗi 401(Unauthorized error) thì sed hiện thông báo toast lỗi
        if(response.status === 401) {
          toast.error(response.data.message, {
            position: 'top-center',
            autoClose: 3000
          })
        }
        const result = { ...response.data, status: response.status };
        return Promise.reject(result);
      }
    );
    this.instance.interceptors.request.use(
      (config) => {
        // Do something before request is sent: làm điều gì đó trước khi yêu cầu đc gửi đi
        // Khi đăng nhập, hoặc đăng kí thành công thì backend sẽ trả về cho browser một assessToken, và mk sẽ lưu JWT đó vào localStorage
        // Lấy token từ localStorage để gửi yêu cầu lên API
        const accessToken = localStorage.getItem(LocalStorage.accessToken);
        // console.log(accessToken);
        // Nếu có token thì gửi token vào phần header
        if (accessToken) {
          config.headers.authorization = accessToken;
        }
        // console.log(config.data); // vd: {email: 'abc', password: '123'}
        return config;
      },
      // Do something with request error: Làm điều gì đó với lỗi yêu cầu
      (error) => {
        return Promise.reject(error.response);
      }
    );
  }
  // Xây dựng phương thức get: nhận vào url và config (nếu có)
  get(url, config = null) {
    return this.instance.get(url, config);
  }
  // Xây dựng phương thức post: nhận vào url, data truyền lên, và config (nếu có)
  post(url, data, config = null) {
    return this.instance.post(url, data, config);
  }
  push(url, data, config = null) {
    return this.instance.push(url, data, config);
  }
  delete(url, data, config = null) {
    return this.instance.delete(url, {
      data,
      ...config,
    });
  }
}
const http = new Http();
// http.get('/products').then(res => console.log(res)) // {message: 'Lấy các sản phẩm thành công', data: {…}, status: 200}
// http.post('register',{email: 'abc', password: '123'}).then(res => console.log(res))
// http.post('register',{email: 'abcdef@gmail.com', password: '123456'}).then(res => console.log(res)) 
// Nếu post thành công: {message: 'Đăng ký thành công', data: {…}, status: 200}
export default http;
