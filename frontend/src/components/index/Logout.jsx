import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'LOGOUT_USER_SAGA' });
  }, [dispatch]);

  // Выход из системы
  return <Redirect to='/' />;
}
export default Logout;
