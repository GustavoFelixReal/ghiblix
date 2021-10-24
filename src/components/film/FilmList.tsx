import { Film } from '../../types/film';
import { useRouter } from 'next/dist/client/router';
import { useRef } from 'react';

import { FilmListContainer } from './styled';
import FilmListItem from './FilmListItem';
import FilmListScrollButtons from './FilmListScrollButtons';
import Button from '../common/buttons/Button';

interface FilmListProps {
  films: Film[];
}

export default function FilmList({ films }: FilmListProps) {
  const router = useRouter();
  const listRef = useRef(null);

  return (
    <FilmListContainer ref={listRef}>
      {films.length > 0 ? (
        <>
          <FilmListScrollButtons listRef={listRef} />
          {films.map((film) => (
            <FilmListItem key={film.id} film={film} />
          ))}
        </>
      ) : (
        <div className="no-film-message">
          <h1>Não há filme para exibir aqui! 😥</h1>
          <h3>Volte mais tarde! 😉</h3>
          {router.asPath !== '/' && (
            <Button variant="primary" onClick={() => router.push('/')}>
              Início
            </Button>
          )}
        </div>
      )}
    </FilmListContainer>
  );
}
