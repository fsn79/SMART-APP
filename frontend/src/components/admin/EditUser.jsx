import { useDispatch } from 'react-redux';
import closeIcon from '../../images/closeicon.svg';

function EditUser({ user, setActive }) {
  console.log(user);
  const dispatch = useDispatch();
  function handleSubmitEditUser(e) {
    e.preventDefault();
    const payload = {
      id: user.id,
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
    <div id='editUserModal' className="modal_content flex-direction--column formbg padding-horizontal--48">
      {/* <button className="modal_close" onClick={() => setActive(false)}>&times;</button> */}
      <img className="modal_close" alt="close" src={closeIcon} onClick={() => setActive(false)} />
      <span id="form-header" className="padding-bottom--15">Edit employee</span>
      <form id="editUser" onSubmit={handleSubmitEditUser}>
        <div className="field padding-bottom--24">
          <label htmlFor="lastname">Edit Lastname</label>
          <input type="text" name="lastname" defaultValue={user.lastname} />
        </div>
        <div className="field padding-bottom--24">
          <label htmlFor="firstname">Edit Firstname</label>
          <input type="text" name="firstname" defaultValue={user.firstname} />
        </div>
        <div className="field padding-bottom--24">
          <label htmlFor="email">Edit Email</label>
          <input type="email" name="email" defaultValue={user.email} />
        </div>
        <div className="field padding-bottom--24">
          <label htmlFor="password">Edit Password</label>
          <input type="password" name="password" defaultValue={user.password} />
        </div>
        <div className="grid--50-50">
          <label htmlFor="jobtitle">Edit Jobtitle</label>
        </div>
        <p><select className="selectEditUser" name='jobtitle'>
          <option>Manager</option>
          <option>Worker</option>
        </select></p>
        <div className="grid--50-50">
          <label htmlFor="workcenter">Edit Work Center</label>
        </div>
        <p><select className="selectEditUser" name='workcenter'>
          <option>Manager</option>
          <option>Worker</option>
        </select></p>
        <div className="grid--50-50">
          <label htmlFor="status">Edit Status</label>
        </div>
        <p><select className="selectEditUser" name='status'>
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
