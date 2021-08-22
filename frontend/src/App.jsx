import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar.jsx';
import Login from './components/index/Login.jsx';
import CreateWorkCenter from './components/admin/CreateWorkCenter.jsx';
import CreateUser from './components/admin/CreateUser.jsx';
import Logout from './components/index/Logout.jsx';
import EditUser from './components/admin/EditUser.jsx';
import EditWorkCenter from './components/admin/EditWorkCenter.jsx';
import CreateOrder from './components/manager/CreateOrder.jsx';
import CreateItem from './components/manager/CreateItem.jsx';
import OrdersListing from './components/user/OrdersListing.jsx';
import EditItem from './components/manager/EditItem.jsx';
import EditOrder from './components/manager/EditOrder.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div id="content">
     <div className="inner">
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/logout' exact>
            <Logout />
          </Route>
          <Route path='/create-work-center' exact>
            <CreateWorkCenter />
          </Route>
          <Route path='/create-user' exact>
            <CreateUser />
          </Route>
          <Route path='/edit-user' exact>
            <EditUser />
          </Route>
          <Route path='/edit-work-center' exact>
            <EditWorkCenter />
          </Route>
          <Route path='/create-item' exact>
            <CreateItem />
          </Route>
          <Route path='/edit-item' exact>
            <EditItem />
          </Route>
          <Route path='/edit-order' exact>
            <EditOrder />
          </Route>
          <Route path='/create-order' exact>
            <CreateOrder />
          </Route>
          <Route path='/orders' exact>
            <OrdersListing />
          </Route>
        </Switch>
        </div>
    </div>
      </BrowserRouter>
      </div>

  );
}

export default App;
