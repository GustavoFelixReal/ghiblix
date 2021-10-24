import { Film } from "../../types/film";

import { FilmListContainer } from "./styled";
import FilmListItem from "./FilmListItem";
import { useRef } from "react";
import FilmListScrollButtons from "./FilmListScrollButtons";

interface FilmListProps {
  films: Film[];
}

export default function FilmList({ films }: FilmListProps) {
  const listRef = useRef(null);

  return (
    <FilmListContainer ref={listRef}> 
      <FilmListScrollButtons listRef={listRef} />
      {films.map(film => (
        <FilmListItem 
          key={film.id}
          film={film}
        />
      ))}
    </FilmListContainer>
  );
}