import { useEffect, useState } from 'react';
import editIcon from '../../images/editIcon.svg';
import saveIcon from '../../images/saveIcon.svg';

function ItemWorkCenter({ wc }) {
  const [edit, setEdit] = useState(false);

  useEffect(() => {}, [edit]);

  const editHandler = () => {
    // console.log('edit');
    setEdit(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // const { wcCapacity, wcName, wcStatus } = e.target;
    // console.log(wcCapacity.value, wcName.value, wcStatus.value);
    // console.log(wc.id);
    setEdit(false);
  };

  return (
    <>
      {!edit ? (
        <div className={wc.status ? 'wc-item' : 'wc-item close'} key={wc.id}>
          <div className='wc-id'>{wc.id}</div>
          <div className='wc-name'>{wc.name}</div>
          <div className='wc-code'>{wc.code}</div>
          <div className='wc-capacity'>{wc.capacity}</div>
          <div className='wc-status'>{wc.status ? 'Open' : 'Close'}</div>
          <div className='wc-edit'>
            <img onClick={editHandler} src={editIcon} alt='edit' />
          </div>
        </div>
      ) : (
        <form className='wc-item edit' onSubmit={submitHandler}>
          <div className='wc-id'>{wc.id}</div>
          <input
            type='text'
            name='wcName'
            defaultValue={wc.name}
            className='wc-name'
          />
          <input
            type='text'
            name='wcCode'
            defaultValue={wc.code}
            className='wc-code'
          />
          <input
            type='text'
            name='wcCapacity'
            defaultValue={wc.capacity}
            className='wc-capacity'
          />
          <select name='wcStatus' className='wc-status'>
            <option value='open'>Open</option>
            <option value='close'>Close</option>
          </select>
          <div className='wc-edit'>
            <button type='submit'>
              <img src={saveIcon} alt='save' />
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default ItemWorkCenter;
