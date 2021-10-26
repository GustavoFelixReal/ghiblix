import { useRouter } from 'next/dist/client/router';
import { Film } from '../../types/film';

import ErrorMessage from '../common/errors/ErrorMessage';
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
        <ErrorMessage
          title="Não há filmes para exibir aqui!"
          message="Volte mais tarde."
          redirectTo="/"
          redirectButtonText="Início"
          showRedirect={router.asPath !== '/'}
        />
      )}
    </FilmListContainer>
  );
}
