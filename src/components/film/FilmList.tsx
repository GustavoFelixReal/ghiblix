import { Film } from "../../types/film";

import { FilmListContainer } from "./styled";
import FilmListItem from "./FilmListItem";

interface FilmListProps {
  films: Film[];
}

export default function FilmList({ films }: FilmListProps) {

  return (
    <FilmListContainer> 
      {films.map(film => (
        <FilmListItem 
          key={film.id}
          title={film.title}
          image={film.image}
          description={film.description}
          director={film.director}
        />
      ))}
    </FilmListContainer>
  );
}