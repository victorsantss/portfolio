import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaNodeJs, FaPhp, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiPostgresql } from 'react-icons/si';
import { useTranslation } from '../../hooks/useTranslation';
import SectionTitle from '../SectionTitle';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';

function Knowledges() {
  const { knowledgeTitle } = useTranslation();
  return (
    <Container>
      <SectionTitle title={knowledgeTitle} />
      <section>
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="Javascript" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="React" icon={<FaReact />} />
        <KnowledgeItem title="Vue" icon={<FaVuejs />} />
        <KnowledgeItem title="PHP" icon={<FaPhp />} />
        <KnowledgeItem title="PostgreSQL" icon={<SiPostgresql />} />
        <KnowledgeItem title="Node" icon={<FaNodeJs />} />
      </section>
    </Container>
  );
}

export default Knowledges;
