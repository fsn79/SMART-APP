import { useDispatch } from 'react-redux';

function EditUser() {
  const dispatch = useDispatch();
  function handleSubmitEditUser(e) {
    e.preventDefault();
    const payload = {
      lastname: e.target.lastname.value,
      firstname: e.target.firstname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      jobtitle: e.target.jobtitle.value,
      workcenterid: e.target.workcenter.value,
      status: e.target.status.value,
    };
    dispatch({ type: 'EDIT_ONE_USER', payload });
  }
  // Форма редактирования пользователя
  return (
    <div className="flex-direction--column formbg padding-horizontal--48">
        <span className="padding-bottom--15">Edit employee</span>
    <form id="editUser" onSubmit={handleSubmitEditUser}>
       <div className="field padding-bottom--24">
        <label htmlFor="lastname">Edit Lastname</label>
        <input type="text" name="lastname" />
      </div>
      <div className="field padding-bottom--24">
        <label htmlFor="firstname">Edit Firstname</label>
        <input type="text" name="firstname" />
      </div>
      <div className="field padding-bottom--24">
        <label htmlFor="email">Edit Email</label>
        <input type="email" name="email" />
      </div>
      <div className="field padding-bottom--24">
        <div className="grid--50-50">
          <label htmlFor="password">Edit Password</label>
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
      <label htmlFor="status">Edit Status</label>
      <p><select name='status'>
        <option>Active</option>
        <option>Retired</option>
      </select></p>
      <div className="field padding-bottom--24">
        <input type="submit" name="submit" value="Edit" />
      </div>
    </form>
    </div>
  );
}

export default EditUser;
