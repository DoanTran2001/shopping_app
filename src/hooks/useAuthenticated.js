import { useSelector } from 'react-redux'
// Hook này dùng để biết trạng thái đăng nhập hay chưa
// Khi đăng nhập thành công thì trong redux sẽ có thông tin của user đó gồm profile, access_token
/* auth -> profile {
  _id(pin):"61d92a786ebc001cf2de9a27",
  roles: ["User"],
  email: "...",
  createAt: "...",
  updateAt: "...",
  __v: 0
}
*/
export function useAuthenticated() {
  // Nếu trong redux có profile và có _id thì nó sẽ trả về true(đã đăng nhập rồi)
  return useSelector((state) => Boolean(state.auth.profile._id))
}