import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './LanguageContext';
import './css/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage(); 
  const [rotating, setRotating] = useState(false);    //stato di rotazione inziale a falso

  const handleClick = () => {                       //quando il button viene cliccato
    setRotating(true);                                  //attiva la rotazione del button
    const newLang = language === 'en' ? 'it' : 'en';    //se language è en, allora diventerà it, altrimenti (quindi se it) diventerà en
    changeLanguage(newLang);                            //setta language 
    setTimeout(() => {                                  //imposta un ritardo di 200ms
      setRotating(false);                               //per poi disattivare la rotazione del button
    }, 200);                                            
  };

  return (                                 /*button sarà di classe language-switcher.rotate se rotating è vera*/
    <button className={`language-switcher ${rotating ? 'rotate' : ''}`} onClick={handleClick}> {/*altrimenti rimarrà language-switcher*/}
      <img src={t('flagIcon')} alt="Lang Flag" className='flag-ico'/>
    </button>
  )
}

export default LanguageSwitcher