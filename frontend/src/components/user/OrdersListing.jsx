import Order from './Order.jsx';

function OrdersListing() {
  // Список доступных задач + текущая активная задача
  return (
    <div>
      <Order />
      <div>
        <h2>Available Orders</h2>
      </div>
    </div>
  );
}

export default OrdersListing;
