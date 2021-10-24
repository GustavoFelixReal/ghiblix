import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { RefObject, useCallback } from "react";
import Button from "../common/buttons/Button";
import ButtonGroup from "../common/buttons/ButtonGroup";
import { StyledFilmListScrollButtons } from "./styled";

interface FilmListScrollButtonsProps {
  listRef: RefObject<HTMLElement>;
}

export default function FilmListScrollButtons({ listRef }: FilmListScrollButtonsProps) {

  const handleScroll = useCallback((handleScroll: 'left' | 'right') => {
    //const filmItemSize = window.screen.width

    if (handleScroll === 'left') {
      listRef.current.scrollLeft -= listRef.current.offsetWidth;
      return;
    }

    listRef.current.scrollLeft += listRef.current.offsetWidth;
  }, [listRef]);

  return (
    <StyledFilmListScrollButtons>
      <ButtonGroup >
        <Button rounded onClick={() => handleScroll('left')}>
          <Icon path={mdiChevronLeft} size={.6}/>
        </Button>
        <Button rounded onClick={() => handleScroll('right')}>
          <Icon path={mdiChevronRight} size={.6}/>
        </Button>
      </ButtonGroup>
    </StyledFilmListScrollButtons>
  )
}