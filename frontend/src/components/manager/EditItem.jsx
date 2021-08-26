import { useDispatch } from 'react-redux';
import closeIcon from '../../images/closeicon.svg';

function EditItem({ item, setActive }) {
  const dispatch = useDispatch();
  function handleSubmitEditItem(e) {
    e.preventDefault();
    const payload = {
      id: item.id,
      workcenter1: e.target.workcenter1.value,
      descrroute1: e.target.descrroute1.value,
      cycletime1: e.target.cycletime1.value,
      workcenter2: e.target.workcenter2.value,
      descrroute2: e.target.descrroute2.value,
      cycletime2: e.target.cycletime2.value,
      workcenter3: e.target.workcenter3.value,
      descrroute3: e.target.descrroute3.value,
      cycletime3: e.target.cycletime3.value,
      status: e.target.status.value,
    };
    dispatch({ type: 'EDIT_ONE_ITEM', payload });
  }

  return (
    <div
      className='modal_content flex-direction--column formbg padding-horizontal--48'
      id='editItemDiv'>
      <img
        className='modal_close'
        alt='close'
        src={closeIcon}
        onClick={() => setActive(false)}
      />
      <span id='form-header' className='padding-bottom--15'>
        Edit item
      </span>
      <form id='editItem' onSubmit={handleSubmitEditItem}>
        <div className='field padding-bottom--24'>
          <label>Item Routing</label>
          <div className='work-center-select-titles'>
            <div>Edit Work centers selections</div>
            <div>Edit Routing Description</div>
            <div>Edit Cycle Time</div>
          </div>
          <div className='work-center-select-wrapper'>
            <div className='work-center-label'>
              <p>
                <select className='selectCenter2' name='workcenter1'>
                  <option>Center 1</option>
                  <option>Center 2</option>
                  <option>Center 3</option>
                </select>
              </p>
              <p>
                <select className='selectCenter2' name='workcenter2'>
                  <option>Center 1</option>
                  <option>Center 2</option>
                  <option>Center 3</option>
                </select>
              </p>
              <p>
                <select name='workcenter3'>
                  <option>Center 1</option>
                  <option>Center 2</option>
                  <option>Center 3</option>
                </select>
              </p>
            </div>
            <div className='work-center-label'>
              <p>
                <input
                  type='text'
                  className='routingDescription'
                  name='descrroute1'
                  defaultValue={item.descrroute1}
                />
              </p>
              <p>
                <input
                  type='text'
                  className='routingDescription'
                  name='descrroute2'
                  defaultValue={item.descrroute2}
                />
              </p>
              <p>
                <input
                  type='text'
                  className='routingDescription'
                  name='descrroute3'
                  defaultValue={item.descrroute3}
                />
              </p>
            </div>
            <div className='work-center-label'>
              <p>
                <input
                  type='number'
                  step='0.01'
                  min='0'
                  className='cycleTime'
                  name='cycletime1'
                  defaultValue={item.cycletime1}
                />
              </p>
              <p>
                <input
                  type='number'
                  step='0.01'
                  min='0'
                  className='cycleTime'
                  name='cycletime2'
                  defaultValue={item.cycletime2}
                />
              </p>
              <p>
                <input
                  type='number'
                  step='0.01'
                  min='0'
                  className='cycleTime'
                  name='cycletime3'
                  defaultValue={item.cycletime3}
                />
              </p>
            </div>
          </div>
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='status'>Edit Status</label>
          <p>
            <select name='status' className='selectStatus'>
              <option>Active</option>
              <option>Disabled</option>
            </select>
          </p>
        </div>
        <div className='field padding-bottom--24'>
          <input type='submit' name='submit' value='Edit' />
        </div>
      </form>
    </div>
  );
}

export default EditItem;
