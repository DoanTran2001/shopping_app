import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../api/auth.api";
import LocalStorage from "../../constants/localStorage";
import { payloadCreator } from "../../utils/helper";


// *************** Register *************************

export const register = createAsyncThunk(
  "auth/register", // tên action
  // code async logic, tham số đầu tiên data{object dữ liệu} là dữ liệu truyền vào khi gọi action
  payloadCreator(authApi.register)
  // async (data, thunkAPI) => {
  //   try {
  //     const res = await authApi.register(data); // Gửi dữ liệu register lên API
  //     return res;
  //   } catch (error) { // Nếu có lỗi thì return ra thunkAPi
  //     return thunkAPI.rejectWithValue(error);
  //   }
  // }
);
// ******************* Login *************************
export const login = createAsyncThunk(
  "auth/login", // tên action
  payloadCreator(authApi.login)
);
// ******************* Logout *************************
// Đăng xuất: nhấn vào đăng xuất thì gọi API logout, sau khi gọi thành công thì ta sẽ xóa assessToken và user ở trong localStorage
export const logout = createAsyncThunk(
  "auth/logout",
  payloadCreator(authApi.logout)
)
let initState = {
  // Nếu có user trong localStorage rồi thì sẽ lấy nó còn không thì lấy object rỗng
  profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {}
}

const auth = createSlice({
  name: "auth",
  initialState: initState,
  // reducers: các action bình thường (sync action)
  // code logic xử lý async action
  reducers: {
    unauthorize: (state) => {
      state.profile = {} // reset redux
      // Remove trong localStorage luôn
      localStorage.removeItem(LocalStorage.user) // Xóa user trong localStorage
      localStorage.removeItem(LocalStorage.accessToken) // Xóa token trong localStorage
    }
  },
  extraReducers: {
    // Khi thực hiện action thành công (Promise fulfilled)
    // Khi gửi dữ liệu thành công 
    [register.fulfilled]: (state, action) => {
      const { user, access_token } = action.payload.data; // Lấy thông tin user và access_token 
      // console.log(action.payload.data);
      // action.payload: {message: "Đăng ký thành công", data: {...}}
      //action.payload.data: { access_token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlRyYW4xMjNAZ21haWwuY29tIiwiaWQiOiI2MjUyOTIzMTZlYmMwMDFjZjJkZTlkYzAiLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIyLTA0LTEwVDA4OjE1OjQ1Ljc1NFoiLCJpYXQiOjE2NDk1Nzg1NDUsImV4cCI6MTY1MDE4MzM0NX0.qgoVix2FQ-5ysjioCNJbJEezg9tCUMmP3tGayon0qBg" , expires: "7d", user: {createdAt: "2022-04-10T08:15:45.715Z", email: "Tran123@gmail.com", roles: ['User'], updatedAt: "2022-04-10T08:15:45.715Z", __v: 0, _id: "625292316ebc001cf2de9dc0"}}
      state.profile = user; // set profile là thông tin user
      localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile)); // Lưu profile user vào localStorage
      localStorage.setItem(LocalStorage.accessToken, access_token); // Lưu token vào localStorage
    },
    [login.fulfilled]: (state, action) => {
      const { user, access_token } = action.payload.data;
      state.profile = user;
      localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile));
      localStorage.setItem(LocalStorage.accessToken, access_token);
    },
    // Khi logout thành công thì reset redux, xóa user và assessToken ở trong localStorage
    [logout.fulfilled]: (state) => {
      state.profile = {} // reset redux
      // Remove trong localStorage luôn
      localStorage.removeItem(LocalStorage.user)
      localStorage.removeItem(LocalStorage.accessToken)
      
    }
  },
});
const authReducer = auth.reducer;
export const unauthorize = auth.actions.unauthorize;
export default authReducer;

