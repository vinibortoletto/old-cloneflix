import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

type Props = {
  pathname: string;
};

export const Container = styled.header<Props>`
  height: ${vars.size.header.small};
  max-width: ${vars.maxWidth.header};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${vars.sidePadding.small};
  margin: auto;

  ${media(550)} {
    font-size: ${vars.fontSize.default.small};
    padding: 0 ${vars.sidePadding.big};
  }

  ${media(DisplaySize.Tablet)} {
    height: ${vars.size.header.big};
  }

  button {
    height: 2rem;
  }

  /* Sign Up variation */
  ${(props) =>
    props.pathname === '/signup' &&
    `
      border-bottom: 1px solid ${vars.color.grey};

      button {
        background-color: transparent;
        font-weight: bold;
        border-bottom: 0;
        font-size: ${vars.fontSize.default.big};

        &:hover {
          text-decoration: underline;
        }
      }
  `}
`;
