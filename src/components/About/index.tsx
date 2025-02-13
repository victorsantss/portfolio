import SectionTitle from '../SectionTitle';
import { AboutContainer, Container } from './styles';
import picture from '../../assets/foto.webp';
import { useTranslation } from '../../hooks/useTranslation';

function About() {
  const {
    aboutTitle,
    aboutTextPresentation,
    aboutTextSecondParagraph,
    aboutTextThirdParagraph
  } = useTranslation();
  return (
    <Container>
      <SectionTitle title={aboutTitle} />
      <AboutContainer data-aos="fade-up">
        <p>
          {aboutTextPresentation}
          <br />
          {aboutTextSecondParagraph}
        </p>
        <img src={picture} alt="Foto" />
      </AboutContainer>
    </Container>
  );
}

export default About;
