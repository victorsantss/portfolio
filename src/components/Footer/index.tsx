import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
      </div>
      <section>
        <AiOutlineGithub
          onClick={() => handleRedirect('https://github.com/victorsantss')}
        />
        <AiFillLinkedin
          onClick={() =>
            handleRedirect('https://www.linkedin.com/in/victor-santss')
          }
        />
      </section>
    </Container>
  );
}

export default Footer;
