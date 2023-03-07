import { useTranslation } from '../../hooks/useTranslation';
import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function ContactForm() {
  const {
    contactFormTitleStart,
    contactFormTitleEnd,
    contactFormSubTitleStart,
    contactFormSubTitleEnd
  } = useTranslation();
  return (
    <Container>
      <SectionTitle
        title={
          <>
            {contactFormTitleStart}
            <br />
            {contactFormTitleEnd}
          </>
        }
        description={
          <>
            {contactFormSubTitleStart}
            <br />
            {contactFormSubTitleEnd}
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default ContactForm;
