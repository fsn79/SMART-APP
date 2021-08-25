import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

function CreateWorkCenter() {
  const dispatch = useDispatch();
  const [t] = useTranslation('global');
  const handleSubmitCenter = (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.centerName.value,
      code: e.target.code.value,
      capacity: e.target.capacity.value,
    };
    dispatch({ type: 'WORK_CENTER', payload });
  };
  // Форма создания отдела
  return (
    <div className="flex-direction--column formbg padding-horizontal--48">
      <span className="padding-bottom--15">{t('CreateWorkCenter.title')}</span>
      <form onSubmit={handleSubmitCenter}>
        <div className="field padding-bottom--24">
          <label htmlFor="centerName">{t('CreateWorkCenter.wcn')}</label>
          <input type="text" name="centerName" autoFocus/>
        </div>
        <div className="field padding-bottom--24">
          <label htmlFor="code">{t('CreateWorkCenter.wcc')}</label>
          <input type="text" name="code" />
        </div>
        <div className="field padding-bottom--24">
          <label htmlFor="capacity">{t('CreateWorkCenter.wcCa')}</label>
          <input type="number" step='1' name="capacity" />
        </div>
        <div className="field padding-bottom--24">
          <input type="submit" name="submit" value={t('CreateWorkCenter.btn-create')} />
        </div>
      </form>
</div>
  );
}

export default CreateWorkCenter;
