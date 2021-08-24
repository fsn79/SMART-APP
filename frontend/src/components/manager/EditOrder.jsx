import { useDispatch } from 'react-redux';

function EditOrder({ order, setActive }) {
  const dispatch = useDispatch();
  function handleSubmitEditOrder(e) {
    e.preventDefault();
    const payload = {
      id: order.id,
      quantity: e.target.quantity.value,
      promiseddate: e.target.promiseddate.value,
      prioroty: e.target.prioroty.value,
    };
    dispatch({ type: 'EDIT_ONE_ORDER', payload });
  }
  // Форма редактирования задачи
  return (
    <div className="flex-direction--column formbg padding-horizontal--48">
      <button className="modal_close" onClick={() => setActive(false)}>&times;</button>
      <span className="padding-bottom--15">Edit Work Order</span>
      <form id="editOrder" onSubmit={handleSubmitEditOrder}>
        <div className="field padding-bottom--24">
          <label htmlFor="plannedQuantity">Edit Work Order planned quantity</label>
          <input type="number" step='1' name="plannedQuantity" defaultValue={order.quantity} />
        </div>
        <div className="field padding-bottom--24">
          <div className="grid">
            <label htmlFor="promisedDate">Edit Work Order promised date</label>
          </div>
          <input type="date" name="promisedDate" defaultValue={order.promiseddate}/>
        </div>
        <label htmlFor="productionPrioroty">Edit Production Prioroty</label>
        <p><select className="selectEditUser" name="prioroty">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select></p>
        <div className="field padding-bottom--24">
          <input type="submit" name="submit" value="Edit" />
        </div>
      </form>
    </div>
  );
}

export default EditOrder;
