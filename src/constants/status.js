export const purchaseStatus = {
    // Thông tin từ API
    inCart: -1, // sản phẩm đang trong giỏ hàng
    all: 0, // tất cả sản phẩm
    waitForConfirmation: 1, // sản phẩm đang đợi xác nhận từ chủ shop
    waitForGetting: 2, // Sản phẩm đang được lấy hàng
    inProgress: 3, // Sản phẩm đang vận chuyển
    delivered: 4, // Sản phẩm đã được giao
    cancelled: 5 // Sản phẩm đã bị hủy
}