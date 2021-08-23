import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJson } from '../../helpers/fetchJson.jsx';

function CreateUser() {
  const [workCenters, setworkCenters] = useState([]);

  useEffect(() => {
    async function fetchAndSetWorkCenters() {
      const listWorkCenters = await fetchJson('/api/wc');
      setworkCenters(listWorkCenters);
    }

    fetchAndSetWorkCenters();
  }, []);

  // Форма создания пользователя
  const dispatch = useDispatch();
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
    dispatch({ type: 'USER', payload });
  };

  return (
    <div class="flex-direction--column formbg padding-horizontal--48">
      <span class="padding-bottom--15">Create a new employee</span>
      <form id="createUser" onSubmit={handleSubmitCreateUser}>
        <div class="field padding-bottom--24">
          <label for="lastname">Lastname</label>
          <input type="text" name="lastname" autofocus/>
        </div>
        <div class="field padding-bottom--24">
          <label for="firstname">Firstname</label>
          <input type="text" name="firstname" />
        </div>
        <div class="field padding-bottom--24">
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div class="field padding-bottom--24">
          <div class="grid--50-50">
            <label for="password">Password</label>
          </div>
          <input type="password" name="password" />
        </div>
        <div class="grid--50-50">
          <label for="jobtitle">Jobtitle</label>
        </div>
        <p><select name='jobtitle'>
          <option value='Worker'>Worker</option>
          <option value='Manager'>Manager</option>
        </select></p>
        <div class="grid--50-50">
          <label for="workcenter">Workcenter</label>
        </div>
        <p><select name='workcenter'>
          {
            workCenters.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)
          }
        </select></p>
        <div class="field padding-bottom--24">
          <input type="submit" name="submit" value="Create" />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
