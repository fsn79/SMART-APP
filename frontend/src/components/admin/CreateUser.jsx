import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJson } from '../../helpers/fetchJson.jsx';
import Loader from '../../helpers/Loader.jsx';
import Output from '../../helpers/Output.jsx';

function CreateUser() {
  // Форма создания пользователя
  const [workCenters, setworkCenters] = useState([]);
  const [t] = useTranslation('global');
  const { load, error, message } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchAndSetWorkCenters() {
      const listWorkCenters = await fetchJson('/api/wc');
      setworkCenters(listWorkCenters.message);
    }
    fetchAndSetWorkCenters();
  }, []);

  const handleSubmitCreateUser = (e) => {
    e.preventDefault();
    const payload = {
      lastname: e.target.lastname.value,
      firstname: e.target.firstname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      jobtitle: e.target.jobtitle.value,
      workcenterid: e.target.workcenter.value,
    };
    dispatch({ type: 'CREATE_USER_SAGA', payload });
  };

  return (
    <div className='flex-direction--column formbg padding-horizontal--48'>
      <span className='padding-bottom--15'>{t('createUser.title')}</span>
      <form id='createUser' onSubmit={handleSubmitCreateUser}>
        <div className='field padding-bottom--24'>
          <label htmlFor='lastname'>{t('createUser.lastName')}</label>
          <input type='text' name='lastname' autoFocus required />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='firstname'>{t('createUser.firstname')}</label>
          <input type='text' name='firstname' required />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' required />
        </div>
        <div className='field padding-bottom--24'>
          <div className='grid--50-50'>
            <label htmlFor='password'>{t('createUser.password')}</label>
          </div>
          <input type='password' name='password' required />
        </div>
        <div className='field padding-bottom--24'>
          <div className='grid--50-50'>
            <label htmlFor='password'>{t('createUser.repeatPassword')}</label>
          </div>
          <input type='password' name='repeatpassword' required />
        </div>
        <div className='grid--50-50'>
          <label htmlFor='jobtitle'>{t('createUser.jobtitle')}</label>
        </div>
        <p>
          <select name='jobtitle' required>
            <option value='Worker'>{t('createUser.statusW')}</option>
            <option value='Manager'>{t('createUser.statusM')}</option>
          </select>
        </p>
        <div className='grid--50-50'>
          <label htmlFor='workcenter'>{t('createUser.workcenter')}</label>
        </div>
        <p>
          <select name='workcenter' required>
            {workCenters.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
        </p>
        <div className='field padding-bottom--24'>
          <button type='submit'>{t('createUser.btn-create')}</button>
        </div>
        {load && <Loader />}
        {message && <Output message={message} error={error} />}
      </form>
    </div>
  );
}

export default CreateUser;
