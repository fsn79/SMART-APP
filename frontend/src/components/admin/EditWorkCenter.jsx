import { useDispatch } from 'react-redux';

function EditWorkCenter() {
  const dispatch = useDispatch();
  function handleSubmitEditCenter(e) {
    e.preventDefault();
    const payload = {
      name: e.target.centerName.value,
      code: e.target.code.value,
      capacity: e.target.capacity.value,
      status: e.target.status.value,
    };
    dispatch({ type: 'EDIT_WC', payload });
  }
  // Форма редактирования отдела
  return (
    <div className='flex-direction--column formbg padding-horizontal--48'>
      <span className='padding-bottom--15'>Edit Work Center</span>
      <form onSubmit={handleSubmitEditCenter}>
        <div className='field padding-bottom--24'>
          <label htmlFor='centerName'>Edit Work Center Name</label>
          <input type='text' name='centerName' />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='code'>Edit Work Center code</label>
          <input type='text' name='code' />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='capacity'>Edit Work Center capacity</label>
          <input type='number' step='0.01' name='capacity' />
        </div>
        <label htmlFor='status'>Edit Status</label>
        <p>
          <select name='status' className='selectStatus'>
            <option>Active</option>
            <option>Disabled</option>
          </select>
        </p>
        <div class='field padding-bottom--24'>
          <input type='submit' name='submit' value='Edit' />
        </div>
      </form>
    </div>
  );
}

export default EditWorkCenter;
