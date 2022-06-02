import styled, {keyframes} from "styled-components";

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
  border-radius: 10px;
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  width: 350px;
  background-color: #fff;
  transform-origin: top right;
  z-index: 400;
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
  /*  */
`;
export const NavNotiContent = styled.div`
/* border-radius: 10px; */
  h3 {
    padding: 10px;
    color: #d3d0d0;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid #eee;
  }
`;