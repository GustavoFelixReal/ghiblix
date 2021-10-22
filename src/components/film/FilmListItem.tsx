import { StyledFilmListItem } from "./styled";

interface FilmListItemProps {
  title: string;
  image: string;
  description: string;
  director: string;
}

export default function FilmListItem({ title, image, description, director }: FilmListItemProps) {
  return (
    <StyledFilmListItem>
      <div className="film-image">
        <img src={image} alt={`Capa do filme "${title}"`} />
      </div>
      <div className="film-content">
        <h5>{title}</h5>
        <h6>{director}</h6>
        <p>{description}</p>
      </div>
    </StyledFilmListItem>
  );
}