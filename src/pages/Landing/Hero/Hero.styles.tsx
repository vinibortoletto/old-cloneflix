import styled from 'styled-components/macro';
import { media, DisplaySize } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  max-width: 50rem;
  height: calc(${vars.size.heroBgImg.small} - ${vars.size.header.small} - 2rem);
  text-align: center;
  padding: 0 ${vars.sidePadding.small};
  margin: auto;
  margin-top: 2rem;

  ${media(550)} {
    height: calc(
      ${vars.size.heroBgImg.big} - ${vars.size.header.small} - 7.5rem
    );
    margin-top: 7.5rem;
    padding: 0 ${vars.sidePadding.big};
  }

  ${media(DisplaySize.Tablet)} {
    height: calc(${vars.size.heroBgImg.big} - ${vars.size.header.big} - 7.5rem);
  }

  ${media(DisplaySize.Laptop)} {
    height: calc(
      ${vars.size.heroBgImg.medium} - ${vars.size.header.big} - 10rem
    );
    margin-top: 10rem;
  }
`;
