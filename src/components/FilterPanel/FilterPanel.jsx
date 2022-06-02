import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { path } from "../../constants/path";
import RatingStars from "../RatingStars/RatingStars";
import PropTypes from "prop-types";
import qs from "query-string";
import * as S from "./FilterPanel.style";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";

function FilterPanel({ categories, filters }) {
  const history = useHistory(); // vd: {length: 21, action: 'POP', location: {…}, createHref: ƒ, push: ƒ, …}
  // Xử lý Form minPrice và maxPrice
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    clearErrors,
    reset,
    setValue,
  } = useForm({
    // Đặt giá trị mặc định của form.
    defaultValues: {
      minPrice: filters.minPrice || "", // Nếu có minPrice thì lấy giá trị đó, nếu k có thì ""
      maxPrice: filters.maxPrice || "", // Nếu có maxPrice thì lấy giá trị đó, nếu k có thì ""
    },
    reValidateMode: "onSubmit",
  });
  // console.log(useForm()); // {control: {…}, trigger: ƒ, register: ƒ, handleSubmit: ƒ, watch: ƒ, …}
  // Để khi load lại trang thì vẫn còn price trong form
  useEffect(() => {
    setValue("minPrice", filters.minPrice || "");
    setValue("maxPrice", filters.maxPrice || "");
  }, [setValue, filters]);

  const searchPrice = (data) => {
    // console.log(data); // Lấy dữ liệu trong form. vd: {minPrice: '10000', maxPrice: '100000'}
    const { minPrice, maxPrice } = data;
    if (minPrice !== "" || maxPrice !== "") {
      let _filters = filters;
      if (minPrice !== "") {
        _filters = { ..._filters, minPrice };
      } else {
        delete _filters.minPrice;
      }
      if (maxPrice !== "") {
        _filters = { ..._filters, maxPrice };
      } else {
        delete _filters.maxPrice;
      }
      history.push(path.home + `?${qs.stringify(_filters)}`);
    }
  };
  const clearAll = () => {
    reset(); // Reset form 
    history.push({ pathname: path.home }); // Trở về trang Home
  };
  const validPrice = () => {
    const minPrice = getValues("minPrice"); // Lấy giá min trong Form
    const maxPrice = getValues("maxPrice"); // lấy giá max tromg Form
    const message = "Vui lòng điền khoảng giá phù hợp!";
    if (minPrice !== "" && maxPrice !== "") {
      return Number(maxPrice) >= Number(minPrice) || message;
    }
    return minPrice !== "" || maxPrice !== "" || message;
  };



  return (
    <div>
      <S.CategoryTitleLink to={path.home}>
        <svg
          viewBox="0 0 12 10"
          className="shopee-svg-icon shopee-category-list__header-icon icon-all-cate"
        >
          <g fillRule="evenodd" stroke="none" strokeWidth={1}>
            <g transform="translate(-373 -208)">
              <g transform="translate(155 191)">
                <g transform="translate(218 17)">
                  <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                  <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                  <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục
      </S.CategoryTitleLink>
      {/* +++++++++++++++++++++++ Categories +++++++++++++++++++++++++ */}

      <S.CategoryList>
        {categories.map((category) => (
          <S.CategoryItem key={category._id}>
            <NavLink
              to={path.home + `?category=${category._id}`} // VD khi click vào áo thun thì nó sẽ dẫn đến trang: http://localhost:3000/?category=60aba4e24efcc70f8892e1c6
              isActive={(match, location) => {
                // vd: match: {path: '\\/', url: '/', isExact: true, params: {…}}
                // vd: location: {pathname: '/', search: '?category=60aba4e24efcc70f8892e1c6', hash: '', state: null, key: '21ss6k'}
                
                // Nếu mà k có match(không đúng route của nó) thì k active(return false)
                if (!match) {
                  return false;
                }
                // Lấy category ở trên thanh URL và chuyển về javascript
                const query = qs.parse(location.search); // vd: {category: '60aba4e24efcc70f8892e1c6'}
                return query.category === category._id; // Nếu category ở trên thanh URL mà bằng category._id thì sẽ trả về true(tức là sẽ active category đó)
              }}
            >
              {category.name}
            </NavLink>
          </S.CategoryItem>
        ))}
      </S.CategoryList>
      <S.CategoryTitle>
        <svg
          enableBackground="new 0 0 15 15"
          viewBox="0 0 15 15"
          x={0}
          y={0}
          className="shopee-svg-icon "
        >
          <g>
            <polyline
              fill="none"
              points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
            />
          </g>
        </svg>
        Bộ lọc tìm kiếm
      </S.CategoryTitle>
      {/* Filter Price */}
      <S.FilterGroup>
        <S.FilterGroupHeader>Khoảng giá</S.FilterGroupHeader>
        <S.PriceRange>
          <S.PriceRangeGroup>
            <Controller
              name="minPrice"
              control={control}
              rules={{
                validate: {
                  validPrice,
                },
              }}
              render={({ field }) => (
                <S.PriceRangeInput
                  placeholder="Từ"
                  onChange={(value) => {
                    clearErrors();
                    field.onChange(value);
                  }}
                  value={getValues("minPrice")}
                />
              )}
            />
            <S.PriceRangeLine />
            {/* <S.PriceRangeInput placeholder="Đến" /> */}
            <Controller
              name="maxPrice"
              control={control}
              rules={{
                validate: {
                  validPrice,
                },
              }}
              render={({ field }) => (
                // Render từ BaseInputNumber
                <S.PriceRangeInput
                  placeholder="Đến"
                  onChange={(value) => {
                    clearErrors();
                    field.onChange(value);
                  }}
                  value={getValues("maxPrice")}
                />
              )}
            />
          </S.PriceRangeGroup>
          {Object.values(errors).length !== 0 && (
            <S.PriceErrorMessage>
              Vui lòng điền khoảng giá phù hợp
            </S.PriceErrorMessage>
          )}
          <S.PriceRangeButton onClick={handleSubmit(searchPrice)}>
            Áp dụng
          </S.PriceRangeButton>
        </S.PriceRange>
      </S.FilterGroup>
      {/* ================= Lọc theo số star ============================ */}
      <S.FilterGroup>
        <S.FilterGroupHeader>Đánh giá</S.FilterGroupHeader>
        <RatingStars filters={filters}/>
      </S.FilterGroup>
      <S.RemoveFilterButton onClick={clearAll}>Xoá tất cả</S.RemoveFilterButton>
    </div>
  );
}


//Component này nhận vào 2 props: categories là mảng các categories đc trả về từ API và filters là 1 object chứa các phần lựa chọn lọc đc chọn ở trên giao diện
FilterPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
};

export default FilterPanel;
