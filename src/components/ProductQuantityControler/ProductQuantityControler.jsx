import React from "react";
import * as S from "./ProductQuantityControler.style";
import PropTypes from "prop-types";

ProductQuantityControler.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  max: PropTypes.number,
};

// Component này nhận vào các props như: value, onChange, max(quantity max của mỗi sp)
function ProductQuantityControler({
  value,
  onChange,
  onInput,
  onIncrease,
  onDecrease,
  onBlur,
  disabled,
  max,
}) {
  // Hàm handle change nhận vào 1 tham số là giá trị của input trong BaseInputNumber
  const handleChange = (value) => {
    let _value = Number(value); // Chuyển sang number
    if (_value > max) {
      // Nếu nhập lớn hơn max thì cho về max
      _value = max;
    } else if (value < 1) {
      // Nếu nhập nhỏ hơn 1 thì cho về 1
      _value = 1;
    }
    onChange && onChange(_value); // Nếu có onChange thì gọi hàm onChange ở component cha để set lại quantity
    onInput && onInput(_value);
  };
  // Hàm tăng số lượng
  const increase = () => {
    let _value = value + 1; // tăng value nhận từ component cha lên 1
    if (_value > max) {
      // Nếu lớn hơn max thì cho về max
      _value = max;
    }
    onChange && onChange(_value);
    onIncrease && onIncrease(_value);
  };
  // Hàm gi
  const decrease = () => {
    let _value = value - 1;
    if (_value < 1) {
      _value = 1;
    }
    onChange && onChange(_value);
    onDecrease && onDecrease(_value);
  };
  const handleBlur = (value) => {
    onBlur && onBlur(Number(value))
  }
  return (
    <S.ProductQuantityControler>
      <S.ProductQuantityButton onClick={() => {
          !disabled && decrease()
        }} 
        disabled={disabled}
      >
        <svg
          enableBackground="new 0 0 10 10"
          viewBox="0 0 10 10"
          x={0}
          y={0}
          className="shopee-svg-icon"
        >
          <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
        </svg>
      </S.ProductQuantityButton>
      <S.ProductQuantiTyInput 
        onChange={handleChange} 
        value={value} 
        onBlur={handleBlur}
        disabled = {disabled}
      />{" "}
      {/* Từ BaseInputNumber */}
      <S.ProductQuantityButton onClick={() => {
          !disabled && increase()
        }}
        disabled = {disabled}
      >
        <svg
          enableBackground="new 0 0 10 10"
          viewBox="0 0 10 10"
          x={0}
          y={0}
          className="shopee-svg-icon icon-plus-sign"
        >
          <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
        </svg>
      </S.ProductQuantityButton>
    </S.ProductQuantityControler>
  );
}

export default ProductQuantityControler;
