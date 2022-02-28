// Libs
import React, { useEffect, useState } from 'react';

// Images
import { BsCalendarDay } from 'react-icons/bs';

// Components
import { default as ComponentTitle } from '../../../components/Title/Title';
import { useAuth } from '../../../contexts/Auth';
import { useData } from '../../../contexts/Data';

// Styles
import * as S from './Title.styles';

export default function Title() {
  const { data } = useData();
  const { user } = useAuth();
  const { accountAge, title, months } = data.pages.yourAccount;
  const creationTime = user?.metadata.creationTime;
  const [creationMonth, setCreationMonth] = useState<string | undefined>('');
  const [creationYear, setCreationYear] = useState<string | undefined>('');

  useEffect(() => {
    let newCreationMonth = creationTime && (new Date(creationTime).getMonth() as String | Number);
    const newCreationYear =
      creationTime && (new Date(creationTime).getFullYear() as String | Number);

    months.forEach((month, index) => {
      if (newCreationMonth === index) newCreationMonth = month;
    });

    setCreationMonth(newCreationMonth?.toString());
    setCreationYear(newCreationYear?.toString());
  }, [user, data]);

  return (
    <>
      <S.Container>
        <ComponentTitle text={title} />
        <div>
          <BsCalendarDay />
          <p>
            {accountAge} {creationMonth} {creationYear}
          </p>
        </div>
      </S.Container>
    </>
  );
}
