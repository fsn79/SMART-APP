import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../helpers/Loader.jsx';
import Output from '../../helpers/Output.jsx';

function CreateOrder() {
  // Форма создания задачи
  const dispatch = useDispatch();
  // eslint-disable-next-line object-curly-newline
  const { itemList, load, message, error } = useSelector((store) => store);
  useEffect(() => {
    dispatch({ type: 'GET_ITEMS_LIST_SAGA' });
  }, [dispatch]);
  const randomWorkOrderNumber = (e) => {
    e.target.form.order.value = 'Generate?';
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // eslint-disable-next-line object-curly-newline
    const { itemId, order, quantity, date, priority } = e.target;
    const itemIndex = itemList.findIndex((el) => el.id === +itemId.value);
    const payload = {
      itemId: itemId.value,
      itemName: itemList[itemIndex].name,
      partnumber: itemList[itemIndex].partnumber,
      order: order.value,
      quantity: quantity.value,
      date: date.value,
      priority: priority.value,
    };
    dispatch({ type: 'CREATE_ORDER_SAGA', payload });
  };
  return (
    <div className='flex-direction--column formbg padding-horizontal--48'>
      <span className='padding-bottom--15'>Create a New Work Order</span>
      <form id='createOrder' onSubmit={submitHandler}>
        <div className='field padding-bottom--24'>
          <label htmlFor='itemId'>Item Name</label>
          <select name='itemId' required>
            <option value='empty'>-</option>
            {itemList.map((item) => (
              <option value={item.id} key={item.partnumber}>
                {item.name} ({item.partnumber})
              </option>
            ))}
          </select>
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='order'>
            Enter Work Order number or click autogenerate
          </label>
          <div className='flex-3-2'>
            <div>
              <input type='text' name='order' required />
            </div>
            <div>
              <button type='button' onClick={randomWorkOrderNumber}>
                Generate
              </button>
            </div>
          </div>
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='quantity'>Enter Work Order planned quantity</label>
          <input type='number' step='0.01' name='quantity' required />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='date'>Enter Work Order promised date</label>
          <input type='date' name='date' required />
        </div>
        <label htmlFor='priority'>Production Prioroty</label>
        <p>
          <select name='priority' required>
            <option defaultValue value='low'>
              Low
            </option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </p>
        <div className='field padding-bottom--24'>
          <button type='submit'>Create</button>
        </div>
      </form>
      {load && <Loader />}
      {message && <Output message={message} error={error} />}
    </div>
  );
}

export default CreateOrder;
