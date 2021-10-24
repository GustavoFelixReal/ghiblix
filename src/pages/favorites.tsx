import FilmList from "../components/film/FilmList";
import { useFavorites } from "../hooks/useFavorites";

/* Components */
import { FavoritesContainer } from "../styles/pages";

export default function Favorites() {
  const { favorites } = useFavorites();

  console.log(favorites);

  return (
    <FavoritesContainer>
      <h1>Hello World</h1>
      <FilmList films={favorites} />
    </FavoritesContainer>
  );
}
