import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";

// ==================  Hook xử lý query param =======================

function useQuery() {
  // ************************** useLocation *********************************************
  //useLocation sẽ trả về location object hiện tại. Nó sẽ giúp ích trong trường hợp chúng ta muốn lấy thông tin từ URL hiện tại. Ví dụ như, bạn muốn gửi một sự kiện "page view" đến một analytics service mỗi khi URL thay đổi
  const location = useLocation();
  //console.log(location); //vd: {pathname: '/', search: '?category=60afafe76ef5b902180aacb5', hash: '', state: null, key: 'lfujki'}
  // ******************************** useMemo ********************************************
  // useMemo là 1 hook giúp ghi nhớ kết quả đầu ra của 1 hàm.  useMemo sẽ gọi hàm và trả về giá trị trả về của nó. Sau đó, mỗi khi bạn gọi lại useMemo, nó sẽ kiểm tra nếu bất kì khi nào dependencies thay đổi nó sẽ gọi lại callback để thực thi nó. Nếu không, nó sẽ trả về giá trị cũ đã được lưu trong bộ nhớ cache, không gọi hàm callback.
  // ******************************** query-string ************************************
  //console.log(qs); // {extract: ƒ, parse: ƒ, stringify: ƒ, parseUrl: ƒ, stringifyUrl: ƒ, …}
  //console.log(qs.parse(location.search)); // vd: {category: '60aba4e24efcc70f8892e1c6'}
  const queryString = useMemo(
    () => qs.parse(location.search),
    [location.search]
  );
  return queryString;
}
export default useQuery;
