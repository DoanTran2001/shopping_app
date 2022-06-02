import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import purchaseApi from '../../api/purchase.api'
import { payloadCreator } from '../../utils/helper'
import { logout } from '../Auth/auth.slice'

export const getCartPurchases = createAsyncThunk('cart/getCartPurchases', payloadCreator(purchaseApi.getCartPurchases))

const cart = createSlice({
  name: 'cart',
  initialState: {
    purchases: []
  },
  extraReducers: {
    [getCartPurchases.fulfilled]: (state, action) => {
      state.purchases = action.payload.data
    },
    // reset khi logout
    [logout.fulfilled]: (state => {
      state.purchases = [];
    })
  }
})
const cartReducer = cart.reducer;
export default cartReducer;