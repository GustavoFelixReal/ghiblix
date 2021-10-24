import { Person } from "../../types/film";
import { FilmPeopleListContainer } from "./styled";

interface FilmPeopleListProps {
  people: Person[];
}

export default function FilmPeopleList({ people }: FilmPeopleListProps) {
  return (
    <FilmPeopleListContainer />
  );
}