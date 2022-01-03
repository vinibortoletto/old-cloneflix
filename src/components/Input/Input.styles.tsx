import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

// type Props = {
//   pathname: string;
//   error: boolean;
//   className: string;
// };

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
    top: 0;
    transform: translateY(0);
  }
`;

export const Input = styled.input`
  height: 3.5rem;
  width: 100%;

  padding: 1.2rem 1rem 0.6rem 1rem;
  border-radius: ${vars.borderRadius};

  color: ${vars.color.black};
  background-color: ${vars.color.white};

  &.error {
    border-bottom: 4px solid ${vars.color.orange};
  }
`;

export const Error = styled.p`
  margin: 0.5rem 0;
  text-align: left;
  font-size: ${vars.fontSize.default.tiny};
  color: ${vars.color.orange};

  ${media(550)} {
    font-size: ${vars.fontSize.default.small};
  }
`;
