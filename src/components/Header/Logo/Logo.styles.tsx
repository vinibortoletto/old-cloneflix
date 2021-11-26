import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../helpers/styles/mixins';

export const Container = styled.img<{ pathname: string }>`
  width: 6rem;

  ${media(550)} {
    width: ${(props) =>
      props.pathname !== '/browse' &&
      props.pathname !== '/your-account' &&
      '9rem'};
  }

  ${media(DisplaySize.Laptop)} {
    width: ${(props) =>
      props.pathname !== '/browse' &&
      props.pathname !== '/your-account' &&
      '13rem'};
  }
`;
