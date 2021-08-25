import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemWorkCenter from './ItemWorkCenter.jsx';

function ListWorkCenters() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.workCenterList);
  useEffect(() => {
    dispatch({ type: 'GET_WCS_SAGA' });
  }, [dispatch]);

  return (
    <div className='listTableDiv'>
      <h1>Work Centers List</h1>
      {list.length !== 0 && (
        <div className='wc-item title'>
          <div className='wc-id'>ID</div>
          <div className='listTable'>Work Center Name</div>
          <div className='listTable'>Code</div>
          <div className='listTable'>Capacity</div>
          <div className='listTable'>Status</div>
          <div className='wc-edit'></div>
        </div>
      )}
      {list.length !== 0
        ? list.map((el) => <ItemWorkCenter wc={el} key={el.id} />)
        : 'Loading...'}
    </div>
  );
}

export default ListWorkCenters;
