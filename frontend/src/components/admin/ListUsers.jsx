import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../helpers/fetchJson.jsx';

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    console.log('пришел');
    const listUsers = await fetchJson('/api/user');
    console.log('я сработал в эфекте', listUsers);
    setUsers(listUsers);
  }, []);

  return (
    <div>
      {
        users.map((el, i) => <div key={i}>{el.firstname}<button>Edit</button></div>)
      }
    </div>
  );
}

export default ListUsers;
