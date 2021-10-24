

import { useCallback, useEffect, useState } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import { Film } from "../../types/film";

import { mdiStar, mdiStarOutline } from "@mdi/js";

import Button from "../common/buttons/Button";
import Icon from "@mdi/react";

interface FavoriteFilmButton {
  film: Film;
}

export default function FavoriteFilmButton({ film }) {
  const { favorites, createFavorite, destroyFavorite } = useFavorites();

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
    <Button variant="warning" onClick={handleToggleFavorite}>
      <Icon path={isFavorite ? mdiStar : mdiStarOutline} size={1} />
    </Button>
  );
}