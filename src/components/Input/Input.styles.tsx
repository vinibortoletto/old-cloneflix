import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

type Props = {
  pathname: string;
  error: boolean;
};

export const Container = styled.div`
  width: 100%;

  div {
    position: relative;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  padding-left: 1rem;
  color: ${vars.color.mediumGrey};

  pointer-events: none;
  transition: 0.2s ease;

  &.active {
    padding-top: 0.3rem;
    font-size: ${vars.fontSize.default.tiny};
    font-weight: bold;
    top: 0;
    transform: translateY(0);
  }
`;

export const Input = styled.input<Props>`
  height: 3.5rem;
  width: 100%;

  padding: 1.2rem 1rem 0.6rem 1rem;
  border-radius: ${vars.borderRadius};

  color: ${vars.color.black};
  background-color: ${vars.color.white};
  border-bottom: ${(props) => props.error && `4px solid ${vars.color.orange}`};

  /* Signup and Your Account varitation  */
  border: ${(props) =>
    props.error &&
    (props.pathname === '/signup' || props.pathname === '/your-account') &&
    `1px solid ${vars.color.red}`};
  border: ${(props) =>
    !props.error &&
    (props.pathname === '/signup' || props.pathname === '/your-account') &&
    `1px solid ${vars.color.mediumGrey}`};
`;

export const Error = styled.p<{ pathname: string }>`
  margin: 0.5rem 0;
  text-align: left;
  font-size: ${vars.fontSize.default.tiny};
  color: ${vars.color.orange};
  color: ${(props) =>
    (props.pathname === '/signup' || props.pathname === '/your-account') &&
    `${vars.color.red}`};

  ${media(550)} {
    font-size: ${vars.fontSize.default.small};
  }
`;
