// src/components/LanguageSwitcher.js
import { useLanguage } from '../context/LanguageContext';
import logoLA from '../assets/laos.png';
import logoVN from '../assets/vietnam.png'

const LanguageSwitcher = () => {
  const { changeLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => changeLanguage('la')}><img src={logoLA} width={100} height={100} alt="Logo" /></button>
      <button onClick={() => changeLanguage('vi')}><img src={logoVN} width={100} height={100} alt="Logo" /></button>
    </div>
  );
};

export default LanguageSwitcher;
