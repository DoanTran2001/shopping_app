import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import * as S from '../Register/Register.style'
import { useDispatch } from 'react-redux'
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import InputText from "../../../components/InputText/InputText";
import InputPassword from "../../../components/InputPassword/InputPassword";
import { rules } from "../../../constants/rules";
import { Button } from "../../../assets/styles/utils";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import { path } from "../../../constants/path";
import { login } from '../auth.slice';
import { unwrapResult } from "@reduxjs/toolkit";


// Component đăng nhập
function Login() {
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
    },
  });
  const dispatch = useDispatch();
  const history = useHistory()
  const handleLogin = async (data) => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(login(body))
      unwrapResult(res);
      history.push(path.home)
    } catch (error) {
      if(error.status === 422) {
        for(const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  }
  return (
    <div>
      <S.StyledRegister>
        <S.Container className="container">
          <S.Banner />
          <S.FormWrapper>
            <S.FormTitle>Đăng nhập</S.FormTitle>
            <S.Form onSubmit={handleSubmit(handleLogin)} noValidate>
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
              <S.FormButton>
                <Button type="submit">Đăng nhập</Button>
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
              <span>Bạn mới biết Shopee?</span>
              <Link to={path.register} className="link">
                Đăng ký
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
        </S.Container>
      </S.StyledRegister>
    </div>
  )
}

export default Login
