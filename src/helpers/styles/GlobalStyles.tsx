import { createGlobalStyle } from 'styled-components/macro';
import { vars } from './variables';
import { ResetStyles } from './ResetStyles';
import { media } from './mixins';

type Props = {
  bgColor: string;
};

export const GlobalStyles = createGlobalStyle<Props>`
  ${ResetStyles};

  body {
    background-color: ${(props) => props.bgColor};
    color: ${vars.color.white};
    font-family: sans-serif;
    font-size: ${vars.fontSize.default.small};

    ${media(550)} {
    font-size: ${vars.fontSize.default.big};

    }
  }

  button, select {
    background-color: transparent;
    border: none;
    color: ${vars.color.white};
  }

  a {
    text-decoration: none;
    color: inherit;
  }



`;
