import { RefObject, useCallback } from 'react';

import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import Button from '../common/buttons/Button';
import ButtonGroup from '../common/buttons/ButtonGroup';
import Icon from '@mdi/react';
import { StyledFilmListScrollButtons } from './styled';

interface FilmListScrollButtonsProps {
  listRef: RefObject<HTMLElement>;
}

export default function FilmListScrollButtons({ listRef }: FilmListScrollButtonsProps) {
  const handleScroll = useCallback(
    (handleScroll: 'left' | 'right') => {
      if (handleScroll === 'left') {
        listRef.current.scrollLeft -= listRef.current.offsetWidth;
        return;
      }

      listRef.current.scrollLeft += listRef.current.offsetWidth;
    },
    [listRef],
  );

  return (
    <StyledFilmListScrollButtons>
      <ButtonGroup>
        <Button variant="primary" rounded onClick={() => handleScroll('left')}>
          <Icon path={mdiChevronLeft} size={0.8} />
        </Button>
        <Button variant="primary" rounded onClick={() => handleScroll('right')}>
          <Icon path={mdiChevronRight} size={0.8} />
        </Button>
      </ButtonGroup>
    </StyledFilmListScrollButtons>
  );
}
