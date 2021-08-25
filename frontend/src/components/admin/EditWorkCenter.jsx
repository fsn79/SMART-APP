import { useDispatch } from 'react-redux';
import closeIcon from '../../images/closeicon.svg';

function EditWorkCenter({ center, setActive }) {
  const dispatch = useDispatch();
  function handleSubmitEditCenter(e) {
    e.preventDefault();
    const payload = {
      id: center.id,
      name: e.target.centerName.value,
      code: e.target.code.value,
      capacity: e.target.capacity.value,
      status: e.target.status.value,
    };
    dispatch({ type: 'EDIT_WC', payload });
  }
  // Форма редактирования отдела
  return (
    <div id='editWCModal' className="modal_content flex-direction--column formbg padding-horizontal--48">
    <img className="modal_close_button" alt="close" src={closeIcon} onClick={() => setActive(false)} />
    <span className="padding-bottom--15" id="form-header">Edit Work Center</span>
<form onSubmit={handleSubmitEditCenter}>
   <div className="field padding-bottom--24">
    <label htmlFor="centerName">Edit Work Center Name</label>
    <input type="text" name="centerName" defaultValue={center.name} autoFocus/>
  </div>
  <div className="field padding-bottom--24">
    <label htmlFor="code">Edit Work Center code</label>
    <input type="text" name="code" defaultValue={center.code} />
  </div>
  <div className="field padding-bottom--24">
    <label htmlFor="capacity">Edit Work Center capacity</label>
    <input type="number" step='0.01' min='0' name="capacity" defaultValue={center.capacity} />
  </div>
  <div className="field padding-bottom--24">
  <label htmlFor="status">Edit Status</label>
  <p><select name="status" className="selectStatus">
        <option>Active</option>
        <option>Disabled</option>
       </select></p>
  </div>
  <div className="field padding-bottom--24">
    <input type="submit" name="submit" value="Edit" />
  </div>
</form>
</div>
  );
}

export default EditWorkCenter;
