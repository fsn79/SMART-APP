import { useDispatch } from 'react-redux';

function OrdersListingItem({ order }) {
  const dispatch = useDispatch();
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
  const buttonHandler = () => {
    console.log('button-click');
    dispatch({ type: 'TAKE_ORDER_IN_WORK_SAGA', orderId: order.id });
  };
  const date = promisedDate(order.promiseddate);
  const priority = priorityName(order.priority);
  return (
    <div className={`order-item ${priority.toLocaleLowerCase()}`}>
      <div className='order-id'>{order.id}</div>
      <div className='order-priority'>{priority}</div>
      <div className='order-number'>{order.number}</div>
      <div className='order-date'>{date}</div>
      <div className='order-ipn'>{order.itempartnum}</div>
      <div className='order-iname'>{order['Item.name']}</div>
      <div className='order-button'>
        <button type='button' onClick={buttonHandler}>
          Take to work
        </button>
      </div>
    </div>
  );
}

export default OrdersListingItem;
