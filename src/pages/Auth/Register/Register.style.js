import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../assets/styles/utils";

export const StyledRegister = styled.div`
  background-color: #ee4d2d;
`;
export const Container = styled.div`
  padding: 8rem;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
export const Banner = styled.div`
  flex: 0 0 60%;
  max-width: 50%;
  background-image: url(https://cf.shopee.vn/file/c6aa814bd4bb4b3d755b917cb6aaff0a);
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: center center; */
  /* height: 420px; */
`;
export const FormWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 50%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 14%);
  border-radius: 5px;
  background-color: #fff;
  padding: 3.5rem 3rem 5rem;
`;
export const FormTitle = styled.div`
  font-size: 20px;
  color: #222;
  text-transform: capitalize;
  width: 100%;
  margin-bottom: 3rem;
  text-decoration: underline;
`;
export const Form = styled.form`

`;
export const FormButton = styled.div`
  margin-bottom: 3rem;
  ${Button} {
    width: 100%;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
export const FormControl = styled.div`
  margin-bottom: 1.5rem;
`;
export const FormLine = styled.div`
  padding-bottom: 0.8rem;
  display: flex;
  align-items: center;
  span {
    color: #ccc;
    padding: 0 1rem;
    text-transform: uppercase;
    font-size: 13px;
  }
`
export const FormLineLeft = styled.div`
  height: 1px;
  background-color: #dbdbdb;
  width: 100%;
`
export const FormLineRight = styled.div`
  height: 1px;
  background-color: #dbdbdb;
  width: 100%;
`
export const FormButtonGroup = styled.div`
  display: flex;
  margin-left: -15px;
  ${Button} {
    width: calc(33.33% - 15px);
    margin-left: 15px;
    display: flex;
    justify-content: flex-start;
    background-color: #1877f2;
    svg {
      width: 18px;
      height: 18px;
      object-fit: cover;
      margin-right: 10px;
    }
  }
`
export const FormWord = styled.div`
  margin: 19px 0;
  text-align: center;
  padding: 0 27px;
  font-size: 12px;
  color: rgba(0,0,0,.87);
`
export const FormFooter = styled.div`
  text-align: center;
  span {
    margin-right: 1rem;
    color: rgba(0, 0, 0, .26);
  }
`;
