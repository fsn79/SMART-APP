import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalUser from './ModalUser.jsx';

// import { fetchJson } from '../../helpers/fetchJson.jsx';

function ListUsers() {
  // const [modalActive, setModalActive] = useState(false);
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
  // const editHandler = () => {
  //   console.log('here');
  // };

  return (
    <div className='listTableDiv'>
      <h1>Employees List</h1>
      {list.length && <div className='wc-item title'>
      <div className='wc-id'>ID</div>
      <div className='listTable'>Lastname</div>
      <div className='listTable'>Firstname</div>
      <div className='listTableEmail'>Email</div>
      <div className='listTable'>Work Center</div>
      <div className='wc-edit'></div>
        </div>}
      {list.length
        ? list.map((el) => <ModalUser el={el} key={el.id} />)
        : 'Loading...'}
        </div>
  );
}

export default ListUsers;
