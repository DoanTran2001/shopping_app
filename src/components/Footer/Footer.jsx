import React from 'react'
import * as S from './Footer.style'

// Component Footer của tất cả các layout
function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <S.Footer1>
          <div className="">© 2021 Shopee. Tất cả các quyền được bảo lưu.</div>
          <S.Language>
            Ngôn ngữ: <span>Tiếng Anh</span> <span>Tiếng Việt</span>
          </S.Language>
        </S.Footer1>
        <S.Footer2>
          <div className="">Công ty TNHH Shopee</div>
          <div className="">Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam.</div>
          <div className="">Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
        </S.Footer2>
      </div>
    </S.Footer>
  )
}

export default Footer
