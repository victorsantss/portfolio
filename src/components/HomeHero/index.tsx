/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/foto.webp';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Victor</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Sobrenome: <span className="blue">Santos,</span>
            </div>
            <div>
              Idade: <span className="blue">24 anos</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
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
