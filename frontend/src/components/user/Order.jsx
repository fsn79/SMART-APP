import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function Order() {
  // Текущая задача
  const [t] = useTranslation('global');
  const { currentOrder } = useSelector((store) => store);
  const priorityName = (priority) => {
    switch (priority) {
      case 3:
        return t('order.high');
      case 2:
        return t('order.medium');
      default:
        return t('order.low');
    }
  };
  const promisedDate = (date) => date.split('T')[0];
  const date = promisedDate(currentOrder['Order.promiseddate']);
  const priority = priorityName(currentOrder['Order.priority']);
  return (
    <div className='current-order'>
      <div className='current-order-header'>
        <div className='header-date'>
        {t('order.promisedDate')}
          <br />
          {date}
        </div>
        <div className='header-title'>
        {t('order.currentOrder')} <br />
        {t('order.number')} {currentOrder['Order.number']}
        </div>
        <div className='header-priority'>
        {t('order.priority')}
          <br />
          {priority}
        </div>
      </div>
      <div className='current-order-wrapper'>
        <div className='current-order-info'>
          <p>
            <strong>{t('order.itemName')} </strong> {currentOrder['Order.itemname']}
          </p>
          <p>
            <strong>{t('order.itemPartnumber')} </strong> {currentOrder['Order.itempartnum']}
          </p>
          <p>
            <strong>{t('order.routingDescriptor')} </strong>
            {currentOrder['Order.Item.descrroute']}
          </p>
        </div>
        <div className='current-order-progress'>
          <h3>{t('order.orderProgress')}</h3>
          <div className='progress-bar'>
            {currentOrder.quantitycomplete}/{currentOrder['Order.quantity']}
          </div>
          <div className='order-complete-info'>
            <div className='good-part-info'>
              <div className='time-to-complete'>{t('order.timeToComplete')}</div>
              <div className='order-report-wrapper'>
                <form>
                  <h4>{t('order.goodPart')}</h4>
                  <input type='number' step='1' min='0' autoFocus/>
                  <button>{t('order.submitGood')}</button>
                </form>
              </div>
            </div>
            <div className='bad-part-info'>
              <div className='quality-info'>{t('order.quality')}</div>
              <div className='order-report-wrapper'>
                <form>
                  <h4>{t('order.reportDefective')}</h4>
                  <input type='number' step='1' min='0'/>
                  <button>{t('order.submitDefect')}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
