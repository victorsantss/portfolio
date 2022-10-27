import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/logo.png';
import getYearsOld from '../../utils/getYearsOld';

function HomeHero() {
  const yearsOld = getYearsOld();
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Victor</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Sobrenome: <span className="blue">Santos,</span>
            </div>
            <div>
              Idade: <span className="blue">{yearsOld} anos</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Especialidades</span> {'\u007B'}
            <div>
              Front-end: <span className="blue">React / Vue,</span>
            </div>
            <div>
              Back-end: <span className="blue">PHP</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
