import Head from "next/head";
import { useFavorites } from "../hooks/useFavorites";

import { FavoritesContainer } from "../styles/pages";
import FilmList from "../components/film/FilmList";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <FavoritesContainer>
      <Head>
        <title>Filmes</title>
      </Head>
      <div className="title">
        <h1>Favoritos</h1>
        <p>Os seus títulos favoritos do Studio Ghibli em um só lugar!</p>
      </div>
      
      <FilmList films={favorites} />
    </FavoritesContainer>
  );
}
