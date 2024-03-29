import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, ButtonLink } from "../../assets/styles/utils";

export const StyleHeader = styled.header`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  margin-bottom: 3rem;
  width: 100%;
`;
export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;
export const Logo = styled(Link)`
  margin-right: 4rem;
  svg {
    width: 162px;
    height: 50px;
    fill: #fff;
  }
`;
export const StyleForm = styled.form`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  background: #fff;
  border-radius: 2px;
  height: 4rem;
`;
export const StyledInput = styled.input`
  flex-grow: 1;
  border: 0;
  padding-left: 1rem;
`;
export const StyledButton = styled(Button)`
  padding-left: 20px;
  padding-right: 20px;
  svg {
    color: #fff;
    fill: currentColor;
  }
`;
export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 5rem;
`;
export const CartContainer = styled.div`
  position: relative;
`;
export const CartIcon = styled(Link)`
  padding: 10px;
  display: inline-block;
  position: relative;
  svg {
    color: #fff;
    width: 26px;
    height: 26px;
    stroke: #fff;
    fill: currentColor;
  }
`;
export const CartNumberBadge = styled.div`
  position: absolute;
  border-radius: 4rem;
  min-width: 11px;
  padding: 0 5px;
  text-align: center;
  border: 2px solid #ee4d2d;
  color: #ee4d2d;
  background-color: #fff;
  line-height: 1;
  top: 0;
  right: 0;
`;
export const PopverContent = styled.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 / 20%);
  overflow: hidden;
  background-color: #fff;
  width: 40rem;
`;
export const PopoverTitle = styled.div`
  text-decoration: underline;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.26);
  text-transform: capitalize;
`;
export const MiniProductCartPrice = styled.div`
  margin-left: 1.5rem;
  flex-shrink: 1;
  color: #ee4d2d;
`;
export const MiniProductCart = styled.div`
  cursor: pointer;
  display: flex;
  padding: 1rem;
  border-bottom: 2px solid #eee;
  transition: .25s ease-in-out;
  ${MiniProductCartPrice}:hover & {
    color: #fff;
  }
  &:hover {
    background-color: #ea9b06;
  }
`;
export const MiniProductCartImg = styled.img`
  flex-shrink: 0;
  object-fit: cover;
  width: 4rem;
  height: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
`;
export const MiniProductCartTitle = styled.div`
  /* flex-grow: 1; */
  white-space: pre-wrap;
  line-height: 16px;
  height: 16px;
  overflow: hidden; // ẩn các nội dung khi kích thước lớn hơn chiều rộng khối bên ngoài
  text-overflow: ellipsis; //thêm 3 dấu chấm ở cuối
  -webkit-line-clamp: 1; // số dòng muốn hiển thị
  -webkit-box-orient: vertical;
  display: -webkit-box;
  padding-left: 1rem;
`;

export const PopoverFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;
export const MoreProduct = styled.div`
  flex-grow: 1;
  text-transform: capitalize;
`;
export const ButtonShowCart = styled(ButtonLink)`
  height: 3.5rem;
  padding: 1px 15px;
  text-transform: capitalize;
  flex-shrink: 0;
`;
