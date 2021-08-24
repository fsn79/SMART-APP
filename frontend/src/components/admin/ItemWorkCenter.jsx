import { useState } from 'react';
import editIcon from '../../images/editIcon.svg';
import Modal from './Modal.jsx';
import EditWorkCenter from './EditWorkCenter.jsx';

function ItemWorkCenter({ wc }) {
  const [modalActive, setModalActive] = useState(false);

  return (
        <div className={wc.status ? 'wc-item' : 'wc-item close'} key={wc.id}>
          <div className='wc-id'>{wc.id}</div>
          <div className='wc-name'>{wc.name}</div>
          <div className='wc-code'>{wc.code}</div>
          <div className='wc-capacity'>{wc.capacity}</div>
          <div className='wc-status'>{wc.status ? 'Open' : 'Close'}</div>
          <div className='wc-edit'>
            <img onClick={() => setModalActive(true) } src={editIcon} alt='edit' />
            <Modal active={modalActive} setActive={setModalActive}>
          <EditWorkCenter center={ wc } setActive={setModalActive} />
        </Modal>
          </div>
        </div>
  );
}

export default ItemWorkCenter;
