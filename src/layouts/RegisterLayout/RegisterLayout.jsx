import React from 'react'
import Footer from '../../components/Footer/Footer'
import HeaderRegister from '../../components/HeaderRegister/HeaderRegister'
import PropTypes from 'prop-types'

// Layout trang đăng nhập, đăng ký
// Component này gồm 2 props là children: node và title: string
function RegisterLayout({children, title}) {
  return (
    <div>
      <HeaderRegister title={title}/>
        {children}
      <Footer/>
    </div>
  )
}

RegisterLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)  
  ])
}

export default RegisterLayout
