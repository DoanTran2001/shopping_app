import styled from "styled-components";
import BaseInputNumber from "../BaseInputNumber/BaseInputNumber";

export const ProductQuantityControler = styled.div`
  display: flex;
  align-items: center;
`
export const ProductQuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, .09);
  border-radius: 2px;
  background: transparent;
  cursor: pointer;
  outline: none;
  svg {
    width: 10px;
    height: 10px;
  }
  &[disabled] {
    border-color: rgba(0, 0, 0, .09);
    color: #ccc;
    svg {
      fill: #ccc;
    }
  }
`
export const ProductQuantiTyInput = styled(BaseInputNumber)`
  width: 50px;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, .09);
  border-left: none;
  border-right: none;
  cursor: text;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding: 1px 2px;
  &[disabled] {
    border-color: rgba(0, 0, 0, .09);
    color: #ccc;
  }
`