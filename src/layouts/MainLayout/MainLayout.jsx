import React from 'react'
import Footer  from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import PropTypes from 'prop-types'

// layout chính của trang web(layout chủ đạo)
function MainLayout({children}) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

MainLayout.propTypes = {
  // 1 hoặc nhiều element
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
export default MainLayout
