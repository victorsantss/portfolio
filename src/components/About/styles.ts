import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    width: 100%;
    display: flex;
    gap: 1.5rem;

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const AboutContainer = styled.section`
  width: 100%;
  /* display: flex; */
  align-items: center;
  justify-content: space-around;
  p {
    color: ${({ theme }) => theme.textLight};
    font-size: 1.5rem;
    font-weight: 300;
    text-align: justify;
    line-height: 2.5rem;
  }
  > img {
    width: 28rem;
    border: 0.5rem ${({ theme }) => theme.primary};
    border-style: none solid solid none;
  }
  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }
    > p {
      flex: 1;
    }
  }
  @media (max-width: 1000px) {
    p {
      margin-top: 1rem;
    }
    > img {
      width: 22rem;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;

    p {
      font-size: 1rem;
      margin-top: 0;
    }
  }

  @media (max-width: 425px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
