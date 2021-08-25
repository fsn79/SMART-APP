import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Order from './Order.jsx';
import OrderNotSelected from './OrderNotSelected.jsx';

function OrdersListing() {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const currentOrderId = useSelector((state) => state.currentOrderId);
  const { orderList } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: 'GET_ORDERS_LIST', status: 'T-1' });
  }, [dispatch]);
  console.log(orderList);
  // Список доступных задач + текущая активная задача
  return (
    <div className='orders-wrapper'>
      <div className='current-order'>
        <h2>{t('ordersListing.title1')}</h2>
        {currentOrderId ? <Order /> : <OrderNotSelected />}
      </div>
      <div className='avaliable-orders'>
        <h2>{t('ordersListing.title2')}</h2>
      </div>
    </div>
  );
}

export default OrdersListing;
