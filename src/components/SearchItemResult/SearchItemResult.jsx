import React from "react";
import Pagination from "../Pagination/Pagination";
import ProductItem from "../ProductItem/ProductItem";
import * as S from "./SearchItemResult.style";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { path } from "../../constants/path";
import qs from "query-string";
import classNames from "classnames";

SearchItemResult.propTypes = {
  // hình dạng
  products: PropTypes.shape({
    products: PropTypes.array,
    pagination: PropTypes.object,
  }),
  filters: PropTypes.object,
};

function SearchItemResult({ products, filters }) {
  // Lấy products trong prop products
  const { products: productList, pagination } = products;
  // console.log(products);
  const history = useHistory();
  // Filters phần sortBy: function này nhận vào 2 tham số là sortBy(view || createdAt || sold || price), order(asc, desc)
  const sortBy = (sortBy, order) => {
    const _filters = { ...filters, sortBy }; // Thêm sortBy vào
    // console.log(_filters);
    // Nếu có order thì thêm order, ngược lại thì xóa order
    if (order) { 
      _filters.order = order;
    } else {
      delete _filters.order;
    }
    history.push(path.home + `?${qs.stringify(_filters)}`); // push lên URL
  };
  // Active class phần sortBy
  const handleActiveOptionSort = (value) => {
    return classNames({ active: value === filters.sortBy });
  };
  const handleSortByPriceValue = () => {
    let value = `${filters.sortBy}:${filters.order}`;
    if (value !== "price:asc" && value !== "price:desc") {
      value = "";
    }
    return value;
  };
  // Khi click vào button <
  const goToPrev = () => {
    // Nếu page không phải là page 1 thì sửa page trừ đi 1 và cập nhật lên URL
    if(pagination.page !== 1) {
      const _filters = {...filters, page: pagination.page - 1};
      history.push(path.home + `?${qs.stringify(_filters)}`)
    }
  }
  const goToNext = () => {
    // Nếu page không phải là page cuối thì sửa page công cho 1 và cập nhật lên URL
    if(pagination.page !== pagination.page_size) {
      const _filters = {...filters, page: pagination.page + 1};
      history.push(path.home + `?${qs.stringify(_filters)}`)
    }
  }
  return (
    <div>
      {/* ===========================  SortBar ======================================== */}
      <S.SortBar>
        <S.SortBarLabel>Sắp xếp theo</S.SortBarLabel>
        <S.SortByOptions>
          <S.SortByOptionsItem
            className={handleActiveOptionSort("view")}
            onClick={() => sortBy("view")}
          >
            Phổ biến
          </S.SortByOptionsItem>
          <S.SortByOptionsItem
            className={handleActiveOptionSort("createdAt")}
            onClick={() => sortBy("createdAt")}
          >
            Mới nhất
          </S.SortByOptionsItem>
          <S.SortByOptionsItem
            className={handleActiveOptionSort("sold")}
            onClick={() => sortBy("sold")}
          >
            Bán chạy
          </S.SortByOptionsItem>
          <S.SortByPrice
            onChange={(e) => sortBy(...e.target.value.split(":"))}
            className={handleActiveOptionSort("price")}
            value={handleSortByPriceValue()}
          >
            <option disabled value="">
              Giá
            </option>
            <option value="price:asc">Giá: Thấp đến cao</option>
            <option value="price:desc">Giá: Cao đến thấp</option>
          </S.SortByPrice>
        </S.SortByOptions>
        <S.MiniPageController>
          <S.MiniPageControllerState>
            <S.MiniPageControllerCurrentState>
              {pagination.page}
            </S.MiniPageControllerCurrentState>
            /<S.MiniPageControllerTotalState>{pagination.page_size}</S.MiniPageControllerTotalState>
          </S.MiniPageControllerState>
          <S.ButtonControllerPrev onClick={goToPrev} disabled={pagination.page === 1}>
            <svg
              viewBox="0 0 7 11"
              className="shopee-svg-icon icon-arrow-left-small"
            >
              <path
                d="M4.694078 9.8185598L.2870824 5.4331785c-.1957415-.1947815-.1965198-.511363-.0017382-.7071046a.50867033.50867033 0 0 1 .000868-.0008702L4.7381375.2732784 4.73885.273991c.1411545-.127878.3284279-.205779.5338961-.205779.4393237 0 .7954659.3561422.7954659.7954659 0 .2054682-.077901.3927416-.205779.5338961l.0006632.0006632-.0226101.0226101a.80174653.80174653 0 0 1-.0105706.0105706L2.4680138 4.7933195c-.1562097.1562097-.1562097.4094757 0 .5656855a.45579485.45579485 0 0 0 .0006962.0006944l3.3930018 3.3763607-.0009482.0009529c.128869.1413647.2074484.3293723.2074484.5357331 0 .4393237-.3561422.7954659-.7954659.7954659-.2049545 0-.391805-.077512-.5328365-.2048207l-.0003877.0003896-.0097205-.0096728a.80042023.80042023 0 0 1-.0357234-.0355483z"
                fillRule="nonzero"
              />
            </svg>
          </S.ButtonControllerPrev>
          <S.ButtonControllerNext onClick={goToNext} disabled={pagination.page === pagination.page_size}>
            <svg
              viewBox="0 0 7 11"
              className="shopee-svg-icon icon-arrow-right-small"
            >
              <path
                d="M2.305922 9.81856l4.4069956-4.385381c.1957415-.194782.1965198-.511364.0017382-.707105a.26384055.26384055 0 0 0-.000868-.00087L2.2618625.273278 2.26115.273991C2.1199955.146113 1.9327221.068212 1.7272539.068212c-.4393237 0-.7954659.356142-.7954659.795466 0 .205468.077901.392741.205779.533896l-.0006632.000663.0226101.02261c.0034906.003557.0070143.00708.0105706.010571L4.5319862 4.79332c.1562097.156209.1562097.409475 0 .565685-.0002318.000232-.0004639.000463-.0006962.000694L1.1382882 8.73606l.0009482.000953c-.128869.141365-.2074484.329372-.2074484.535733 0 .439324.3561422.795466.7954659.795466.2049545 0 .391805-.077512.5328365-.204821l.0003877.00039.0097205-.009673c.012278-.011471.0241922-.023327.0357234-.035548z"
                fillRule="nonzero"
              />
            </svg>
          </S.ButtonControllerNext>
        </S.MiniPageController>
      </S.SortBar>
      {/* ========================= Product List  ======================*/}
      {productList && (
        <S.ProductList>
          {/* <ProductItem/> */}
          {productList.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </S.ProductList>
      )}
      {/* ==================== Pagination ============================ */}
      <Pagination pagination={pagination} filters={filters}/>
    </div>
  );
}
export default SearchItemResult;
