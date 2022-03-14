import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div``;

export const RowTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: hidden;
`;

export const RowCard = styled.div`
  cursor: pointer;
  height: 12rem;
  min-width: 8rem;
  position: relative;

  ${media(DisplaySize.Laptop)} {
    height: 10rem;
    min-width: 18rem;
  }

  /* &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent 50%);
    display: inline-block;
  } */
`;

export const RowCardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${vars.borderRadius};
`;

export const RowCardTitle = styled.h2`
  width: 80%;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: ${vars.fontSize.default.tiny};
  font-weight: bold;
`;

export const Row = styled.div`
  margin-bottom: 3rem;
`;
