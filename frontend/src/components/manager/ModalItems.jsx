import React, { useState } from 'react';
import Modal from '../admin/Modal.jsx';
import editIcon from '../../images/editIcon.svg';
import EditItem from './EditItem.jsx';

function ModalItems({ el }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={el.status ? 'wc-item' : 'wc-item close'} key={el.id}>
      <div className='wc-id'>{el.id}</div>
      <div className='listTable'>{el.name}</div>
      <div className='listTable'>{el.partnumber}</div>
      <div className='listTable'>{el.description}</div>
      <div className='wc-edit'>
        <img onClick={() => setModalActive(true)} src={editIcon} alt='edit' />
        <Modal active={modalActive} setActive={setModalActive}>
          <EditItem order={el} setActive={setModalActive} />
        </Modal>
      </div>
    </div>
  );
}

export default ModalItems;
