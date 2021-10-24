import axios from 'axios';
import Head from 'next/head';
import FilmDetails from '../../components/film/FilmDetails';
import FilmPeopleList from '../../components/film/FilmPeopleList';
import { api } from '../../services/api';
import { FilmContainer } from '../../styles/pages';
import { Film, Person } from '../../types/film';

interface FilmProps {
  film: Film;
  people: Person[];
}

export default function FilmProperties({ film, people }: FilmProps) {
  console.log(film, people);

  return (
    <FilmContainer banner={film.movie_banner}>
      <Head>
        <title>{film.title}</title>
      </Head>

      <FilmDetails film={film} />

      <h1>Personagens</h1>
      <FilmPeopleList people={people} />

      <div className="film-banner" />
    </FilmContainer>
  );
}

export const getStaticPaths = async () => {
  let films;

  await api
    .get('films')
    .then((res) => {
      films = res.data;
    })
    .then((error) => {
      console.error(error);
    });

  const paths = films.map((film) => {
    return {
      params: { id: film.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  let film;
  const people = [];

  await api
    .get(`films/${id}`)
    .then((res) => {
      film = res.data;
    })
    .then((error) => {
      console.error(error);
    });

  const peopleRequests = film.people.map((person) => {
    return axios.get(person);
  });

  await axios.all(peopleRequests).then((allRes) => {
    allRes.forEach((res) => {
      if ((res as any).data.length > 0) {
        (res as any).data.forEach((person) => people.push(person));
      } else {
        people.push((res as any).data);
      }
    });
  });

  return {
    props: {
      film,
      people,
    },
  };
};
