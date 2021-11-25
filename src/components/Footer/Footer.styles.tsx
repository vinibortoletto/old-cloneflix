import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.footer`
  max-width: 1000px;
  margin: auto;

  color: ${vars.color.mediumGrey};
  padding: 3rem 2rem;
`;

export const Title = styled.h1`
  font-size: ${vars.fontSize.default.small};
  margin-bottom: 2rem;
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  font-size: ${vars.fontSize.default.tiny};
  margin-bottom: 3rem;
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: ${vars.fontSize.default.tiny};
`;
