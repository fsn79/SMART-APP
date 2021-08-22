import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../helpers/fetchJson'

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const listUsers = await fetchJson('/api/user');
    setUsers(listUsers)
  }, [])

  return (
    <div>
      {
        users.map((el , i) => {
          return (
          <div key={i}>
            {el.firstname}
            <button>Edit</button>
          </div>
          )
        })
      }
    </div>
  );
}

export default ListUsers;
