import React from 'react'
import { Redirect } from 'react-router-dom';
import { path } from '../constants/path';
import { useAuthenticated } from '../hooks/useAuthenticated'
import PropTypes from 'prop-types'

/*
  Guard: Nhiệm vụ giúp ngăn chặn người dùng truy cập vào route(page) nếu không được phép
*/

AuthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
// Chưa đăng nhập: có thể truy cập vào trang login, register, home, nhưng k thể truy cập vào trang user ==> tạo AuthenticatedGuard để bảo vệ cho user

function AuthenticatedGuard({children}) {
  const authenticated = useAuthenticated();
  // Nếu chưa đăng nhập thì cho về trang đăng nhập đã, còn đăng nhập rồi thì cho hiển thị children
  if(!authenticated) {
    return <Redirect to={path.login}/>
  }
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default AuthenticatedGuard
