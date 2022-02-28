import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  max-width: 30rem;
  margin: auto;
  padding: 5rem ${vars.sidePadding.big};
  color: ${vars.color.white};
  text-align: left;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.438rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.188rem;
  margin-bottom: 1rem;
`;

export const SpinnerContainer = styled.div`
  margin: 15rem 0;
`;

export const Login = styled.div`
  font-size: ${vars.fontSize.default.small};
  margin-top: 2rem;

  a {
    color: ${vars.color.blue};
    margin-left: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
