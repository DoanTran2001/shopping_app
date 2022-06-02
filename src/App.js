import React from 'react'
import 'normalize.css'
import './assets/styles/global.scss'
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { unauthorize } from './pages/Auth/auth.slice';
// import { path } from './constants/path';
import Authorization from './Authorization/Authorization';

function App() {
  // const status = useSelector(state => state.app.status); // Lấy status từ redux
  // const dispatch = useDispatch();
  // const history = useHistory();
  // useEffect(() => {
  //   if(status === 401) { // Nếu status là 401(lỗi chưa đăng nhập)
  //     dispatch(unauthorize())
  //     history.push(path.login);
  //   }
  // }, [dispatch, status, history]);
  //console.log(111);
  return (
    <div className="App">
      <Routes/>
      <ToastContainer />
      <Authorization/>
    </div>
  );
}

export default App;
