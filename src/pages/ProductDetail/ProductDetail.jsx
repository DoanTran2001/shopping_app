import { unwrapResult } from "@reduxjs/toolkit";
import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Popover from "../../components/Popover/Popover";
import ProductQuantityControler from "../../components/ProductQuantityControler/ProductQuantityControler";
import ProductRating from "../../components/ProductRating/ProductRating";
import { voucherList } from "../../data";
import usePop from "../../hooks/usePop";
import { formatMoney, getIdFromNameId, rateSale } from "../../utils/helper";
import { addToCart, getProductDetail } from "./ProductDetail.slice";
import DOMPurify from "dompurify"; // DOMPurify is a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.
import { toast } from "react-toastify"; // allows you to add notifications to your app with ease
import * as S from "./ProductDetail.style";
import { getCartPurchases } from "../Cart/Cart.Slice";

function ProductDetail() {
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { activePop, showPop, hidePop } = usePop();
  // console.log(productId);
  const [currentImage, setCurrentImage] = useState({}); // image current active
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5]); // Hiện 5 ảnh 1 lần
  const [quantity, setQuantity] = useState(1); // state quantity
  // console.log(currentImages);
  const currentImages = useMemo(() => {
    if (product) {
      return product.images.slice(...currentIndexImages);
    }
    return [];
  }, [product, currentIndexImages]);
  // console.log(currentImages);
  const chooseCurrent = (image) => setCurrentImage(image);
  const choosePrev = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages([
        currentIndexImages[0] - 1,
        currentIndexImages[1] - 1,
      ]);
    }
  };
  const chooseNext = () => {
    if (currentIndexImages[1] < product.images.length) {
      setCurrentIndexImages([
        currentIndexImages[0] + 1,
        currentIndexImages[1] + 1,
      ]);
    }
  };
  // ************** Handle active vouchers ********************
  const [vouchers, setVouchers] = useState(voucherList); // Mảng voucherList
  const saveVoucher = (id) => {
    const newVouchers = vouchers.map((voucher) => {
      return voucher.id === id ? { ...voucher, isActive: true } : voucher;
    });
    setVouchers(newVouchers);
  };

  // +++++++++++++++ HandleChangeQuantity ++++++++++++++++++
  const handleChangeQuantity = (value) => setQuantity(value);
  // ++++++++++++++++ HandleAddToCart +++++++++++++++++++++
  const handleAddToCart = async () => {
    const body = {
      product_id: product._id, // Lấy ID sản phẩm
      buy_count: quantity, // Lấy số lượng sp
    };
    const res = await dispatch(addToCart(body)).then(unwrapResult); // Thêm sp vào giỏ hàng
    await dispatch(getCartPurchases()).then(unwrapResult); // Lấy ra ds sp trong giỏ hàng
    toast.success(res.message, {
      position: "top-right",
      autoClose: 3000,
      
    });
  };

  // ++++++++++++++ Handle Call API product detail ++++++++++++++++
  useEffect(() => {
    const realId = getIdFromNameId(productId); // Lấy ID
    // Lấy thông tin product thông qua API(truyền vào id của product đó)
    dispatch(getProductDetail(realId))
      .then(unwrapResult)
      .then((res) => { 
        // Biến thành mảng các object image chứa id và url
        res.data.images = res.data.images.map((image, index) => {
          return {
            url: image,
            id: index,
          };
        });
        // Lúc đầu sẽ active image đầu tiên của slider
        setCurrentImage(res.data.images[0]);
        setProduct(res.data);
        // console.log(res);
      });
  }, [productId, dispatch]);
  return (
    <div>
      {product && (
        <div className="container">
          <S.ProductBriefing>
            <S.ProductImages>
              <S.ProductImageActive>
                <img src={currentImage.url} alt="" />
              </S.ProductImageActive>
              <S.ProductImageSlider>
                <S.ProductIconButtonPrev onClick={choosePrev}>
                  <svg
                    enableBackground="new 0 0 13 20"
                    viewBox="0 0 13 20"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-left-bold"
                  >
                    <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                  </svg>
                </S.ProductIconButtonPrev>
                {currentImages.map((image) => (
                  <S.ProductImg
                    key={image.id}
                    onMouseEnter={() => chooseCurrent(image)}
                    active={currentImage.id === image.id}
                  >
                    <img src={image.url} alt="" />
                  </S.ProductImg>
                ))}
                <S.ProductIconButtonNext onClick={chooseNext}>
                  <svg
                    enableBackground="new 0 0 13 21"
                    viewBox="0 0 13 21"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-right-bold"
                  >
                    <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                  </svg>
                </S.ProductIconButtonNext>
              </S.ProductImageSlider>
            </S.ProductImages>
            <S.ProductMeta>
              <S.ProductTitle>{product.name}</S.ProductTitle>
              <S.ProductMeta1>
                <S.ProductRating>
                  <span>{product.rating}</span>
                  <ProductRating rating={product.rating} />
                </S.ProductRating>
                <S.ProductSold>
                  <span>{formatMoney(product.sold)}</span>
                  <span>Đã bán</span>
                </S.ProductSold>
              </S.ProductMeta1>
              <S.ProductPrice>
                <S.ProductPriceOriginal>
                  đ{formatMoney(product.price_before_discount)}
                </S.ProductPriceOriginal>
                <S.ProductPriceSale>
                  <span>đ</span>
                  {formatMoney(product.price)}
                </S.ProductPriceSale>
                <S.ProductPriceSalePercent>
                  {rateSale(product.price_before_discount, product.price)} giảm
                </S.ProductPriceSalePercent>
              </S.ProductPrice>
              {/* ProductDiscountCode */}
              <S.ProductDiscountCode>
                <S.ProductDiscount>
                  <S.ProductDiccountTitle>
                    Mã giảm giá của shop
                  </S.ProductDiccountTitle>
                  <S.ProductDiscountVoucher
                    onMouseEnter={showPop}
                    onMouseLeave={hidePop}
                  >
                    <S.ProductDiscountVoucherItem>
                      50% Giảm
                    </S.ProductDiscountVoucherItem>
                    <S.ProductDiscountVoucherItem>
                      10% Giảm
                    </S.ProductDiscountVoucherItem>
                    <S.ProductDiscountVoucherItem>
                      50% Giảm
                    </S.ProductDiscountVoucherItem>
                    <Popover active={activePop}>
                      <S.ProductPopover>
                        <S.ProductPopovertitle>
                          Mã giảm giá của shop
                        </S.ProductPopovertitle>
                        <S.ProductPopoverDes>
                          Tiết kiệm hơn khi áp dụng mã giảm giá của Shop. Liên
                          hệ với Shop nếu gặp trục trặc về mã giảm giá do Shop
                          tự tạo.
                        </S.ProductPopoverDes>
                        <S.ProductPopoverWrap>
                          {vouchers.map((voucher) => (
                            <S.ProductPopoverItem key={voucher.id}>
                              <S.ProductPopoverImg>
                                <img src={voucher.img} alt="" />
                              </S.ProductPopoverImg>
                              <S.ProductPopoverContent>
                                <S.ProductPopoverName>
                                  <p>{voucher.title}</p>
                                  <span>{voucher.time}</span>
                                </S.ProductPopoverName>
                                <S.ProductPopoverButton
                                  onClick={() => saveVoucher(voucher.id)}
                                >
                                  {voucher.isActive ? "Dùng ngay" : "Lưu"}
                                </S.ProductPopoverButton>
                              </S.ProductPopoverContent>
                            </S.ProductPopoverItem>
                          ))}
                        </S.ProductPopoverWrap>
                      </S.ProductPopover>
                    </Popover>
                  </S.ProductDiscountVoucher>
                </S.ProductDiscount>
              </S.ProductDiscountCode>
              {/* Product Buy Quantity */}
              <S.ProductBuyQuantity>
                <S.ProductBuyQuantityTitle>Số lượng</S.ProductBuyQuantityTitle>
                <S.ProductBuyQuantityControler>
                  <ProductQuantityControler
                    value={quantity}
                    max={product.quantity}
                    onChange={handleChangeQuantity}
                  />
                  <S.ProductBuyQuantityNum>
                    {product.quantity} sản phẩm có sẵn
                  </S.ProductBuyQuantityNum>
                </S.ProductBuyQuantityControler>
              </S.ProductBuyQuantity>
              <S.ProductButtons onClick={handleAddToCart}>
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x={0}
                  y={0}
                  className="shopee-svg-icon _32Ho0Q icon-add-to-cart"
                >
                  <g>
                    <g>
                      <polyline
                        fill="none"
                        points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                      />
                      <circle cx={6} cy="13.5" r={1} stroke="none" />
                      <circle cx="11.5" cy="13.5" r={1} stroke="none" />
                    </g>
                    <line
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      x1="7.5"
                      x2="10.5"
                      y1={7}
                      y2={7}
                    />
                    <line
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      x1={9}
                      x2={9}
                      y1="8.5"
                      y2="5.5"
                    />
                  </g>
                </svg>
                Thêm vào giỏ hàng
              </S.ProductButtons>
            </S.ProductMeta>
          </S.ProductBriefing>
          {/* Content */}
          <S.ProductContent>
            <S.ProductContentHeading>Mô tả sản phẩm</S.ProductContentHeading>
            <S.ProductContentDetail
              dangerouslySetInnerHTML={{
                // DOMPurify: lọc sạch html
                __html: DOMPurify.sanitize(product.description),
              }}
            />
            {/* {} */}
          </S.ProductContent>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
