import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Container = styled.ul`
  display: none;
  gap: 1rem;
  margin-left: 2rem;
  font-size: ${vars.fontSize.default.tiny};

  ${media(DisplaySize.Laptop)} {
    display: flex;
  }

  li.selected {
    font-weight: bold;
  }
`;
