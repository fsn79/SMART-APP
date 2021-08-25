function Order() {
  // Текущая задача
  return (
    <div className='current-order'>
      <div className='current-order-header'>
        <div className='header-date'>
          Promised date:
          <br />
          26.11.2012
        </div>
        <div className='header-title'>
          Current Order <br />
          number: RMC-127
        </div>
        <div className='header-priority'>
          Priority:
          <br />
          Low
        </div>
      </div>
      <div className='current-order-wrapper'>
        <div className='current-order-info'>
          <p>
            <strong>Item name: </strong> Remote Control
          </p>
          <p>
            <strong>Item partnumber: </strong> RC-5
          </p>
          <p>
            <strong>Routing descriptor: </strong> Create rc plate
          </p>
        </div>
        <div className='current-order-progress'>
          <h3>Order Progress</h3>
          <div className='progress-bar'>10/100</div>
          <div className='order-complete-info'>
            <div className='good-part-info'>
              <div className='time-to-complete'>Time to complete (min): 102</div>
            </div>
            <div className='bad-part-info'>
              <div className='quality-info'>Quality: 96%</div>
            </div>
          </div>
          <div className='order-report-wrapper'>
            <form>
              <h4>Good part report</h4>
              <input type='text' />
              <button>Submit</button>
            </form>
            <form>
              <h4>Report defective parts</h4>
              <input type='text' />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
