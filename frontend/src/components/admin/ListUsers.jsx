import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../helpers/fetchJson.jsx';

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchAndSetUsers() {
      const listUsers = await fetchJson('/api/user');
      setUsers(listUsers);
    }

    fetchAndSetUsers();
  }, []);

  return (
    <div>
      {
        users.map((el) => <div key={el.id}>{el.firstname}<button>Edit</button></div>)
      }
    </div>
  );
}

export default ListUsers;
