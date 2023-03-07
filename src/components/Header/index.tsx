import { useTranslation } from '../../hooks/useTranslation';
import LanguageSwitcher from '../LanguageSwitcher';
import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  const { headerTitle1, headerTitle2 } = useTranslation();

  return (
    <Container>
      <ul>
        <NavLink title={headerTitle1} path="/" />
        <NavLink title={headerTitle2} path="/projects" includes />
        <LanguageSwitcher />
      </ul>
    </Container>
  );
}

export default Header;
