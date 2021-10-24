import { useRouter } from "next/dist/client/router";

import { mdiStarOutline } from "@mdi/js";

import Button from "../common/buttons/Button";
import ButtonGroup from "../common/buttons/ButtonGroup";
import Icon from "@mdi/react";
import { StyledFilmListItem } from "./styled";

interface FilmListItemProps {
  id: string;
  title: string;
  image: string;
  description: string;
  director: string;
  banner: string;
}

export default function FilmListItem({ id, title, image, description, director, banner }: FilmListItemProps) {
  const router = useRouter();

  return (
    <StyledFilmListItem banner={banner}>
      <div className="film-info">
        <div className="film-header">
          <img src={image} alt={`Capa do filme "${title}"`} />
          <h2>{title}</h2>
          <h3>{director}</h3>
          <p>{description}</p>
          <ButtonGroup className="film-action-buttons">
            <Button>
              <Icon path={mdiStarOutline} size={1} />
            </Button>
            <Button 
              onClick={() => router.push(`/film/${id}`)} 
              className="see-details-button"
            >
              Ver detalhes
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="film-banner"></div>
    </StyledFilmListItem>
  );
}