import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchJson } from '../../helpers/fetchJson.jsx';
import Loader from '../../helpers/Loader.jsx';
import Output from '../../helpers/Output.jsx';

function Login() {
  const dispatch = useDispatch();
  const { load, error, message } = useSelector((state) => state);
  const [t] = useTranslation('global');

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
    <div className='flex-direction--column formbg padding-horizontal--48'>
      <span className='padding-bottom--15'>{t('login.title')}</span>
      <form onSubmit={handleLogin} id='login'>
        <div className='field padding-bottom--24'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' autoFocus />
        </div>
        <div className='field padding-bottom--24'>
          <div>
            <label htmlFor='password'>{t('login.password')}</label>
          </div>
          <input type='password' name='password' />
        </div>
        <div className='field padding-bottom--24'>
          <input type='submit' name='submit' value={t('login.btn-login')} className='button' />
        </div>
        <div>
          {load && <Loader />}
          {message && <Output message={message} error={error} />}
        </div>
      </form>
    </div>
  );
}

export default Login;
