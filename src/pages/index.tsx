import { useEffect } from "react";
import FilmList from "../components/film/FilmList";
import { useFavorites } from "../hooks/useFavorites";
import { api } from "../services/api";

interface HomeProps {
  films: Film[]
}

/* Components */
import { HomeContainer } from "../styles/pages";
import { Film } from "../types/film";

export default function Home({ films }: HomeProps) {
  const { t } = { t: 'abacaxi' };

  const { favorites } = useFavorites();

  console.log(films);

  return (
    <HomeContainer className="container">
      <h1>Filmes</h1>

      <FilmList films={films} />
    </HomeContainer>
  );
}

export const getStaticProps = async () => {
  let films;
  
  await api.get('films').then(res => {
    films = res.data;
  }).then(err => {
    console.error(err);
  });

  return {
    props: {
      films
    }
  }
}