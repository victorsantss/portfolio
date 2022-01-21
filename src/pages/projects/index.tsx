import Header from '../../components/Header';
import ProjectItems from '../../components/ProjectItems';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectItems
          title="Projeto 01"
          type="project"
          slug="project"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF13z3d5oCYMIbMWVP7__r3ho7Loi-mUOBVg&usqp=CAU"
        />
        <ProjectItems
          title="Projeto 01"
          type="project"
          slug="project"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF13z3d5oCYMIbMWVP7__r3ho7Loi-mUOBVg&usqp=CAU"
        />
        <ProjectItems
          title="Projeto 01"
          type="project"
          slug="project"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF13z3d5oCYMIbMWVP7__r3ho7Loi-mUOBVg&usqp=CAU"
        />
        <ProjectItems
          title="Projeto 01"
          type="project"
          slug="project"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF13z3d5oCYMIbMWVP7__r3ho7Loi-mUOBVg&usqp=CAU"
        />
      </main>
    </ProjectsContainer>
  );
}
