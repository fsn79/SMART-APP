import { Link } from 'react-router-dom';

function Navigation() {
  // Боковая панель
  return (
    <nav id="nav">
       <ul >
      <Link to='/edit-work-center'><li><a className='link'>Edit Work Center</a></li></Link>
      <Link to='/create-user'><li><a className='link'>Create User</a></li></Link>
      <Link to='/edit-user'><li><a className='link'>Edit User</a></li></Link>
      <Link to='/create-item'><li><a className='link'>Create Item</a></li></Link>
      <Link to='/edit-item'><li><a className='link'>Edit Item</a></li></Link>
      <Link to='/create-order'><li><a className='link'>Create Order</a></li></Link>
      <Link to='/orders'><li><a className='link' >Orders</a></li></Link>
      <Link to='/logout'><li><a className='link'>Logout</a></li></Link>
      <Link to='/create-work-center'><li><a className='link'>Create work center</a></li></Link>
      </ul>
    </nav>
  );
}

export default Navigation;
