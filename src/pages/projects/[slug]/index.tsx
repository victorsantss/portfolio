import Header from '../../../components/Header';
import ProjectBanner from '../../../components/ProjectBanner';
import { ProjectContainer } from '../../../styles/ProjectStyles';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <ProjectBanner
        title="Project 01"
        type="project"
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF13z3d5oCYMIbMWVP7__r3ho7Loi-mUOBVg&usqp=CAU"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          assumenda, quis, ullam voluptatem consequatur esse similique incidunt
          illum amet numquam nobis quae blanditiis est. Voluptatum facilis enim
          quasi necessitatibus recusandae.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
