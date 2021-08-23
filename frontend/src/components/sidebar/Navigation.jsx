import { Link } from 'react-router-dom';

function Navigation() {
  // Боковая панель
  return (
    <nav id="nav">
      <ul >
        <li><Link className='link' to='/edit-work-center'>Edit Work Center</Link></li>
        <li><Link className='link' to='/create-user'>Create User</Link></li>
        <li><Link className='link' to='/list-users'>Edit User</Link></li>
        <li><Link className='link' to='/create-item'>Create Item</Link></li>
        <li><Link className='link' to='/edit-item'>Edit Item</Link></li>
        <li><Link className='link' to='/create-order'>Create Order</Link></li>
        <li><Link className='link' to='/orders'>Orders</Link></li>
        <li><Link className='link' to='/logout'>Logout</Link></li>
        <li><Link className='link' to='/create-work-center'>Create work center</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
