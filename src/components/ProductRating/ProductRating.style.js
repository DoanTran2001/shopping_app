import styled from "styled-components";

export const RatingStar = styled.div`
  display: flex;
`;
export const RatingStarWrapper = styled.div`
  position: relative;
  margin-right: 1px;
  // Phần màu vàng
  svg {
    
    width: 1rem;
    height: 1rem;
    fill: currentColor;
    position: relative;
    display: inline-block;
  }
  // Phần màu xám, số % còn lại
  > svg {
    color: #d5d5d5;
    display: block;
  }
`;
export const RatingStarPercent = styled.div`
  position: absolute;
  overflow: hidden;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  svg {
    color: #ffce3d;
    fill: #ffce3d;
    display: block;
    position: absolute;
    left: 0;
  }
`;
