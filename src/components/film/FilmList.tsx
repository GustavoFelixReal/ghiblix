import { useRouter } from 'next/dist/client/router';
import { Film } from '../../types/film';

import Button from '../common/buttons/Button';
import { FilmListContainer } from './styled';
import FilmListItem from './FilmListItem';

interface FilmListProps {
  films: Film[];
}

export default function FilmList({ films }: FilmListProps) {
  const router = useRouter();

  return (
    <FilmListContainer>
      {films.length > 0 ? (
        <>
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
