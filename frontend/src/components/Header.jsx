import React from 'react';
// import { useTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

function Header() {
  const [t, i18n] = useTranslation('global');

  return (
    <div>
      <h2>{t('header.hello-world')}</h2>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
    </div>
  );
}

export default Header;
