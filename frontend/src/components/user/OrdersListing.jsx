import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Order from './Order.jsx';
import OrderNotSelected from './OrderNotSelected.jsx';

function OrdersListing() {
  const dispatch = useDispatch();
  const currentOrderId = useSelector((state) => state.currentOrderId);
  useEffect(() => {}, [dispatch]);
  // Список доступных задач + текущая активная задача
  return (
    <div className='orders-wrapper'>
      <div className='current-order'>
        <h2>Current Order</h2>
        {currentOrderId ? <Order /> : <OrderNotSelected />}
      </div>
      <div className='avaliable-orders'>
        <h2>Available Orders</h2>
      </div>
    </div>
  );
}

export default OrdersListing;
