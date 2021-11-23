import styled from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div<{ bgImg: string }>`
  text-align: center;
  padding: 8rem 1rem 5rem 1rem;
  background-image: linear-gradient(
      ${vars.color.black},
      transparent 15% 85%,
      ${vars.color.black}
    ),
    url(${(props) => props.bgImg});
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  h3 {
    font-weight: normal;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    padding: 0.7rem 1rem;
    margin: auto;
    margin-top: 1rem;
  }
`;
