import { Link } from 'react-router-dom';

function Navigation() {
  // Боковая панель
  return (
    <div>
      <Link to='/create-work-center'>Create Work Center</Link>
      <Link to='/edit-work-center'>Edit Work Center</Link>
      <Link to='/create-user'>Create User</Link>
      <Link to='/edit-user'>Edit User</Link>
      <Link to='/create-item'>Create Item</Link>
      <Link to='/edit-item'>Edit Item</Link>
      <Link to='/create-order'>Create Order</Link>
      <Link to='/orders'>Orders</Link>
      <Link to='/logout'>Logout</Link>
    </div>
  );
}

export default Navigation;
