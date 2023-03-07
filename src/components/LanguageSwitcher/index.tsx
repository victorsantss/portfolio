import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Container } from './styles';

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <Container>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">🇺🇸 English</option>
        <option value="pt">🇧🇷 Portuguese</option>
      </select>
    </Container>
  );
}

export default LanguageSwitcher;
