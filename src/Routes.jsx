import React from "react";
import { Route, Switch } from "react-router-dom";
import { path } from "./constants/path";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import RegisterLayout from "./layouts/RegisterLayout/RegisterLayout";
import MainLayout from "./layouts/MainLayout/MainLayout";
import UnauthenticatedGuard from "./guards/UnauthenticatedGuard";
import AuthenticatedGuard from "./guards/AuthenticatedGuard";
import User from "./pages/User/User";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartLayout from "./layouts/CartLayout/CartLayout";
import Cart from "./pages/Cart/Cart";

// Routes
export default function Routes() {
  return (
    <Switch>
      {/* /home thì hiển thị layout home */}
      <Route path={path.home} exact>
        <MainLayout>
          <Home />
        </MainLayout>
      </Route>
      {/* Hiển thị trang chi tiết sản phẩm  */}
      <Route path={path.productDetail} exact>
        <MainLayout>
          <ProductDetail/>
        </MainLayout>
      </Route>
      {/* Trang Đăng nhập */}
      <Route path={path.login}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng nhập">
            <Login />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.register}>
        {/* Nếu login rồi mà vẫn ấn vào login/register thì dẫn về trang Home */}
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng ký">
            <Register />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.user}>
        {/* Phải login thì mới cho vào trang user này! */}
        <AuthenticatedGuard>
          <MainLayout>
            <User/>
          </MainLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.cart}>
        {/* Phair login thì mới vào được trang Cart */}
        <AuthenticatedGuard>
          <CartLayout>
            <Cart />
          </CartLayout>
        </AuthenticatedGuard>
      </Route>
      {/* ==========================  Notfound ======================= */}
      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  );
}
