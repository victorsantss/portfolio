import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        <ProjectItem
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF13z3d5oCYMIbMWVP7__r3ho7Loi-mUOBVg&usqp=CAU"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF13z3d5oCYMIbMWVP7__r3ho7Loi-mUOBVg&usqp=CAU"
          title="Projeto 02"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF13z3d5oCYMIbMWVP7__r3ho7Loi-mUOBVg&usqp=CAU"
          title="Projeto 03"
          type="Website"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
