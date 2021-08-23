import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editIcon from '../../images/editIcon.svg';

function ListWorkCenters() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.workCenterList);
  useEffect(() => {
    dispatch({ type: 'GET_WCS' });
  }, [dispatch]);
  const editHandler = () => {
    console.log('here');
  };

  return (
    <div className='wc-list'>
      <h1>Work Centers List</h1>
      {list.length && <div className='wc-item title'>
      <div className='wc-id'>ID</div>
      <div className='wc-name'>Work Center Name</div>
      <div className='wc-capacity'>Capacity</div>
      <div className='wc-status'>Status</div>
      <div className='wc-edit'></div>
        </div>}
      {list.length
        ? list.map((el) => (
            <div className={el.status ? 'wc-item' : 'wc-item close'} key={el.id}>
              <div className='wc-id'>{el.id}</div>
              <div className='wc-name'>{el.name}</div>
              <div className='wc-capacity'>{el.capacity}</div>
              <div className='wc-status'>{el.status ? 'Open' : 'Close'}</div>
              <div className='wc-edit'>
                <img onClick={editHandler} src={editIcon} alt='edit' />
              </div>
            </div>))
        : 'Loading...'}
    </div>
  );
}

export default ListWorkCenters;
