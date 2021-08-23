import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchJson } from '../../helpers/fetchJson.jsx';
import editIcon from '../../images/editIcon.svg';

function ListUsers() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function fetchAndSetUsers() {
  //     const listUsers = await fetchJson('/api/user');
  //     setUsers(listUsers);
  //   }

  //   fetchAndSetUsers();
  // }, []);

  const dispatch = useDispatch();
  const list = useSelector((state) => state.userList);
  console.log(list);
  useEffect(() => {
    dispatch({ type: 'GET_USERS_LIST' });
  }, [dispatch]);
  const editHandler = () => {
    console.log('here');
  };

  return (
    <div className='wc-list'>
      <h1>Employees List</h1>
      {list.length && <div className='wc-item title'>
      <div className='wc-id'>ID</div>
      <div className='wc-name'>Lastname</div>
      <div className='wc-capacity'>Firstname</div>
      <div className='wc-status'>Email</div>
      <div className='wc-status'>Password</div>
      <div className='wc-status'>Jobtitle</div>
      <div className='wc-status'>Work Center</div>
      <div className='wc-status'>Status</div>
      <div className='wc-edit'></div>
        </div>}
      {list.length
        ? list.map((el) => (
            <div className={el.status ? 'wc-item' : 'wc-item close'} key={el.id}>
              <div className='wc-id'>{el.id}</div>
              <div className='wc-name'>{el.lastname}</div>
              <div className='wc-capacity'>{el.firstname}</div>
              <div className='wc-capacity'>{el.email}</div>
              <div className='wc-capacity'>{el.password}</div>
              <div className='wc-capacity'>{el.jobtitle}</div>
              <div className='wc-capacity'>{el.workcenterid}</div>
              <div className='wc-status'>{el.status ? 'Active' : 'Retired'}</div>
              <div className='wc-edit'>
                <img onClick={editHandler} src={editIcon} alt='edit' />
              </div>
            </div>))
        : 'Loading...'}
    </div>
  );
}

export default ListUsers;
