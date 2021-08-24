import React, { useState } from 'react';
import Modal from './Modal.jsx';
import editIcon from '../../images/editIcon.svg';
import EditUser from './EditUser.jsx';

function ModalUser({ el }) {
  console.log(el);
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={el.status ? 'wc-item' : 'wc-item close'} key={el.id}>
      <div className='wc-id'>{el.id}</div>
      <div className='listTable'>{el.lastname}</div>
      <div className='listTable'>{el.firstname}</div>
      <div className='listTableEmail'>{el.email}</div>
      <div className='listTable'>{el.workcenterid}</div>
      <div className='wc-edit'>
        <img onClick={() => setModalActive(true)} src={editIcon} alt='edit' />
        <Modal active={modalActive} setActive={setModalActive}>
          <EditUser user={el} setActive={setModalActive} />
        </Modal>
      </div>
    </div>);
}

export default ModalUser;
