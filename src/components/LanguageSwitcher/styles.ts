import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  select {
    background-color: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.textLight};
    border: 1px solid ${({ theme }) => theme.secondary};
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;
