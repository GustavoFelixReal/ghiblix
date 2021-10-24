import { api } from "../../services/api";
import { Film } from "../../types/film";

interface FilmDetailsProps {
  film: Film;
}

export default function FilmDetails({ film }: FilmDetailsProps) {
  console.log(film);
  
  return (
    ''
  );
}

export const getStaticPaths = async () => {
  let films;
  
  await api.get('films').then(res => {
    films = res.data;
  });

  const paths = films.map(film => {
    return { 
      params: { id: film.id }
    };
  });

  return {
    paths, 
    fallback: false,
  }
};

export const getStaticProps = async ({ params: { id } }) => {
  let film;

  await api.get(`films/${id}`).then(res => {
    film = res.data;
  });

  return {
    props: { 
      film
    }
  }
};
