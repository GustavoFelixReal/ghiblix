import { useRouter } from "next/dist/client/router";
import { Film } from "../../types/film";

import Button from "../common/buttons/Button";
import ButtonGroup from "../common/buttons/ButtonGroup";
import FavoriteFilmButton from "./FavoriteFilmButton";
import { StyledFilmListItem } from "./styled";

interface FilmListItemProps {
  film: Film;
}

export default function FilmListItem({ film }: FilmListItemProps) {
  const router = useRouter();

  return (
    <StyledFilmListItem banner={film.movie_banner}>
      <div className="film-info">
        <div className="film-header">
          <img src={film.image} alt={`Capa do filme "${film.title}"`} />
          <h2>{film.title} ({film.release_date})</h2>
          <small>Dirigido por: </small>
          <h3>{film.director}</h3>
          <p>{film.description}</p>
          <ButtonGroup className="film-action-buttons">
            <FavoriteFilmButton film={film} />
            <Button 
              variant="primary"
              onClick={() => router.push(`/film/${film.id}`)} 
              className="see-details-button"
            >
              Ver Detalhes
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="film-banner"></div>
    </StyledFilmListItem>
  );
}