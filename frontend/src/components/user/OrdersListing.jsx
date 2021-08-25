import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Order from './Order.jsx';
import OrderNotSelected from './OrderNotSelected.jsx';
import OrdersListingItem from './OrdersListingItem.jsx';

function OrdersListing() {
  const dispatch = useDispatch();
  const { currentOrderId, orderList, wccode } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: 'GET_ORDERS_LIST', status: wccode });
  }, [dispatch, wccode]);
  // console.log(orderList);
  // Список доступных задач + текущая активная задача
  return (
    <div className='orders-wrapper'>
      {currentOrderId ? <Order /> : <OrderNotSelected />}
      <div className='avaliable-orders'>
        <h2>Pending orders</h2>
        <div className='orders-listing-wrapper'>
          <div className='orders-title'>
            <div className='orders-title-id'>ID</div>
            <div className='orders-title-priority'>Priority</div>
            <div className='orders-title-number'>Order Number</div>
            <div className='orders-title-date'>Promised Date</div>
            <div className='orders-title-ipn'>Item Partnumber</div>
            <div className='orders-title-iname'>Item Name</div>
            <div className='orders-title-button'></div>
          </div>
          {orderList.map((order) => (
            <OrdersListingItem order={order} key={order.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersListing;
