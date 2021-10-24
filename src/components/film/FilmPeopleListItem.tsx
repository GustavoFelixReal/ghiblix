import { Person } from '../../types/film';
import Character from './Character';
import { StyledFilmPeopleListItem } from './styled';

interface FilmPeopleListItemProps {
  person: Person;
}

export default function FilmPeopleListItem({ person }: FilmPeopleListItemProps) {
  return (
    <StyledFilmPeopleListItem>
      <div className="person-info">
        <div className="person-header">
          <small>Nome:</small>
          <h5>📋 {person.name}</h5>

          <small>Gênero:</small>
          <h5>🧠 {person.gender}</h5>

          <small>Idade:</small>
          <h5>⏳ {person.age}</h5>
        </div>
      </div>
    </StyledFilmPeopleListItem>
  );
}
