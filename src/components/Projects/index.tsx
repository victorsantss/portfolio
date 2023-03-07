import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

interface Iproject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  projects: Iproject[];
}

function Projects({ projects }: ProjectProps) {
  const { projectsTitle, projectsButton } = useTranslation();

  return (
    <Container>
      <SectionTitle title={projectsTitle} />

      <section>
        {projects.slice(0, 3).map(project => (
          <ProjectItem
            key={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            slug={project.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">
          <a>{projectsButton}</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
