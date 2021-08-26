import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ModalOrders from './ModalOrders.jsx';

function ListOrders() {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.userList);
  useEffect(() => {
    dispatch({ type: 'GET_ORDERS_LIST' });
  }, [dispatch]);
  return (
    <div className='listTableDiv'>
      <h1>{t('listOrders.title')}</h1>
      {list.length && (
        <div className='wc-item title'>
          <div className='wc-id'>ID</div>
          <div className='listTable'>{t('listOrders.Quantity')}</div>
          <div className='listTable'>{t('listOrders.Promiseddate')}</div>
          <div className='listTable'>{t('listOrders.Priority')}</div>
          <div className='wc-edit'></div>
        </div>
      )}
      {list.length
        ? list.map((el) => <ModalOrders el={el} key={el.id} />)
        : t('listOrders.loading')}
    </div>
  );
}

export default ListOrders;
