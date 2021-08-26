import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalItems from './ModalItems.jsx';

function ListItems() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.itemList);
  useEffect(() => {
    dispatch({ type: 'GET_ITEMS_LIST' });
  }, []);
  return (
    <div className='listTableDiv'>
      <h1>Items List</h1>
      {list.length && (
        <div className='wc-item title'>
          <div className='wc-id'>ID</div>
          <div className='listTable'>Name</div>
          <div className='listTable'>Part Number</div>
          <div className='listTable'>Description</div>
          <div className='wc-edit-items'></div>
        </div>
      )}
      {list.length
        ? list.map((el) => <ModalItems el={el} key={el.id} />)
        : 'Loading...'}
    </div>
  );
}

export default ListItems;
