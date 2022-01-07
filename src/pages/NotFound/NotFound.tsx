// Libs
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Images
import bgImg from '../../images/misc/not-found.jpg';

// Components
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import { Button } from '../../components/Button/Button.styles';

// Contexts
import { useData } from '../../contexts/Data';

// Styles
import * as S from './NotFound.styles';

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

        <Button type="button">
          <Link to="/">{button}</Link>
        </Button>

        <S.ErrorCode>
          {codeError} <span>NSES-404</span>
        </S.ErrorCode>
      </S.Container>
    </>
  );
}
