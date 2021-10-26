import styled from 'styled-components';

export const HomeContainer = styled.div`
  .title {
    padding: 1.5rem;
  }
`;

export const FavoritesContainer = styled.div`
  .title {
    padding: 1.5rem;
  }
`;

interface FilmContainerProps {
  banner: string;
}

export const FilmContainer = styled.div<FilmContainerProps>`
  align-items: center;
  display: block;
  min-height: 100vh;

  h1 {
    padding: 1.5rem;
  }

  .film-banner {
    background: url(${(props) => props.banner});
    background-position: top !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    border-radius: 11px;
    filter: blur(4px) !important;
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
`;
