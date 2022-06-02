import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createNextState} from '@reduxjs/toolkit'
import CheckBox from "../../components/CheckBox/CheckBox";
import ProductQuantityControler from "../../components/ProductQuantityControler/ProductQuantityControler";
import { formatMoney } from "../../utils/helper";
import * as S from "./Cart.style";

function Cart() {
  // Lấy Cart từ Redux
const purchases = useSelector((state) => state.cart.purchases);
const [localPurchases, setLocalPurchases] = useState(() => 
  createNextState(purchases, draft => {
    draft.forEach(purchase => {
      purchase.disabled = false;
      purchase.checked = false
    })
  })
)
  useEffect(() => {
    setLocalPurchases(purchases, draft => {
      draft.forEach(purchase => (purchase.disabled = false))
    })
  }, [purchases])

  return (
    <div className="container">
      <div className="">
        <S.ProductHeader>
          <S.ProductHeaderCheckBox>
            <CheckBox />
          </S.ProductHeaderCheckBox>
          <S.ProductHeaderName>Sản phẩm</S.ProductHeaderName>
          <S.ProductHeaderUnitPrice>Đơn giá</S.ProductHeaderUnitPrice>
          <S.ProductHeaderQuantity>Số lượng</S.ProductHeaderQuantity>
          <S.ProductHeaderTotalPrice>Số tiền</S.ProductHeaderTotalPrice>
          <S.ProductHeaderAction>Thao tác</S.ProductHeaderAction>
        </S.ProductHeader>

        <S.ProductSession>
          {/* purchases */}
          {localPurchases.map((item, index) => (
            <S.CartItem key={item._id}>
              <S.CartItemCheckBox>
                <CheckBox />
              </S.CartItemCheckBox>
              <S.CartItemOverview>
                <S.CartItemOverviewImage to="">
                  <img
                    src={item.product.image}
                    alt=""
                  />
                </S.CartItemOverviewImage>
                <S.CartItemOverviewNameWrapper>
                  <S.CartItemOverviewName to="">
                    {item.product.name}
                  </S.CartItemOverviewName>
                </S.CartItemOverviewNameWrapper>
              </S.CartItemOverview>
              <S.CartItemUnitPrice>
                <span>đ {formatMoney(item.product.price_before_discount)}</span>
                <span>đ {formatMoney(item.product.price)}</span>
              </S.CartItemUnitPrice>
              <S.CartItemQuantity>
                <ProductQuantityControler 
                  max={item.product.quantity} 
                  value = {item.buy_count}
                  disabled={item.disabled}
                />
              </S.CartItemQuantity>
              <S.CartItemTotalPrice>
                <span>đ {formatMoney(item.product.price * item.buy_count)}</span>
              </S.CartItemTotalPrice>
              <S.CartItemAction>
                <S.CartItemActionButton>Xóa</S.CartItemActionButton>
              </S.CartItemAction>
            </S.CartItem>
          ))}
        </S.ProductSession>
      </div>
      <S.CartFooter>
        <S.CartFooterCheckBox>
          <CheckBox />
        </S.CartFooterCheckBox>
        <S.CartFooterButton>Chọn tất cả ({purchases.length})</S.CartFooterButton>
        <S.CartFooterButton>Xóa</S.CartFooterButton>
        <S.CartFooterSpaceBetween></S.CartFooterSpaceBetween>
        <S.CartFooterPrice>
          <S.CartFooterPriceTop>
            <div className="">Tổng thanh toán: </div>
            <div className="">1000</div>
          </S.CartFooterPriceTop>
          <S.CartFooterPriceBottom>
            <div>Tiết kiệm: </div>
            <div>1000</div>
          </S.CartFooterPriceBottom>
        </S.CartFooterPrice>

        <S.CartFooterCheckout>Mua Hàng</S.CartFooterCheckout>
      </S.CartFooter>
    </div>
  );
}

export default Cart;
