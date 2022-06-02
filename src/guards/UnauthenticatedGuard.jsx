import React from 'react'
import { Redirect } from 'react-router-dom';
import { path } from '../constants/path';
import { useAuthenticated } from '../hooks/useAuthenticated'
import PropTypes from 'prop-types'

UnauthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

// Đã đăng nhập: có thể truy cập vào user nhưng không thể truy cập vào login, register trừ khi họ logout ==> Tạo UnauthenticatedGuard để bảo vệ cho login, register

function UnauthenticatedGuard({ children }) {
  const authenticated = useAuthenticated(); // Hook kiểm tra đã login hay chưa
  // Nếu đăng nhập rồi thì cho về trang Home, còn chưa thì sẽ ở lại children(Login/ Register).
  if(authenticated) {
    return <Redirect to={path.home}/>
  }
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default UnauthenticatedGuard
