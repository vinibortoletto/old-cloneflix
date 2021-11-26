import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  max-width: 30rem;
  margin: auto;
  padding: 5rem ${vars.sidePadding.big};
  color: ${vars.color.black};
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
