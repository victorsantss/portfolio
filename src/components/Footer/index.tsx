import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp
} from 'react-icons/ai';
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

        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/victorsantss')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/victor-santss')
            }
          />
          <AiOutlineWhatsApp
            onClick={() =>
              handleRedirect(
                'https://api.whatsapp.com/send?phone=5554996766505&text=Hello%20Victor!'
              )
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
