import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalOrders from './ModalOrders.jsx';

function ListOrders() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.userList);
  useEffect(() => {
    dispatch({ type: 'GET_ORDER_LIST' });
  }, [dispatch]);
  return (
    <div className='listTableDiv'>
      <h1>Orders List</h1>
      {
        list.length && <div className='wc-item title'>
          <div className='wc-id'>ID</div>
          <div className='listTable'>Quantity</div>
          <div className='listTable'>Promiseddate</div>
          <div className='listTable'>Priority</div>
          <div className='wc-edit'></div>
        </div>
      }
      {
        list.length
          ? list.map((el) => <ModalOrders el={el} key={el.id} />)
          : 'Loading...'
      }
    </div>
  );
}

export default ListOrders;
