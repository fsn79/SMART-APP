import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import Header from '../Header.jsx';

function Sidebar() {
  // Боковая панель
  return (
    <div id='sidebar'>
      <Logo />
      <Navigation />
      <Header />
    </div>
  );
}

export default Sidebar;
