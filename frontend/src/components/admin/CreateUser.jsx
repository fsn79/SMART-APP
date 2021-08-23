import { useDispatch } from 'react-redux';

function CreateUser() {
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
    <div className="flex-direction--column formbg padding-horizontal--48">
        <span className="padding-bottom--15">Create a new employee</span>
    <form id="createUser" onSubmit={handleSubmitCreateUser}>
       <div className="field padding-bottom--24">
        <label htmlFor="lastname">Lastname</label>
        <input type="text" name="lastname" />
      </div>
      <div className="field padding-bottom--24">
        <label htmlFor="firstname">Firstname</label>
        <input type="text" name="firstname" />
      </div>
      <div className="field padding-bottom--24">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div className="field padding-bottom--24">
        <div className="grid--50-50">
          <label htmlFor="password">Password</label>
        </div>
        <input type="password" name="password" />
      </div>
      <p><select name='jobtitle'>
        <option>Manager</option>
        <option>Worker</option>
      </select></p>
      <p><select name='workcenter'>
        <option>Manager</option>
        <option>Worker</option>
      </select></p>
      <div className="field padding-bottom--24">
        <input type="submit" name="submit" value="Create" />
      </div>
    </form>
    </div>
  );
}

export default CreateUser;
