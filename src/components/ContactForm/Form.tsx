import { useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from '../../hooks/useTranslation';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoading] = useState(false);

  const {
    contactFormNamePlaceholder,
    contactFormEmailPlaceholder,
    contactFormMessagePlaceholder,
    contactFormButtonPlaceholder,
    contactFormInvalidMessage,
    contactFormSuccessMessage,
    contactFormErrorMessage
  } = useTranslation();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!nome || !email || !mensagem) {
      toast(`${contactFormInvalidMessage}`, {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendContactMail(nome, email, mensagem);
      setNome('');
      setEmail('');
      setMensagem('');

      toast(`${contactFormSuccessMessage}`, {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast(`${contactFormErrorMessage}`, {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder={contactFormNamePlaceholder}
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder={contactFormEmailPlaceholder}
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        type="email"
      />
      <TextArea
        placeholder={contactFormMessagePlaceholder}
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading}>
        {contactFormButtonPlaceholder}
      </button>
    </FormContainer>
  );
}
