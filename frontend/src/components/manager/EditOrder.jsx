import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import closeIcon from '../../images/closeicon.svg';

function EditOrder({ order, setActive }) {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  function handleSubmitEditOrder(e) {
    e.preventDefault();
    const payload = {
      id: order.id,
      quantity: e.target.quantity.value,
      promiseddate: e.target.promiseddate.value,
      prioroty: e.target.prioroty.value,
    };
    dispatch({ type: 'EDIT_ONE_ORDER', payload });
  }
  // Форма редактирования задачи
  return (
    <div
      id='editOrderModal'
      className='modal_content flex-direction--column formbg padding-horizontal--48'>
      <img
        className='modal_close'
        alt='close'
        src={closeIcon}
        onClick={() => setActive(false)}
      />
      <span id='form-header' className='padding-bottom--15'>
      {t('editOrder.editWOrder')}
      </span>
      <form id='editOrder' onSubmit={handleSubmitEditOrder}>
        <div className='field padding-bottom--24'>
          <label htmlFor='plannedQuantity'>{t('editOrder.editWOrderPLQty')}</label>
          <input
            type='number'
            step='1'
            min='0'
            name='plannedQuantity'
            defaultValue={order.quantity}
            autoFocus
          />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='promisedDate'>{t('editOrder.editWOrderPrDate')}</label>
          <input type='date' name='promisedDate' defaultValue={order.promiseddate} />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='productionPrioroty'>{t('editOrder.editProdPrior')}</label>
          <p>
            <select className='selectEditOrder' name='prioroty'>
              <option>{t('editOrder.low')}</option>
              <option>{t('editOrder.medium')}</option>
              <option>{t('editOrder.high')}</option>
            </select>
          </p>
        </div>
        <div className='field padding-bottom--24'>
          <input type='submit' name='submit' value='Edit' />
        </div>
      </form>
    </div>
  );
}

export default EditOrder;
