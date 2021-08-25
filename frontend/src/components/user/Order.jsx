import { useDispatch, useSelector } from 'react-redux';

function Order() {
  // Текущая задача
  const dispatch = useDispatch();
  const { currentOrder } = useSelector((store) => store);
  const priorityName = (priority) => {
    switch (priority) {
      case 3:
        return 'Hight';
      case 2:
        return 'Medium';
      default:
        return 'Low';
    }
  };
  const promisedDate = (date) => date.split('T')[0];
  const date = promisedDate(currentOrder['Order.promiseddate']);
  const priority = priorityName(currentOrder['Order.priority']);
  const goodPartReport = (e) => {
    e.preventDefault();
    const { num } = e.target;
    dispatch({
      type: 'SUBMIT_PARTS_SAGA',
      payload: { num: num.value, type: 'good', pk: currentOrder.id },
    });
  };
  const badPartReport = (e) => {
    e.preventDefault();
    const { num } = e.target;
    dispatch({
      type: 'SUBMIT_PARTS_SAGA',
      payload: { num: num.value, type: 'bad' },
    });
  };
  return (
    <div className='current-order'>
      <div className='current-order-header'>
        <div className='header-date'>
          Promised date:
          <br />
          {date}
        </div>
        <div className='header-title'>
          Current Order <br />
          number: {currentOrder['Order.number']}
        </div>
        <div className='header-priority'>
          Priority:
          <br />
          {priority}
        </div>
      </div>
      <div className='current-order-wrapper'>
        <div className='current-order-info'>
          <p>
            <strong>Item name: </strong> {currentOrder['Order.itemname']}
          </p>
          <p>
            <strong>Item partnumber: </strong> {currentOrder['Order.itempartnum']}
          </p>
          <p>
            <strong>Routing descriptor: </strong>
            {currentOrder['Order.Item.descrroute']}
          </p>
        </div>
        <div className='current-order-progress'>
          <h3>Order Progress</h3>
          <div className='progress-bar'>
            {currentOrder.quantitycomplete}/{currentOrder['Order.quantity']}
          </div>
          <div className='order-complete-info'>
            <div className='good-part-info'>
              <div className='time-to-complete'>Time to complete (min): 102</div>
              <div className='order-report-wrapper'>
                <form onSubmit={goodPartReport}>
                  <h4>Good part report</h4>
                  <input type='number' name='num' required />
                  <button>Submit</button>
                </form>
              </div>
            </div>
            <div className='bad-part-info'>
              <div className='quality-info'>Quality: 96%</div>
              <div className='order-report-wrapper'>
                <form onSubmit={badPartReport}>
                  <h4>Report defective parts</h4>
                  <input type='number' name='num' required />
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
