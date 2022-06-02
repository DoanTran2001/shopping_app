import { createSlice } from "@reduxjs/toolkit";

// Tạo appSlice để khi gọi API để tạo status theo dõi status này

const app = createSlice({
  name: 'app',
  initialState: {
    status: 200 
  },
  extraReducers: builder => {
    // Nếu dispatch 1 action gọi API có kiểu kết thúc bằng '/fulfilled' hoặc '/rejected' thì ta lưu lại status đó 
    builder.addMatcher(action => action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected'),
      (state, action) => {
        state.status = action.payload.status
      }
    )
  }
})

const appReducer = app.reducer
export default appReducer