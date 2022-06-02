import styled from 'styled-components'
import { Button } from '../../assets/styles/utils'
import { NavRightNoti } from '../../components/Popover/Popover.style'
import { RatingStarPercent, RatingStarWrapper } from '../../components/ProductRating/ProductRating.style'

export const ProductBriefing = styled.div`
  display: flex;
  background: #fff;
`
export const ProductImages = styled.div`
  width: 450px;
  padding: 1.5rem;
`
export const ProductImageActive = styled.div`
  height: 450px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`
export const ProductImageSlider = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`
export const ProductIconButton = styled.button`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  border: none;
  background-color: rgba(0, 0, 0, .2);
  svg {
    width: 2rem;
    height: 2rem;
    fill: currentColor;
  }
`
export const ProductIconButtonPrev = styled(ProductIconButton)`
  left: 0;
`
export const ProductIconButtonNext = styled(ProductIconButton)`
  right: 0;
`
export const ProductImg = styled.div`
  width: 92px;
  height: 92px;
  flex-shrink: 0;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    max-width: 100%;
    max-height: 100%;
    border: 2px solid ${({active}) => active ? '#ee4d2d' : 'transparent'}
  }
`
export const ProductMeta = styled.div`
  flex: 1;
  padding: 1.5rem;

`
export const ProductMeta1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`
export const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`
export const ProductMetaItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-right: 1px solid rgba(0, 0, 0, .14);
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
    border-right: 0;
  }
`
export const ProductRating = styled(ProductMetaItem)`
  span {
    color: #ee4d2d;
    border-bottom: 1px solid #ee4d2d;
    font-size: 1.6rem;
    margin-right: 0.5rem;
  }
  ${RatingStarWrapper} svg{
    width: 1.4rem;
    height: 1.4rem;
  }
  ${RatingStarPercent} svg {
    color: #ee4d2d;
    fill: #ee4d2d;
  }
`
export const ProductSold = styled(ProductMetaItem)`
  span:first-child {
    font-size: 1.6rem;
    color: #222;
    margin-right: 5px;
    padding-bottom: 1px;
  }
  span:last-child {
    font-size: 1.4rem;
    color: #767676;
    text-transform: capitalize;
  }
`
export const ProductPrice = styled.div`
  padding: 1.5rem 2rem;
  background: #fafafa;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`
export const ProductPriceOriginal = styled.div`
  font-size: 1.6rem;
  text-decoration: line-through;
  color: #929292;
  margin-right: 10px;
`
export const ProductPriceSale = styled.div`
  display: flex;
  line-height: 1;
  font-size: 3rem;
  font-weight: 500;
  color: #ee4d2d;
  span {
    /* text-align: start; */
    align-content: flex-start;
    font-size: 2rem;
    text-decoration: underline;
  }
`
export const ProductPriceSalePercent = styled.div`
  margin-left: 15px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #ee4d2d;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 2px 4px;
`
// Product Discount Code
export const ProductDiscountCode = styled.div`
  position: relative;
  color: #222;
  margin-bottom: 25px;
`
export const ProductDiscount = styled.div`
  /* position: relative; */
  display: flex;
`
export const ProductDiccountTitle = styled.div`
  font-size: 1.4rem;
  color: #757575;
  width: 110px;
  text-transform: capitalize;
`
export const ProductDiscountVoucher = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProductDiscountVoucherItem = styled.div`
  font-size: 1.6rem;
  padding: 2px 5px;
  background-color: #fbebed;
  border-radius: 3px;
  color: #f27e69;
  font-weight: 600;
  pointer-events: none;
  &:not(:first-child) {
    margin-left: 5px;
  }
`
export const ProductPopover = styled(NavRightNoti)`
  /* left: -100%; */
  /* top: -20px; */
  /* box-shadow: none; */
  width: 430px;
  padding: 2rem;
`
export const ProductPopovertitle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 3px;
`
export const ProductPopoverDes = styled.p`
  font-size: 1.4rem;
  color: #7a838d;
`
export const ProductPopoverWrap = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`
export const ProductPopoverItem = styled.div`
  width: 100%;
  box-shadow: 1px 1px 14px 2px rgba(0,0,0,0.32);
  display: flex;
  justify-content: flex-start;
  border: 1px solid #eee;
  margin-top: 10px;
`
export const ProductPopoverImg = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-right: 1px dotted #333;
  img {
    padding: 5px;
    border-radius: 100%;
    border: 1px dotted #333;
    width: 70px;
    height: 70%;
    object-fit: cover;
  }
`
export const ProductPopoverContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
export const ProductPopoverName = styled.div`
  width: 65%;
  p {
    font-size: 1.5rem;
    color: #333;
    font-weight: 500;
  }
  span {
    font-size: 1.4rem;
    color: #ee4d2d;
    font-weight: 400;
  }
`
export const ProductPopoverButton = styled.div`
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  background: #ee4d2d;
  cursor: pointer;
`
// Product quantity
export const ProductBuyQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`
export const ProductBuyQuantityTitle = styled.div`
  color: #757575;
  text-transform: capitalize;
  flex: 0 0 110px;
  font-size: 1.4rem;
`
export const ProductBuyQuantityControler = styled.div`
  margin-right: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProductBuyQuantityNum = styled.div`
  margin-left: 1.5rem;
`
export const ProductButtons = styled(Button)`
  background-color: #ffeee8;
  color: #ee4d2d;
  border: 1px solid #ee4d2d;
  margin-right: 1.5rem;
  padding: 0 1.2rem;
  height: 48px;
  font-size: 14px;
  svg {
    color: #ee4d2d;
    stroke: #ee4d2d;
    margin-right: 10px;
    width: 2rem;
    height: 2rem;
  }
  &:hover {
    background-color: rgba(255, 87, 34, .15);
  }
`
export const ProductContent = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 0.2rem;
  overflow: hidden;
  background-color: #fff;
  margin-top: 3rem;
  padding: 2rem;
`
export const ProductContentHeading = styled.div`
  background: rgba(0, 0, 0, .02);
  color: rgba(0, 0, 0, .87);
  font-size: 1.8rem;
  padding: 1.4rem;
  text-transform: capitalize;
`
export const ProductContentDetail = styled.div`
  margin: 3rem 1.5rem 1.5rem;
  font-size: 1.4rem;
  line-height: 2.2;
`