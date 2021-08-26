import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import closeIcon from '../../images/closeicon.svg';

function EditUser({ user, setActive }) {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  function handleSubmitEditUser(e) {
    e.preventDefault();
    const payload = {
      id: user.id,
      lastname: e.target.lastname.value,
      firstname: e.target.firstname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      jobtitle: e.target.jobtitle.value,
      workcenterid: e.target.workcenter.value,
      status: e.target.status.value,
    };
    dispatch({ type: 'EDIT_ONE_USER', payload });
  }
  // Форма редактирования пользователя
  return (
    <div
      id='editUserModal'
      className='modal_content flex-direction--column formbg padding-horizontal--48'>
      <img
        className='modal_close'
        alt='close'
        src={closeIcon}
        onClick={() => setActive(false)}
      />
      <span id='form-header' className='padding-bottom--15'>
        {t('editUser.title')}
      </span>
      <form id='editUser' onSubmit={handleSubmitEditUser}>
        <div className='field padding-bottom--24'>
          <label htmlFor='lastname'>{t('editUser.eLastname')}</label>
          <input
            type='text'
            name='lastname'
            defaultValue={user.lastname}
            autoFocus
          />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='firstname'>{t('editUser.eFirstname')}</label>
          <input type='text' name='firstname' defaultValue={user.firstname} />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='email'>{t('editUser.eEmail')}</label>
          <input type='email' name='email' defaultValue={user.email} />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='password'>{t('editUser.ePassword')}</label>
          <input type='password' name='password' defaultValue={user.password} />
        </div>
        <div className='grid--50-50'>
          <label htmlFor='jobtitle'>{t('editUser.eJobtitle')}</label>
        </div>
        <p>
          <select className='selectEditUser' name='jobtitle'>
            <option>{t('editUser.oManager')}</option>
            <option>{t('editUser.oWorker')}</option>
          </select>
        </p>
        <div className='grid--50-50'>
          <label htmlFor='workcenter'>{t('editUser.eWC')}</label>
        </div>
        <p>
          <select className='selectEditUser' name='workcenter'>
            <option>{t('editUser.oManager')}</option>
            <option>{t('editUser.oWorker')}</option>
          </select>
        </p>
        <div className='grid--50-50'>
          <label htmlFor='status'>{t('editUser.eStatus')}</label>
        </div>
        <p>
          <select className='selectEditUser' name='status'>
            <option>{t('editUser.eActive')}</option>
            <option>{t('editUser.eRetired')}</option>
          </select>
        </p>
        <div className='field padding-bottom--24'>
          <input type='submit' name='submit' value={t('editUser.btn-edit')} />
        </div>
      </form>
    </div>
  );
}

export default EditUser;
