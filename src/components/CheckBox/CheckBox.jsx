import React from 'react'
import * as S from './CheckBox.style'
import PropTypes from 'prop-types'

function CheckBox({onChange, checked, ...props}) {
  const handleChange = (e) => {
    const value = e.target.checked;
    onChange && onChange(value); // Nếu có onChange của component cha truyền xuống thì thực hiện onChange của component cha(nhận vào giá trị của input đã checked)
  }
  return (
    <S.CheckBox>
      <S.CheckBoxInput 
        type="checkbox"
        onChange={handleChange}
        checked = {checked}
        {...props}
      />
      <S.CheckBoxBox />
    </S.CheckBox>
  )
}

CheckBox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool
}

export default CheckBox
