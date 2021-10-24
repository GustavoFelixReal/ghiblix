import { Film } from '../../types/film';

import ButtonGroup from '../common/buttons/ButtonGroup';
import FavoriteFilmButton from './FavoriteFilmButton';
import { FilmDetailsContainer } from './styled';

interface FilmDetailsProps {
  film: Film;
}

export default function FilmDetails({ film }: FilmDetailsProps) {
  return (
    <FilmDetailsContainer>
      <div className="film-info">
        <div className="film-header">
          <img src={film.image} alt={`Capa do filme "${film.title}"`} />
          <div className="film-description">
            <h2>{film.title}</h2>
            <h3>
              {film.original_title} ({film.original_title_romanised})
            </h3>

            <small>Ano de Lançamento:</small>
            <h3>📅 {film.release_date}</h3>

            <small>Rotten Tomatoes:</small>
            <h3>🍅 {film.rt_score}%</h3>

            <small>Diretor:</small>
            <h3>🎬 {film.director}</h3>

            <small>Produtor:</small>
            <h3>🎥 {film.producer}</h3>

            <small>Sinopse:</small>
            <p>{film.description}</p>

            <ButtonGroup className="film-action-buttons">
              <FavoriteFilmButton film={film} />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </FilmDetailsContainer>
  );
}
