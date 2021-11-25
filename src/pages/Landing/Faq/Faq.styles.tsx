import styled from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';
import { DisplaySize, media } from '../../../helpers/styles/mixins';

export const Container = styled.div`
  max-width: 50rem;
  margin: auto;
  padding: 3rem 0;
  font-size: ${vars.fontSize.default.big};
  text-align: center;

  ${media(DisplaySize.Laptop)} {
    font-size: ${vars.fontSize.subtitle.big};
  }

  h1 {
    padding: 0 ${vars.sidePadding.small};
  }
`;

export const List = styled.ul`
  text-align: left;
  margin-bottom: 5rem;

  ${media(550)} {
    padding: 0 3rem;
  }

  ${media(DisplaySize.Laptop)} {
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem ${vars.sidePadding.small};
  margin-bottom: 0.2rem;
  background-color: ${vars.color.grey};
  transform: rotate(0deg);

  ${media(DisplaySize.Laptop)} {
    padding: 2rem;
  }

  h2,
  svg {
    pointer-events: none;
  }

  svg.spin {
    transform: rotate(45deg);
  }
`;

export const Answer = styled.div`
  height: 0;
  display: none;

  background-color: ${vars.color.grey};
  padding: 1.5rem ${vars.sidePadding.small};

  ${media(DisplaySize.Laptop)} {
    padding: 2rem;
  }

  &.show {
    height: auto;
    display: block;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;
