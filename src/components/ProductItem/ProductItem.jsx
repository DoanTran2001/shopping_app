import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../constants/path'
import { formatMoney, formatSold, generateNameId } from '../../utils/helper'
import ProductRating from '../ProductRating/ProductRating'
import * as S from './ProductItem.style'
import PropTypes from 'prop-types'

// Component hiển thị những thông tin cơ bản của sản phẩm ở trang Home

function ProductItem({product}) {
  return (
    <S.Product>
      <Link to={path.product + `/${generateNameId(product)}`}>
        <S.ProductItem>
          <S.ProductItemImage>
            <img src={product.image} alt={product.name}/>
          </S.ProductItemImage>
          <S.ProductItemInfo>
            <S.ProductItemTitle>
              {product.name}
            </S.ProductItemTitle>
            <S.ProductItemPrice>
              <S.ProductItemPriceOriginal>
                <span>đ</span>{formatMoney(product.price_before_discount)}
              </S.ProductItemPriceOriginal>
              <S.ProductItemPriceSale>đ{formatMoney(product.price)}</S.ProductItemPriceSale>
            </S.ProductItemPrice>
            <S.ProductItemMeta>
              <ProductRating rating={product.rating}/>
              <S.ProductItemSold>
                <span>{formatSold(product.sold)}</span>
                <span>Đã bán</span>
              </S.ProductItemSold>
            </S.ProductItemMeta>
          </S.ProductItemInfo>
        </S.ProductItem>
      </Link>
    </S.Product>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object
}

export default ProductItem
