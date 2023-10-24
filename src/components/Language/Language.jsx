import i18next from 'i18next';
import React, { useEffect, useState } from 'react';
import { SelectContainerLanguage, SelectLanguage } from './Language.styled';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ua');

  useEffect(() => {
    const saveLanguage = localStorage.getItem('chosenLanguage');
    if (saveLanguage) {
      i18next.changeLanguage(saveLanguage);
      setSelectedLanguage(saveLanguage);
    }
  }, []);

  const changeLanguage = (e) => {
    const language = e.target.value;
    i18next.changeLanguage(language);
    localStorage.setItem('chosenLanguage', language);
    setSelectedLanguage(language);
  };

  return (
    <SelectContainerLanguage>
      <label>EN
      <SelectLanguage type="radio" id="en" name="language" value="en" onChange={changeLanguage} checked={selectedLanguage === "en"}/>
      </label>
      <label>UA
      <SelectLanguage type="radio" id="ua" name="language" value="ua" onChange={changeLanguage} checked={selectedLanguage === "ua"}/>
      </label> 
    </SelectContainerLanguage>
  );
};

export default Language;
