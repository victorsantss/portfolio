import SectionTitle from '../SectionTitle';
import { AboutContainer, Container } from './styles';
import picture from '../../assets/foto.webp';
import getYearsOld from '../../utils/getYearsOld';

function About() {
  const yearsOld = getYearsOld();
  return (
    <Container>
      <SectionTitle title="Sobre" />
      <AboutContainer data-aos="fade-up">
        <p>
          Meu nome é Victor, tenho {yearsOld} anos e atualmente sou
          desenvolvedor FullStack em uma empresa de marketing digital e
          markeplaces, também atuo como Web Developer Freelancer. <br />
          Sou formado em Ciências Contábeis e estou cursando Análise e
          Desenvolvimento de Sistemas.
          <br />
          Meu foco atual é me especializar em Front-end, utilizando React e
          aplicando UX/UI.
        </p>
        <img src={picture} alt="Foto" />
      </AboutContainer>
    </Container>
  );
}

export default About;
