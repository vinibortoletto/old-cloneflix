import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.section`
  max-width: 73rem;
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

    &:nth-child(3),
    &:nth-child(7) {
      .text {
        order: 2;
      }
    }
  }
`;

export const Image = styled.div`
  img {
    width: 100%;
    max-width: 40rem;
  }
`;
