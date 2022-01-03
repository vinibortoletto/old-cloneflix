import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Container = styled.div`
  width: 80%;
  max-width: 30rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  padding: 2rem 1.5rem;
  background-color: ${vars.color.black};
  border-radius: ${vars.borderRadius};

  ${media(DisplaySize.Tablet)} {
    padding: 4rem 3rem;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 0.5rem;

  ${media(DisplaySize.Tablet)} {
    font-size: ${vars.fontSize.title.small};
  }
`;

export const Subtitle = styled.h2`
  color: ${vars.color.orange};
  margin-bottom: 2rem;
  font-size: ${vars.fontSize.default.tiny};

  ${media(DisplaySize.Tablet)} {
    font-size: ${vars.fontSize.default.small};
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    width: 100%;
    max-width: 10rem;
    height: 2rem;
    font-size: ${vars.fontSize.default.tiny};

    ${media(DisplaySize.Tablet)} {
      height: 3rem;
      font-size: ${vars.fontSize.default.small};
    }
  }
`;
