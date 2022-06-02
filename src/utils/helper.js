// validate email
export const isEmail = value => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}

export const payloadCreator = asyncFunc => async (arg, thunkAPI) => {
  try {
    const res = await asyncFunc(arg);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
}

// Tạo đường dẫn để đưa Tên SP và ID lên  URL phần chi tiết sản phẩm
export const generateNameId = ({name, _id}) => {
  // Phương thức encodeURIComponent() có chức năng mã hoá 1 chuỗi URI, mã hoá tất cả những kí tự đặc biệt có trong URI
  // /\s/: khoảng trắng
  // Thay thế kí tự ' ' trong tên sp thành '-', thay thế kí tự '%' thành ''
  return encodeURIComponent(`${name.replace(/\s/g, "-").replace(/%/g, "")}-i.${_id}`)
}

// Lấy ID 
export const getIdFromNameId = url => {
  const arr = url.split('-i.')
  return arr[arr.length - 1]
}

export const rateSale = (priceSold, priceSale) => {
  const result = Math.round(((priceSold - priceSale) / priceSold) * 100) + '%';
  return result;
}

// Format số tiền(xuất hiện dấu chấm sau 3 chữ số): 43676 --> 43.676
export const formatMoney = (price, character = ".") => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, character);
}

// Format số sp đã bán, nếu trên 1000 thì thêm dấu '.' và thêm 'k'
// Ví dụ: 1700 ==> 1.7k
export const formatSold = value => {
  const num = Number((Number(value) / 1000).toFixed(2)) // Lấy 2 số đằng sau dấu '.'
  // Nếu num lớn hơn 1(Tức là lớn hơn 1000 sp) thì hiển thị thêm 'k'
  if(num > 1) {
    return num + "k"
  }
  // Nếu không lớn hơn 1000sp thì k hiển thị thêm 'k', giữ nguyên như thế
  return value
}