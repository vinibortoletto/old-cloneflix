import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 5rem;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
