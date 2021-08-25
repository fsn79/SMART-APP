import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Order from './Order.jsx';
import OrderNotSelected from './OrderNotSelected.jsx';
import OrdersListingItem from './OrdersListingItem.jsx';

function OrdersListing() {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const {
    currentOrderId, orderList, wccode, iduser,
  } = useSelector(
    (state) => state,
  );
  useEffect(() => {
    dispatch({ type: 'GET_ORDERS_LIST_SAGA', code: wccode });
    dispatch({
      type: 'GET_ORDER_IN_WORK_SAGA',
      payload: { userId: iduser, wcCode: wccode },
    });
  }, [dispatch, currentOrderId, iduser, wccode]);

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
      {/* <div className='current-order'>
        <h2>{t('ordersListing.title1')}</h2>
        {currentOrderId ? <Order /> : <OrderNotSelected />}
      </div>
      <div className='avaliable-orders'>
        <h2>{t('ordersListing.title2')}</h2> */}
      </div>
    </div>
  );
}

export default OrdersListing;
