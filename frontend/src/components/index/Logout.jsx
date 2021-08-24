import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../helpers/fetchJson.jsx';

function Logout() {
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    async function logoutUser() {
      const response = await fetchJson('/api/auth/logout');
      setLogout(response.message);
    }
    logoutUser();
  }, []);
  // Выход из системы
  return <div>{ logout }</div>;
}
export default Logout;
