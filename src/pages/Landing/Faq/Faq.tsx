import React from 'react';
import Title from '../../../components/Title/Title';
import { useData } from '../../../contexts/Data';
import * as S from './Faq.styles';
import { AiOutlinePlus } from 'react-icons/ai';
import EmailForm from '../../../components/EmailForm/EmailForm';

export default function Faq() {
  const { data } = useData();
  const { questions, title } = data.landing.faq;

  function handleClick(e: React.MouseEvent<HTMLDivElement>, id: number) {
    const elmtTitle = e.target as HTMLDivElement;
    const elmtAnswer = elmtTitle.nextSibling as HTMLDivElement;
    const elmtTitleIcon = elmtTitle.lastChild as SVGElement;

    elmtTitleIcon.classList.toggle('spin');
    elmtAnswer.classList.toggle('show');
  }

  return (
    <>
      <S.Container>
        <Title text={title} />

        <S.List>
          {questions.map((question) => (
            <li key={question.id}>
              <S.Title
                id={question.id.toString()}
                onClick={(e) => handleClick(e, question.id)}
              >
                <h2>{question.title}</h2>
                <AiOutlinePlus />
              </S.Title>

              <S.Answer>
                {question.answer.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </S.Answer>
            </li>
          ))}
        </S.List>

        <EmailForm />
      </S.Container>
    </>
  );
}
