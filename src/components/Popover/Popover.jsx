import React from "react";
import PropTypes from 'prop-types'
import * as S from './Popover.style'

// Component này nhận vào 2 props: active(trạng thái ẩn hiện đc truyền từ component cha xuống), children(phần tử con đc truyền từ component cha xuống) 
Popover.propTypes = {
  active: PropTypes.bool, 
  // Children này có thể là 1 element hoặc là nhiều element
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

function Popover({ active, children }) {
  return (
    <React.Fragment>
      {active && (
        <S.NavRightNoti>
          <S.NavNotiContent>{children}</S.NavNotiContent>
        </S.NavRightNoti>
      )}
      
      {/* 
        <S.Drawer>
          <S.PopoverArrow />
          <S.PopoverContent>
            {children}
          </S.PopoverContent>
        </S.Drawer>
       */}
    </React.Fragment>
  );
}

export default Popover;
