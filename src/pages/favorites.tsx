import { useFavorites } from "../hooks/useFavorites";

/* Components */
import { FavoritesContainer } from "../styles/pages";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <FavoritesContainer className="container">
      <h1>Hello World</h1>
    </FavoritesContainer>
  );
}
