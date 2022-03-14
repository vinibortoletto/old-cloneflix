// Libs
import React, { useEffect, useState } from 'react';

// Images
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';

// Components
import Title from '../../../components/Title/Title';

// Contexts
import { useData } from '../../../contexts/Data';
import { useLibrary } from '../../../contexts/Library';

// Styles
import * as S from './Spotlight.styles';

export default function Spotlight() {
  const { lang } = useData();
  const { spotlight } = useLibrary();
  const [img, setImg] = useState('');
  const [year, setYear] = useState(0);
  const [seasons, setSeasons] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (spotlight) {
      setImg(`https://image.tmdb.org/t/p/original${spotlight.backdrop_path}`);
      setYear(new Date(spotlight.first_air_date).getFullYear());
      setDescription(`${spotlight.overview.split('.', 1)}.`);

      if (spotlight.number_of_seasons === 1) {
        setSeasons(
          `${spotlight.number_of_seasons} ${
            lang === 'en' ? 'season' : 'temporada'
          }`,
        );
      } else {
        setSeasons(
          `${spotlight.number_of_seasons} ${
            lang === 'en' ? 'seasons' : 'temporadas'
          }`,
        );
      }
    }
  }, [spotlight]);

  return (
    <>
      {spotlight && (
        <S.Container>
          <S.Background>
            <S.Dropshadow />
            <S.Image src={img} alt={spotlight.overview} />
          </S.Background>

          <S.Content className="content">
            <Title text={spotlight.name} />

            <S.Info className="info">
              <h2>{spotlight.vote_average}</h2>
              <h3>{year}</h3>
              <h4>{seasons}</h4>
            </S.Info>

            <S.Description className="description">{description}</S.Description>

            <S.Buttons className="buttons">
              <button id="play">
                <BsFillPlayFill />
                <span>Play</span>
              </button>
              <button id="more-info">
                <AiOutlineInfoCircle />
                <span>More Info</span>
              </button>
            </S.Buttons>
          </S.Content>
        </S.Container>
      )}
    </>
  );
}
