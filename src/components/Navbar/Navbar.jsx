import React, { useState } from "react";
import { useAuthenticated } from "../../hooks/useAuthenticated";
import { Link } from "react-router-dom";
import * as S from "./Navbar.style";
import { notification } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { path } from "../../constants/path";
import usePop from "../../hooks/usePop";
import Popover from "../Popover/Popover";
import { logout } from "../../pages/Auth/auth.slice";

function Navbar() {
  const authenticated = useAuthenticated(); // hook kiểm tra đã login hay chưa. Nếu login r thì hiện avatar và tên, ngược lại thì hiện đăng nhập và đăng ký
  const profile = useSelector((state) => state.auth.profile); // lấy profile từ redux
  const [hoverNotis, setHoverNotis] = useState(notification);
  const [notiNum, setNotiNum] = useState(true);
  const handleHoverNoti = (id) => {
    const newHoverNotis = hoverNotis.map((Noti) => {
      return Noti.id === id ? { ...Noti, hover: true } : Noti;
    });
    setHoverNotis(newHoverNotis);
  };
  const handleNotiNum = () => {
    setNotiNum(false);
  };
  // console.log(profile);
  // Pop user
  const [activeName, setActiveName] = useState(false);
  const showPopName = () => setActiveName(true);
  const hidePopName = () => setActiveName(false);
  //pop notification
  const { activePop, showPop, hidePop } = usePop();
  // Logout
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <S.NavWrap>
      <S.NavLeft>
        <S.NavItem>
          <Link to="">Kênh người bán</Link>
        </S.NavItem>
        <S.NavItem>
          <Link to="">Tải ứng dụng</Link>
          <S.NavDrawer>
            <S.NavLeftHover>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png"
                alt=""
              />
              <S.NavLeftHoverContent>
                <div className="">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
                    alt=""
                  />
                </div>
              </S.NavLeftHoverContent>
            </S.NavLeftHover>
          </S.NavDrawer>
        </S.NavItem>
        <S.NavItem>
          <Link to="">Kết nối</Link>
        </S.NavItem>
      </S.NavLeft>
      <S.NavRight>
        {
          // Đã đăng kí rồi, (có profile trong redux r)
          authenticated && (
            <S.NavList>
              <S.NavLinkItem>
                <S.NavRightDiv onMouseEnter={showPop} onMouseLeave={hidePop}>
                  <Link to="">
                    <div className="" onMouseEnter={handleNotiNum}>
                      <svg
                        viewBox="3 2.5 14 14"
                        x={0}
                        y={0}
                        className="shopee-svg-icon icon-notification-2"
                      >
                        <path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z" />
                        <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z" />
                      </svg>
                      <span>Thông báo</span>
                    </div>
                    {notiNum && <span className="">{notification.length}</span>}
                  </Link>
                  <Popover active={activePop}>
                    <h3>Thông báo mới nhận</h3>
                    {notification.map((item, index) => {
                      return (
                        <S.NavNotiItem
                          key={index}
                          onMouseEnter={() => handleHoverNoti(item.id)}
                          hover={item.hover}
                        >
                          <img src={item.img} alt="" />
                          <S.NavNotiText>
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                          </S.NavNotiText>
                        </S.NavNotiItem>
                      );
                    })}
                  </Popover>
                  {/* {activePop && (
                    <S.NavRightNoti>
                      <S.NavNotiContent>
                        <h3>Thông báo mới nhận</h3>
                        {notification.map((item) => {
                          return (
                            <S.NavNotiItem>
                              <img src={item.img} alt="" />
                              <S.NavNotiText>
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                              </S.NavNotiText>
                            </S.NavNotiItem>
                          );
                        })}
                      </S.NavNotiContent>
                    </S.NavRightNoti>
                  )} */}
                </S.NavRightDiv>
              </S.NavLinkItem>
              <S.NavLinkItem>
                <Link to="">
                  <svg
                    height={16}
                    viewBox="0 0 16 16"
                    width={16}
                    className="shopee-svg-icon icon-help-center"
                  >
                    <g fill="none" fillRule="evenodd" transform="translate(1)">
                      <circle cx={7} cy={8} r={7} stroke="currentColor" />
                      <path
                        fill="currentColor"
                        d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                      />
                    </g>
                  </svg>
                  <span>Hỗ trợ</span>
                </Link>
              </S.NavLinkItem>
              <S.NavLinkItem
                onMouseEnter={showPopName}
                onMouseLeave={hidePopName}
              >
                <Link to="">
                  <img
                    src="https://images.pexels.com/photos/9542697/pexels-photo-9542697.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <p>{profile.name || profile.email}</p>
                </Link>
                {activeName && (
                  <S.NavRightNoti style={{ width: "200px" }}>
                    <S.NavNotiUser>
                      <Link to={path.user}>
                        <p>Tài khoản của tôi</p>
                      </Link>
                      <Link to="">
                        <p>Đơn mua</p>
                      </Link>
                      <S.UserButton onClick={handleLogout}>
                        <p>Đăng xuất</p>
                      </S.UserButton>
                    </S.NavNotiUser>
                  </S.NavRightNoti>
                )}
                {/* <S.NavRightNoti>
                    <S.NavNotiContent>
                      <p>âsd</p>
                    </S.NavNotiContent>
                  </S.NavRightNoti> */}
              </S.NavLinkItem>
            </S.NavList>
          )
        }
        {!authenticated && (
          <S.NavList>
            <S.NavLinkItem>
              <S.NavRightDiv onMouseEnter={showPop} onMouseLeave={hidePop}>
                <Link to="">
                  <svg
                    viewBox="3 2.5 14 14"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-notification-2"
                  >
                    <path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z" />
                    <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z" />
                  </svg>
                  <span>Thông báo</span>
                </Link>
                {activePop && (
                  <S.NavRightNoti>
                    <S.NavNotiContent>
                      <S.NavNotiContentChild>
                        <img
                          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/99e561e3944805a023e87a81d4869600.png"
                          alt=""
                        />
                        <p>Đăng nhập để xem thông báo</p>
                        <S.NavBtn>
                          <Link
                            to={path.register}
                            style={{ borderRight: "1px solid #eee" }}
                          >
                            Đăng kí
                          </Link>
                          <Link to={path.login}>Đăng nhập</Link>
                        </S.NavBtn>
                      </S.NavNotiContentChild>
                    </S.NavNotiContent>
                  </S.NavRightNoti>
                )}
              </S.NavRightDiv>
            </S.NavLinkItem>
            <S.NavLinkItem>
              <Link to="">
                <svg
                  height={16}
                  viewBox="0 0 16 16"
                  width={16}
                  className="shopee-svg-icon icon-help-center"
                >
                  <g fill="none" fillRule="evenodd" transform="translate(1)">
                    <circle cx={7} cy={8} r={7} stroke="currentColor" />
                    <path
                      fill="currentColor"
                      d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                    />
                  </g>
                </svg>
                <span>Hỗ trợ</span>
              </Link>
            </S.NavLinkItem>
            <S.NavLinkItem style={{ display: "flex" }}>
              <Link to={path.register}>Đăng kí</Link>
              <Link to={path.login} style={{ marginLeft: "10px" }}>
                Đăng nhập
              </Link>
            </S.NavLinkItem>
          </S.NavList>
        )}
      </S.NavRight>
    </S.NavWrap>
  );
}

export default Navbar;
