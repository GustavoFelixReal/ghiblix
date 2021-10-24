import Head from "next/head";
import { Film } from "../types/film";

import { api } from "../services/api";

import FilmList from "../components/film/FilmList";
import { HomeContainer } from "../styles/pages";


interface HomeProps {
  films: Film[]
}

export default function Home({ films }: HomeProps) {

  return (
    <HomeContainer>
      <Head>
        <title>Filmes</title>
      </Head>
      <div className="title">
        <h1>Filmes</h1>
        <p>Veja todas as nossas criações!!</p>
      </div>
      <FilmList films={films} />
    </HomeContainer>
  );
}

export const getStaticProps = async () => {
  let films;
  
  await api.get('films').then(res => {
    films = res.data;
  }).then(error => {
    console.error(error);
  });

  return {
    props: {
      films
    }
  }
}