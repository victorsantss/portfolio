import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';

export default function Home() {
  return (
    <div>
      <HomeContainer>
        <Header />
        <main className="container">
          <HomeHero />
          <Experiences />
        </main>
      </HomeContainer>
    </div>
  );
}
