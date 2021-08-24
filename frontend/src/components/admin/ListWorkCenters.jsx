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
    <div className='wc-list'>
      <h1>Work Centers List</h1>
      {list.length !== 0 && (
        <div className='wc-item title'>
          <div className='wc-id'>ID</div>
          <div className='wc-name'>Work Center Name</div>
          <div className='wc-capacity'>Capacity</div>
          <div className='wc-status'>Status</div>
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
