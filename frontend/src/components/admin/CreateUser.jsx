import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJson } from '../../helpers/fetchJson.jsx';
import Loader from '../../helpers/Loader.jsx';
import Output from '../../helpers/Output.jsx';

function CreateUser() {
  // Форма создания пользователя
  const [workCenters, setworkCenters] = useState([]);
  const { load, error, message } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchAndSetWorkCenters() {
      const listWorkCenters = await fetchJson('/api/wc');
      console.log(listWorkCenters.message);
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
      <span className='padding-bottom--15'>Create a new employee</span>
      <form id='createUser' onSubmit={handleSubmitCreateUser}>
        <div className='field padding-bottom--24'>
          <label htmlFor='lastname'>Lastname</label>
          <input type='text' name='lastname' autoFocus required />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='firstname'>Firstname</label>
          <input type='text' name='firstname' required />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' required />
        </div>
        <div className='field padding-bottom--24'>
          <div className='grid--50-50'>
            <label htmlFor='password'>Password</label>
          </div>
          <input type='password' name='password' required />
        </div>
        <div className='grid--50-50'>
          <label htmlFor='jobtitle'>Jobtitle</label>
        </div>
        <p>
          <select name='jobtitle' required>
            <option value='Worker'>Worker</option>
            <option value='Manager'>Manager</option>
          </select>
        </p>
        <div className='grid--50-50'>
          <label htmlFor='workcenter'>Workcenter</label>
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
          <button type='submit'>Create</button>
        </div>
        {load && <Loader />}
        {message && <Output message={message} error={error} />}
      </form>
    </div>
  );
}

export default CreateUser;
