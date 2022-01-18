import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';

export default function Home() {
  return (
    <div>
      <HomeContainer>
        <Header />
        <main className="container">
          <HomeHero />
        </main>
      </HomeContainer>
    </div>
  );
}
