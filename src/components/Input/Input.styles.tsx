import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

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

  background-color: ${vars.color.grey};
  color: ${vars.color.white};

  &.error {
    border-bottom: 4px solid ${vars.color.orange};
  }
`;
