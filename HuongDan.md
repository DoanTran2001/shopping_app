* Thư mục assets: chứa các file dùng chung như: fonts và styles
+ fonts: chứa font dùng chủ đạo
+ styles: global.scss: style cơ bản
	  utils.js: styled components cho các component hay dùng như Button, ...

* Thư mục constants: chứa các hằng số(không thay đổi)
+ path.js: chứa các path(đường dẫn)

* Thư mục pages: chứa các page

### ---------------------------- Thông tin API ----------------------------

## Get products: `/products`

Ví dụ: `products?page=1&limit=30`
Method: GET

Query Params: (là một chuỗi truy vấn được client gửi lên server. Server sẽ nhận các thông tin này để xử lý và trả về một kết quả phù hợp với câu truy vấn được gửi lên)
`page`: number --> số trang, mặc định là 1
`limit`: number --> số product trên 1 trang, mặc định là 30
`order`: 'desc' || 'asc' --> Sắp xếp theo thứ tự, mặc định là 'desc'
`sort_by`: 'createAt' || 'view' || 'sold' || 'price':  --> Sắp xếp theo trường, mặc định là 'createAt'
`category`: categoryId: Lọc sản phẩn theo category
`exclude`: productId: Loại trừ sản phẩm nào đó
`rating_filter`: number --> Lọc sản phẩm có số sao lớn hơn hoặc bằng rating_filter
`price_max`: number --> Giá cao nhất
`price_min`: number --> Giá thấp nhất
`name`: string --> Tên sản phẩm(Tên sản phẩm tiếng Việt phải gõ đầy đủ dấu)

## Get Purchases: `/purchases`
Method: GET
Query params:
`status`: trạng thái đơn hàng
-1: Sản phẩm đang trong giỏ hàng
0: Tất cả sản phẩm
1: Sản phẩm đang đợi xác nhận từ chủ shop
2: Sản phẩm đang được lấy hàng
3: Sản phẩm đang vận chuyển
4: Sản phẩm đã được giao
5: Sản phẩm đã bị hủy


### ---------------------------- Filter ----------------------------
## Tại sao phải đồng bộ filter lên URL

- Chúng ta hoàn toàn có thể filter sản phẩm trên website của chúng ta mà URL không hề thay đổi. Nhưng điều này chỉ xảy ra ở máy tính chúng ta, nếu ta refresh lại thì sẽ mất hoàn toàn filter
- Hoặc đơn giản nếu chúng ta gửi URL cho 1 người khác thì họ không thấy đc những gì chúng ta đang filter
- Vì thế cần đồng bộ filter lên trên URL, khi URL thay đổi thì filter cũng thay đổi
## Thuật toán

- Page "Home" sẽ lưu trữ state "filters" và tracking(theo dõi) sự thay đổi của URL. Nếu URL thay đổi thì cập nhật lại state "filters" và gọi lại API products

- State "filters" sẽ được truyền xuống các component con như "SearchItemResult" hay "FilterPanner" để các component đó tiện việc xử lý điều hướng

- Khi thực hiện hành động Filter thì chỉ cần chuyển route với "history.push()" hoặc "Link". Lúc này page Home sẽ tracking được URL thay đổi và thực hiện cập nhật lại products và filters

- Ví dụ 1 URL: http://localhost:3000/?category=60aba4e24efcc70f8892e1c6&limit=30&page=1&rating=4&sortBy=view
--> Lúc này filters sẽ là:
```js
const filters = {
	limit: 30,
	page: 1,
	...
}
```
--> Khi nhấn vào 1 trong các danh mục ở categories, vì nó là thẻ NavLink nên nó sẽ đưa lên thanh URL. Trang Home thấy sự thay đổi của URL thì sẽ cập nhật lại state filters, và dispatch 1 action getProduct(truyền vào param - filters)
--> Khi nhấn vào số sao ở phần đánh giá thì ta sẽ cập nhật thêm rating vào filters -> sau đó trang sẽ gọi API để lấy dữ liệu product render lên giao diện
--> Khi nhập khoảng giá đúng hết các trường và nhấn nút "Áp dụng" thì ta cũng sẽ cập nhật lên filters và sau đó gọi API, ...


## Lưu ý khi làm việc với redux - Redux-toolkit

- Các data dùng chung ở nhiều component khác nhau, nhiều page khác nhau thì nên lưu ở redux
- Các data chỉ dùng ở 1 chỗ thì lưu ở component

- Khi get API thì nên thông qua "createAsyncThunk" để có được những action như "../fulfilled" hoặc "../rejected" để dễ dàng tracking sử dụng sau này cho các tính năng như loading
- Không cần thiết phải xử lý mọi action mà "createAsyncThunk" trả về, chỉ xử lý những cái cần dùng, cũng như không cần thiết phải lưu hết mọi thứ vào redux.


## query-string (Phân tích cú pháp và chuỗi các chuỗi truy vấn trên thanh URL)

### Xử lý unauthorized

1. Khi token hết hạn hoặc không gửi token => Server trả về status 401
2. Chúng ta sẽ tracking(theo dõi) mỗi status server trả về.
	Nếu là 401 thì sẽ dispatch 1 action unauthorize
3. Chúng ta cần 1 component để tracking status này, nơi component luôn tồn tại xuyên suốt app của chúng ta ==> đó chính là App component

### Phân tích thuật toán

## State của Cart(Giỏ hàng)

- `purchases = []`
- Mỗi Purchases ngoài việc nắm giữ thông tin từ API trả về, chúng còn nắm giữ thuộc tính `disabled` và `checked`
- Vì thế mình sẽ tạo 1 state mới là `localPurchases` với các `purchases` được add thuộc tính `disabled`	và `checked` vào. Và mình sẽ dùng `createNextState`(tương tự `produce` của `immer`) để thực hiện để tránh mutate state `purchases`
## BaseInputNumber
- Nhận thấy khi out focus khỏi input thì sẽ gọi 1 sự kiện => Thêm props `onBlur` vào
## ProductQuantityController
- Nhận thấy rắng chỉ gọi API khi out focus khỏi input hoặc nhấn button tăng / giảm
- Nếu chỉ dùng `onChange` thì mỗi khi gõ phím sẽ thực hiện gọi API => không nên
==> Không dùng props `onChange` ở trong thường hợp này
==> Đổi thành `onInput, onIncrease, onDecrease`
- Khi gõ phím sẽ gọi `onInput` và `onInput` sẽ cập nhật lại state chứ k gọi API
- Khi mất focus khỏi input thì sẽ gọi `onBlur` và `onBlur` sẽ gọi API
- Khi nhấn vào button `increase` thì sẽ gọi `onIncrease` và `onIncrease` sẽ gọi API
- Khi nhấn vào button `decrease` thì sẽ gọi `onDecrease` và `onDecrease` sẽ gọi API


