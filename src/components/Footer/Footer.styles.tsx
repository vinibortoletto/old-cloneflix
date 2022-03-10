import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.footer<{ pathname: string }>`
  max-width: ${vars.maxWidth.content};
  margin: auto;

  color: ${vars.color.mediumGrey};
  padding: 3rem ${vars.sidePadding.small};

  ${(props) =>
    props.pathname === '/signup' &&
    `
      max-width: ${vars.maxWidth.footer};
      border-top: 1px solid ${vars.color.grey};
    `}

  ${media(550)} {
    padding: 3rem ${vars.sidePadding.big};
  }
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
  margin-top: 2rem;
`;
