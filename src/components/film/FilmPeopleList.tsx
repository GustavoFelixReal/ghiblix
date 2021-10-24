import { Person } from '../../types/film';
import FilmPeopleListItem from './FilmPeopleListItem';
import { FilmPeopleListContainer } from './styled';

interface FilmPeopleListProps {
  people: Person[];
}

export default function FilmPeopleList({ people }: FilmPeopleListProps) {
  return (
    <FilmPeopleListContainer>
      {people.map((person) => (
        <FilmPeopleListItem key={person.id} person={person} />
      ))}
    </FilmPeopleListContainer>
  );
}
