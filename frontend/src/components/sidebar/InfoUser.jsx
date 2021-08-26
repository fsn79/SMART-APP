import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function InfoUser() {
  const [t] = useTranslation('global');
  const {
    user,
    jobtitle,
    wccode,
    userlastname,
  } = useSelector((state) => state);
  console.log(user, jobtitle, wccode);

  return (
  <>
    { user && (
      jobtitle === 'admin' || 'Manager'
        ? <>
            <div className='info-user'>
              <p className='info-user-p'><span className='info-user-span'>{t('infoUser.name')}: </span> {user} {userlastname}</p>
              <p className='info-user-p'><span className='info-user-span'>{t('infoUser.jobtitle')}: </span> {jobtitle}</p>
            </div>
          </>
        : <>
          <div className='info-user'>
            <p className='info-user-p'><span className='info-user-span'>{t('infoUser.name')}: </span> {user} {userlastname}</p>
            <p className='info-user-p'><span className='info-user-span'>{t('infoUser.jobtitle')}: </span> {jobtitle}</p>
            <p className='info-user-p'><span className='info-user-span'>{t('infoUser.wc')}: </span>{wccode}</p>
          </div>
        </>
    )}
  </>
  );
}

export default InfoUser;
