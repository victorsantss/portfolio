import { useTranslation } from '../../hooks/useTranslation';
import getYearsOfExperience from '../../utils/getYearsOfExperience';
import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experiences() {
  const yearsOfExperience = getYearsOfExperience();
  const {
    experiencesTitleStart,
    experiencesTitleEnd,
    experienceItem1Title,
    experienceItem1Year,
    experienceItem1Description,
    experienceItem2Title,
    experienceItem2Year,
    experienceItem2Description,
    experienceItem3Title,
    experienceItem3Year,
    experienceItem3Description,
    experienceItem4Title,
    experienceItem4Year,
    experienceItem4Description,
    experienceItem5Title,
    experienceItem5Year,
    experienceItem5Description
  } = useTranslation();

  return (
    <Container>
      <SectionTitle
        title={`${yearsOfExperience} ${experiencesTitleStart}`}
        description={experiencesTitleEnd}
      />

      <section>
        <ExperienceItem
          year={experienceItem5Year}
          title={experienceItem5Title}
          description={experienceItem5Description}
        />
        <ExperienceItem
          year={experienceItem4Year}
          title={experienceItem4Title}
          description={experienceItem4Description}
        />
        <ExperienceItem
          year={experienceItem3Year}
          title={experienceItem3Title}
          description={experienceItem3Description}
        />
        <ExperienceItem
          year={experienceItem2Year}
          title={experienceItem2Title}
          description={experienceItem2Description}
        />
        {/* Commented for better experiences history and responsiveness */}
        {/* <ExperienceItem
          year={experienceItem1Year}
          title={experienceItem1Title}
          description={experienceItem1Description}
        /> */}
      </section>
    </Container>
  );
}

export default Experiences;
