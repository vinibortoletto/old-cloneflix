import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.section`
  max-width: ${vars.maxWidth};
  margin: auto;
  padding: 3rem ${vars.sidePadding.small};
  text-align: center;

  ${media(DisplaySize.Laptop)} {
    padding: 3rem ${vars.sidePadding.big};
    text-align: left;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3rem;
  }
`;

export const Text = styled.div``;

export const Image = styled.div`
  img {
    width: 100%;
    max-width: 40rem;
  }
`;
