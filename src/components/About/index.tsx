import SectionTitle from '../SectionTitle';
import { AboutContainer, Container } from './styles';
import picture from '../../assets/foto.webp';
import getYearsOld from '../../utils/getYearsOld';
import { useTranslation } from '../../hooks/useTranslation';

function About() {
  const yearsOld = getYearsOld();
  const {
    aboutTitle,
    aboutTextPresentationStart,
    aboutTextPresentationEnd,
    aboutTextSecondParagraph,
    aboutTextThirdParagraph
  } = useTranslation();
  return (
    <Container>
      <SectionTitle title={aboutTitle} />
      <AboutContainer data-aos="fade-up">
        <p>
          {aboutTextPresentationStart} {yearsOld} {aboutTextPresentationEnd}
          <br />
          {aboutTextSecondParagraph}
          <br />
          {aboutTextThirdParagraph}
        </p>
        <img src={picture} alt="Foto" />
      </AboutContainer>
    </Container>
  );
}

export default About;
