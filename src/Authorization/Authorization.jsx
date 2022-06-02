import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { path } from '../constants/path';
import { useAuthenticated } from '../hooks/useAuthenticated';
import { unauthorize } from '../pages/Auth/auth.slice';
import { getCartPurchases } from '../pages/Cart/Cart.Slice';

function Authorization() {
  const status = useSelector(state => state.app.status);
  const dispatch = useDispatch();
  const history = useHistory();
  const authenticated = useAuthenticated();
  useEffect(() => {
    if(status === 401) {
      dispatch(unauthorize())
      history.push(path.login);
    }
  }, [dispatch, status, history]);
  useEffect(() => {
    // nếu đã login r thì getCartPurchases(get những sp có trong giỏ hàng của tài khoản đó)
    if(authenticated) {
      dispatch(getCartPurchases());
    }
  }, [dispatch, authenticated])
  return null;
}

export default Authorization
