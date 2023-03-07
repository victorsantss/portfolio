import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/logo.png';
import getYearsOld from '../../utils/getYearsOld';
import { useTranslation } from '../../hooks/useTranslation';

function HomeHero() {
  const yearsOld = getYearsOld();
  const {
    homeHeroTitle1,
    homeHeroTitle2,
    homeHeroCard1Title,
    homeHeroCard1Subtitle,
    homeHeroCard1Entry1,
    homeHeroCard1Entry2,
    homeHeroCard1Value1,
    homeHeroCard1Value2,
    homeHeroCard2Subtitle,
    homeHeroCard2Entry1,
    homeHeroCard2Entry2,
    homeHeroCard2Value1,
    homeHeroCard2Value2
  } = useTranslation();
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Foto" />
      <div>
        <TextContainer>
          <h1>{homeHeroTitle1}</h1>
          <h2>{homeHeroTitle2}</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//{homeHeroCard1Title}</span>
            <span className="purple">{homeHeroCard1Subtitle}</span> {'\u007B'}
            <div>
              {homeHeroCard1Entry1}:{' '}
              <span className="blue">{homeHeroCard1Value1},</span>
            </div>
            <div>
              {homeHeroCard1Entry2}:{' '}
              <span className="blue">
                {yearsOld} {homeHeroCard1Value2}
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">{homeHeroCard2Subtitle}</span> {'\u007B'}
            <div>
              {homeHeroCard2Entry1}:{' '}
              <span className="blue">{homeHeroCard2Value1},</span>
            </div>
            <div>
              {homeHeroCard2Entry2}:{' '}
              <span className="blue">{homeHeroCard2Value2}</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
