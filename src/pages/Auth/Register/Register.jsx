import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";
import { Button } from "../../../assets/styles/utils";
import InputPassword from "../../../components/InputPassword/InputPassword";
import InputText from "../../../components/InputText/InputText";
import { path } from "../../../constants/path";
import * as S from "./Register.style";
import { rules } from "../../../constants/rules";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import { register } from "../auth.slice";
import { unwrapResult } from "@reduxjs/toolkit";

function Register() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      conformPassword: "",
    },
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleRegister = async (data) => {
    // console.log(data); // data khi nhập đúng các trường trong form(khi validate thành công)
    // Chỉ lấy email và password để gửi dữ liệu lên API để register.
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      // Dispatch 1 action để gửi dữ liệu register lên redux.
      const res = await dispatch(register(body)) // Dispatch action từ bên auth.slice.js(gửi dữ liệu post lên API để xử lý)
      unwrapResult(res); // Xử lý khi bị dispatch bị lỗi
      history.push(path.home); // xử lý đăng ký xòng(không bị lỗi) trở về trang home
    } catch (error) {
      // console.log(error.data);
      // Trong trường hợp lỗi 422( thường do form) hoặc lỗi do truyền query / param bị sai
      if(error.status === 422) {
        for(const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  };
  // console.log(errors);
  // useEffect(() => {
  //   http.get('products').then(res => {
  //     console.log(res);
  //   })
  // }, [])
  return (
    <div>
      <S.StyledRegister>
        <S.Container className="container">
          <S.Banner />
          <S.FormWrapper>
            <S.FormTitle>Đăng ký</S.FormTitle>
            <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      onChange={field.onChange}
                      value={getValues("email")}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="email" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputPassword
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="off"
                      onChange={field.onChange}
                      value={getValues("password")}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="password" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{
                    ...rules.confirmPassword,
                    validate: {
                      samePassword: (v) =>
                        v === getValues("password") || "Mật khẩu không khớp",
                    },
                  }}
                  render={({ field }) => (
                    <InputPassword
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      autoComplete="off"
                      onChange={field.onChange}
                      value={getValues("confirmPassword")}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="confirmPassword"/>
              </S.FormControl>
              <S.FormButton>
                <Button type="submit">Đăng ký</Button>
              </S.FormButton>
            </S.Form>
            <S.FormLine>
              <S.FormLineLeft />
              <span>Hoặc</span>
              <S.FormLineRight />
            </S.FormLine>
            <S.FormButtonGroup>
              {/* <Link to='https://react-icons.github.io/react-icons/search?q=apple'>
              asdas
              </Link> */}
              <Button>
                <BsFacebook />
                <span>Facebook</span>
              </Button>
              <Button>
                <BsGoogle />
                <span>Google</span>
              </Button>
              <Button>
                <BsApple />
                <span>Apple</span>
              </Button>
            </S.FormButtonGroup>
            <S.FormWord>
              Bằng việc đăng kí, bạn đã đồng ý với Shopee về{" "}
              <span>
                <Link className="link" to="">Điều khoản dịch vụ </Link>
              </span>
              &
              <span>
                <Link to="" className="link">
                  {" "}
                  Chính sách bảo mật
                </Link>
              </span>
            </S.FormWord>
            <S.FormFooter>
              <span>Bạn đã có tài khoản?</span>
              <Link to={path.login} className="link">
                Đăng nhập
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
        </S.Container>
      </S.StyledRegister>
    </div>
  );
}

export default Register;
