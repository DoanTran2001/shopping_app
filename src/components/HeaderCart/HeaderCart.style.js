import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from '../../assets/styles/utils'


export const Header = styled.header`
  margin-bottom: 3rem;
  width: 100%;
  min-height: max-content;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`
export const Navbar = styled.div`
  /* background-color: #ee4d2d; */
  background: linear-gradient(-180deg, #f53d2d, #f63);
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
`
export const Left = styled.div`
  display: flex;
  align-items: center;
`
export const Logo = styled(Link)`
  padding-left: 1.8rem;
  flex-shrink: 1;
  svg {
    width: 13rem;
    height: 15rem;
    fill: #ee4d2d;
  }
`
export const Line = styled.div`
  width: 2px;
  height: 40px;
  background-color: red;
  opacity: 0.5;
  margin: 0 15px;
`
export const PageName = styled.div`
  font-size: 2rem;
  line-height: 1;
  text-align: center;
  /* height: max-content; */
`
export const Right = styled.div`
  
`
export const Form = styled.form`
  display: flex;
  height: 3.6rem;

`
export const Input = styled.input`
  padding: 5px;
  border: 2px solid #ee4d2d;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 300px;
`
export const ButtonSearch = styled(Button)`
  height: 100%;
  width: 60px;
  border: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

`