import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchJson } from '../../helpers/fetchJson.jsx';

function Login() {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state);
  const [log, setLog] = useState(null);

  useEffect(() => {
    setLog(name);
  });
  // Форма авторизации
  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch({ type: 'LOGIN_USER_SAGA', payload });
  };
  return (
  <div className="flex-direction--column formbg padding-horizontal--48">
        <span className="padding-bottom--15">Sign in to your account</span>
        <form onSubmit={handleLogin} id="login">
          <div className="field padding-bottom--24">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="field padding-bottom--24">
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <input type="password" name="password" />
          </div>
          <div className="field padding-bottom--24">
            <input type="submit" name="submit" value="Continue" className="button"/>
          </div>
          <p>{log}</p>
        </form>
  </div>
  );
}

export default Login;
