import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useState } from 'react';

function Navigation() {
  // const [sidebar, setSidebar] = useState(<nav id='nav' />);
  const { jobtitle } = useSelector((state) => state);

  if (jobtitle === 'admin') {
    return (
      <nav id='nav'>
        <ul>
          <li>
            <Link className='link' to='/create-user'>
              Create User
            </Link>
          </li>
          <li>
            <Link className='link' to='/create-work-center'>
              Create work center
            </Link>
          </li>
          <li>
            <Link className='link' to='/list-users'>
              Edit User
            </Link>
          </li>
          <li>
            <Link className='link' to='/edit-work-center'>
              Edit Work Center
            </Link>
          </li>
          <li>
            <Link className='link' to='/logout'>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  if (jobtitle === 'Manager') {
    return (
      <nav id='nav'>
        <ul>
          <li>
            <Link className='link' to='/create-order'>
              Create Order
            </Link>
          </li>
          <li>
            <Link className='link' to='/create-item'>
              Create Item
            </Link>
          </li>
          <li>
            <Link className='link' to='/edit-order'>
              Edit Order
            </Link>
          </li>
          <li>
            <Link className='link' to='/edit-item'>
              Edit Item
            </Link>
          </li>
          <li>
            <Link className='link' to='/logout'>
              Logout
            </Link>
          </li>
        </ul>
      </ nav>
    );
  }
  if (jobtitle === 'Worker') {
    return (
      <nav id='nav'>
        <ul>
          <li>
            <Link className='link' to='/create-item'>
              Create Item
            </Link>
          </li>
          <li>
            <Link className='link' to='/edit-order'>
              Edit Order
            </Link>
          </li>
          <li>
            <Link className='link' to='/edit-item'>
              Edit Item
            </Link>
          </li>
          <li>
            <Link className='link' to='/logout'>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav id='nav'>
    </nav>
  );
}

export default Navigation;
