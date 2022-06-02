import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import SearchItemResult from "../../components/SearchItemResult/SearchItemResult";
import useQuery from "../../hooks/useQuery";
import { getCategories, getProducts } from "./Home.slice";
import * as S from "./Home.style";

/*
 - Page "Home" sẽ lưu trữ state "filters" và theo dõi sự thay đổi của URL. Nếu URL thay đổi thì cập nhật lại state "filters" và gọi lại API products
 - State "filters" sẽ được truyền xuống các component con như "SearchItemResult" hay "FilterPanner" để các component đó tiện việc xử lý điều hướng
 - Khi thực hiện hành động Filter thì chỉ cần chuyển route với "history.push()" hoặc "Link". Lúc này page Home sẽ tracking được URL thay đổi và thực hiện cập nhật lại products và filters
*/


function Home() {
  // State Categories: Mảng các thể loại Products
  const [categories, setCategories] = useState([]);
  // State Products: là 1 object để chứa danh sách product và phân trang (chứ k phải array)
  const [products, setProducts] = useState({
    products: [],
    pagination: {}
  }); // {"message": "Lay cac sp thanh cong", "data": {"products": [], "pagination": {"page": 1, "limit": 30,"page_size": 2}}}
  // State Filters
  const [filters, setFilters] = useState({})
  const dispatch = useDispatch();
  const query = useQuery(); // tracking sự thay đổi của URL
  //console.log(query);


  // Lấy ra danh sách category từ API 
  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then((res) => setCategories(res.data)); //[{"_id": "60aba4e24efcc70f8892e1c6","name": "Áo thun"}, {...}, {...}]
  }, [ dispatch]);


  // get Products
  useEffect(() => {
    const _filters = {
      ...query, // lấy trên URL xuống
      page: query.page || 1, // Nếu có query.page thì lấy query.page nếu không có thì lấy mặc định = 1
      limit: query.limit || 30, // Nếu có query.limit thì lấy query.limit nếu không có thì lấy mặc định 30
      sortBy: query.sortBy || "view"
    }
    // console.log(_filters); // vd: {category: '60aba4e24efcc70f8892e1c6', page: 1, limit: 30}
    setFilters(_filters);
    // params để truyền vào getProducts: để lọc ra những sản phẩm có các thuộc tính như trong params
    const params = {
      page: _filters.page,
      limit: _filters.limit,
      category: _filters.category,
      exclude: _filters.exclude,
      rating_filter: _filters.rating,
      price_max: _filters.maxPrice,
      price_min: _filters.minPrice,
      sort_by: _filters.sortBy,
      order: _filters.order,
      name: _filters.name
    }
    // console.log(params);
    const _getProducts = async () => {
      const data = await dispatch(getProducts({params}))
      //console.log(data); // {meta: {arg: {…}, requestId: '-hcKXfn_jQgXCqHehtgX9', requestStatus: 'fulfilled'}, payload: {message: 'Lấy các sản phẩm thành công', data: {…}, status: 200}, type: "home/getProducts/fulfilled"}
      const res = unwrapResult(data);
      //console.log(res); // {message: 'Lấy các sản phẩm thành công', data: {…}, status: 200}
      setProducts(res.data);
    }
    _getProducts();
  }, [query, dispatch])
  return (
    <div>
      <S.Container className="container">
        <S.Side>
          <FilterPanel 
            categories={categories} // Truyền danh sách categories xuông cho FilterPanel
            filters={filters} // Truyền filters xuống cho FilterPanel
            />
        </S.Side>
        <S.Main>
          <SearchItemResult products={products} filters={filters}/>
        </S.Main>
      </S.Container>
    </div>
  );
}

export default Home;
