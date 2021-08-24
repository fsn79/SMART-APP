import './Modal.css';
import React from 'react';

function Modal({ active, setActive, children }) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(true)}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
       {children}
      </div>
    </div>
  );
}

export default Modal;
