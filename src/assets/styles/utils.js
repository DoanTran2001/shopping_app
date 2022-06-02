
// Styled-components common
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background: red;
  border-radius: 2px;
  border: 0;
  color: #fff;
  padding: 1px 6px;
  transition: .25s background ease;
  &:hover {
    background: #ee4d2d;
  }
`
export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background: #ee4d2d;
  border-radius: 2px;
  border: 0;
  color: #fff;
  padding: 1px 6px;
  transition: .25s background ease;
  &:hover {
    background: #f05d40;
  }
`