import { useCallback, useEffect, useState } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import { useRouter } from "next/dist/client/router";
import { Film } from "../../types/film";

import { mdiStar, mdiStarOutline } from "@mdi/js";

import Button from "../common/buttons/Button";
import ButtonGroup from "../common/buttons/ButtonGroup";
import Icon from "@mdi/react";
import { StyledFilmListItem } from "./styled";

interface FilmListItemProps {
  film: Film;
}

export default function FilmListItem({ film }: FilmListItemProps) {
  const { favorites, createFavorite, destroyFavorite } = useFavorites();
  const router = useRouter();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundFavorite = favorites.find(favorite => favorite.id === film.id);

    setIsFavorite(!(typeof foundFavorite === 'undefined'))
  }, [favorites]);

  const handleToggleFavorite = useCallback(() => {
    if (isFavorite) {
      destroyFavorite(film)
      return;
    }

    createFavorite(film);
  }, [isFavorite, favorites]);

  return (
    <StyledFilmListItem banner={film.movie_banner}>
      <div className="film-info">
        <div className="film-header">
          <img src={film.image} alt={`Capa do filme "${film.title}"`} />
          <h2>{film.title}</h2>
          <h3>{film.director}</h3>
          <p>{film.description}</p>
          <ButtonGroup className="film-action-buttons">
            <Button onClick={handleToggleFavorite}>
              <Icon path={isFavorite ? mdiStar : mdiStarOutline} size={1} />
            </Button>
            <Button 
              onClick={() => router.push(`/film/${film.id}`)} 
              className="see-details-button"
            >
              Ver detalhes
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="film-banner"></div>
    </StyledFilmListItem>
  );
}