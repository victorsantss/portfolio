import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Knowledges from '../components/Knowledges';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
      <HomeContainer>
        <Header />
        <main className="container">
          <HomeHero />
          <Experiences />
          <Projects />
          <Knowledges />
          <ContactForm />
        </main>
      </HomeContainer>
    </div>
  );
}
