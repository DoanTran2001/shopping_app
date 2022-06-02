import React from "react";
import PropTypes from "prop-types";
/*
  Component chỉ là 1 thẻ input và chỉ cho phép nhập số 
  Component này nhận vào các props như: onChange, value từ component cha truyền xuống
*/
function BaseInputNumber({ onChange, value, onBlur, ...props }) {
  const handleChange = (e) => {
    const val = e.target.value; // Giá trị của input
    // Nếu ((là số hoặc rỗng) và có prop onChange) thì thực hiện hàm onChange(val) ở component cha.
    if ((/^\d+$/.test(val) || val === "") && onChange) {
      onChange(val);
    }
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    onBlur && onBlur(value);
  }
  // return về 1 thẻ input có onChange là handleChange, value là value từ component cha truyền xuống
  return <input type="text" onChange={handleChange} value={value} onBlur={handleBlur} {...props} />;
}

BaseInputNumber.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BaseInputNumber;
