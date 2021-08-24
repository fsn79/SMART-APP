import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../helpers/Loader.jsx';
import Output from '../../helpers/Output.jsx';

function CreateItem() {
  // Форма создания продукта
  const dispatch = useDispatch();
  const { load, message, error } = useSelector((store) => store);
  const count = [1, 2, 3];
  const centers = useSelector((state) => state.workCenterList);
  useEffect(() => {
    dispatch({ type: 'GET_WCS_SAGA' });
  }, [dispatch]);
  const handlerCreateItem = (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.itemName.value,
      partnumber: e.target.partNumber.value,
      description: e.target.itemDescription.value,
      workcenter1: e.target.workcenter1.value,
      descrroute1: e.target.descrroute1.value,
      cycletime1: e.target.cycletime1.value,
      workcenter2: e.target.workcenter2.value,
      descrroute2: e.target.descrroute2.value,
      cycletime2: e.target.cycletime2.value,
      workcenter3: e.target.workcenter3.value,
      descrroute3: e.target.descrroute3.value,
      cycletime3: e.target.cycletime3.value,
    };
    dispatch({ type: 'CREATE_ITEM_SAGA', payload });
  };

  return (
    <div
      className='flex-direction--column formbg padding-horizontal--48'
      id='createItemDiv'>
      <span className='padding-bottom--15'>Create a new item</span>
      <form id='createItem' onSubmit={handlerCreateItem}>
        <div className='field padding-bottom--24'>
          <label htmlFor='itemName'>Item Name</label>
          <input type='text' name='itemName' />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='partNumber'>Part Number</label>
          <input type='text' name='partNumber' />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='itemDescription'>Item Description</label>
          <input type='text' name='itemDescription' />
        </div>

        <div className='field padding-bottom--24'>
          <label>Item Routing</label>
          <div className='work-center-select-titles'>
            <div>Work Centers Selections</div>
            <div>Routing Descriptor</div>
            <div>Cycle Time (min)</div>
          </div>
          {count.map((num, i) => (
            <div className='work-center-select-wrapper' key={`wc${i}`}>
              <div className='work-center-label'>
                <select name={`workcenter${num}`}>
                  <option value='empty' defaultValue>
                    -
                  </option>
                  {centers.map((center) => (
                    <option key={center.id} value={center.code}>
                      [{center.code}] {center.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='work-center-label'>
                <input
                  type='text'
                  className='routingDescription'
                  name={`descrroute${num}`}
                />
              </div>
              <div className='work-center-label'>
                <input
                  type='number'
                  step='0.01'
                  className='cycleTime'
                  name={`cycletime${num}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className='field padding-bottom--24'>
          <input type='submit' name='submit' value='Create' />
        </div>
        {load && <Loader />}
        {message && <Output message={message} error={error} />}
      </form>
    </div>
  );
}

export default CreateItem;
