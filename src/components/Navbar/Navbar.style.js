import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
// NavLeft
export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const NavItem = styled.div`
  a {
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    padding: 0.25rem;
    position: relative;
    margin-left: 15px;
  }
  &:not(:first-child) {
    a::after {
      content: "";
      position: absolute;
      height: 1.2rem;
      width: 0;
      border-left: 1px solid hsla(0, 0%, 100%, 0.22);
      border-right: 1px solid hsla(0, 0%, 100%, 0.22);
      left: -10px;
      /* margin-left: 15px; */
      transform: translateY(50% - 15px);
    }
  }
  &:nth-child(2) {
    position: relative;
    display: flex;
  }
`;
export const NavDrawer = styled.div`
  position: absolute;
  border-radius: 5px;
  top: 100%;
  z-index: 400;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;
  transform-origin: top left;
  box-shadow: 0px 2px 14px 2px rgba(0, 0, 0, 0.62);
  ${NavItem}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
export const NavLeftHover = styled.div`
  padding: 5px;
  background: #fff;
  width: 150px;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;
export const NavLeftHoverContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  div {
    width: 50%;
    height: 25px;
  }
  div:nth-child(2) {
    padding-left: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
// NavRight

export const NavRight = styled.div`
  padding-right: 15px;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavLinkItem = styled.li`
  position: relative;
  margin-left: 10px;
  a {
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 14px;
    svg {
      margin-right: 5px;
    }
  }
  img {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    object-fit: cover;
    margin-right: 5px;
  }
`;
export const NavRightDiv = styled.div`
  a {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 10px;
      top: 100%;
      left: 0;
      background-color: transparent;
    }
    > span {
      position: absolute;
      top: -10px;
      left: 11px; 
      background-color: #fff;
      color: #ee4d2d;
      padding: 3px 5px;
      border-radius: 100%;
      font-size: 11px;
    }
  }
  div {
    /* position: relative; */
  }
`;

export const PopAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
    visibility: hidden;
  }
  100% {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
`
export const NavRightNoti = styled.div`
  /* display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column; */
  border-radius: 10px;
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 350px;
  background-color: #fff;
  transform-origin: top right;
  z-index: 400;
  /* transform: scale(0);
  opacity: 0;
  visibility: hidden; */
  transition: 0.25s ease-in-out;
  box-shadow: 0px 2px 14px 2px rgba(0, 0, 0, 0.62);
  animation: ${PopAnimation} .25s ease-in-out;
  &::before {
    position: absolute;
    content: "";
    top: -20px;
    right: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
  /* ${NavLinkItem}:hover & {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  } */
`;
export const UserButton = styled.div`
  cursor: pointer;
`
export const NavNotiContentChild = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  text-align: center;
  img {
    width: 250px;
    height: 250px;
  }
`
export const NavBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-top: 1px solid #eee;
  margin-top: 10px;
  a {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    text-align: center;
    /* border: 1px solid #555; */
    color: #333;
    font-size: 17px;
    font-weight: 400;
    transition: .25s ease-in;
  }
  a:hover {
    color: red;
  }
`
export const NavNotiContent = styled.div`
  h3 {
    padding: 10px;
    color: #d3d0d0;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid #eee;
  }
`;
export const NavNotiUser = styled.div`
  /* width: 100px; */
  text-align: center;
  a {
    display: block;
    padding-bottom: 10px;
    color: #333;
  }
`
export const NavBtnGroup = styled.div`
  /* color: #333; */
  a {
    color: #333;
  }
`
export const NavNotiItem = styled.div`
  padding: 10px;
  display: flex;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  background-color: #fff2ee;
  /* ${props => props.hover && props.hover === true ? `background-color: #fff` : `background-color: #fff2ee`}; */
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  &:hover {
    ${props => props.hover && props.hover === true ? `background-color: #fff2ee` : `background-color: #fff`};
  }
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;
export const NavNotiText = styled.div`
  margin-left: 10px;
  p {
    font-size: 1.3rem;
    color: #999;
  }
`;
