import React, { useEffect } from 'react';
import * as S from './NotFound.styles';
import bgImg from '../../images/misc/not-found.jpg';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Button, { ButtonTypes } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useData } from '../../contexts/Data';

export default function NotFound() {
  const { data } = useData();
  const { button, codeError, subtitle, title } = data.pages.notFound;

  useEffect(() => {
    const footer = document.getElementById('footer') as HTMLElement;
    const removeFooter = () => (footer.style.display = 'none');
    const addFooter = () => (footer.style.display = 'block');

    removeFooter();

    return () => {
      addFooter();
    };
  }, []);

  return (
    <>
      <S.Container>
        <S.Image src={bgImg} alt="" />

        <Title text={title} />
        <Subtitle text={subtitle}></Subtitle>

        <Button type={ButtonTypes.Button}>
          <Link to="/">{button}</Link>
        </Button>

        <S.ErrorCode>
          {codeError} <span>NSES-404</span>
        </S.ErrorCode>

        <footer></footer>
      </S.Container>
    </>
  );
}
