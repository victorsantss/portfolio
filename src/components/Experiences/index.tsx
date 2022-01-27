import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="03 anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2021~"
          title="Desenvolvedor Freelancer"
          description="Desenvolvimento de sites, landing pages, UX e UI."
        />
        <ExperienceItem
          year="2021~"
          title="Desenvolvedor FullStack"
          description="Desenvolvimento Web com PHP, Vue.js, Javascript e PostgreSQL."
        />
        <ExperienceItem
          year="2020-2021"
          title="Assistente técnico"
          description="Suporte técnico e contábil no grupo de sistemas da contabilidade e escrita de códigos em SQL."
        />
      </section>
    </Container>
  );
}

export default Experiences;
