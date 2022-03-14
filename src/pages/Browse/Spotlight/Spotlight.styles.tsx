import styled from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  height: 60vh;
`;

export const Background = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Dropshadow = styled.div`
  /* Top shadow */
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent 30%);

  /* Left shaow */
  &::before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 10%, transparent);
  }

  /* Bottom shaow */
  &::after {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(
      to top,
      ${vars.color.darkGrey},
      transparent 100%
    );
  }
`;

export const Image = styled.img`
  width: 100%;
  min-height: 60vh;
  max-height: 80vh;
  object-fit: cover;
`;

export const Content = styled.div`
  max-width: 40%;
  text-shadow: 0 0 5px ${vars.color.black};
`;

export const Info = styled.div`
  display: flex;
  gap: 1rem;
  font-size: ${vars.fontSize.default.small};
  margin-bottom: 1rem;

  h2 {
    color: ${vars.color.green};
  }
`;

export const Description = styled.div``;

export const Buttons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  font-size: ${vars.fontSize.default.small};

  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    border-radius: ${vars.borderRadius};
    padding: 0.5rem 1rem;
    font-weight: bold;
  }

  svg {
    font-size: 1.5rem;
  }

  #play {
    background-color: ${vars.color.white};
    color: ${vars.color.black};
  }

  #more-info {
    background-color: ${vars.color.mediumGrey};
    color: ${vars.color.white};
  }
`;
