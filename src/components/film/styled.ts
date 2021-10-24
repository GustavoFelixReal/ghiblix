import styled from 'styled-components';
import { Styles } from '../../types/styles';

export const FilmDetailsContainer = styled.section<Styles>`
  background-color: ${(props) => props.theme.mainBackground};
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: block;
  margin: 20px auto;
  overflow: hidden;
  position: relative;
  transition: all 0.4s;
  white-space: normal;
  width: calc(100% - 40px);

  @media screen and (max-width: 768px) {
    margin: 10px;
    width: calc(100% - 20px);
  }

  .film-info {
    background-blend-mode: multiply;
    border-radius: 10px;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 2;

    .film-header {
      align-items: top;
      display: flex;
      padding: 25px;
      position: relative;

      @media screen and (max-width: 1250px) {
        display: block;
      }

      .film-description {
        width: calc(75% - 20px);
        display: inline-block;

        @media screen and (max-width: 1250px) {
          display: block;
          width: 100%;
        }

        p {
          font-size: 95%;
        }

        h2,
        h3 {
          @media screen and (max-width: 1250px) {
            font-size: 90%;
            width: 100%;
          }
        }

        .film-action-buttons {
          margin-top: 20px;
        }
      }

      img {
        border-radius: 5px;
        box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
        display: inline-block;
        width: 30%;
        position: relative;
        margin-right: 20px;

        @media screen and (max-width: 1250px) {
          display: block;
          float: none;
          width: 30%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export const FilmPeopleListContainer = styled.section`
  background: linear-gradient(to top, ${(props) => props.theme.mainBackground} 40%, transparent 100%);
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 1.5rem;
  width: 100%;
`;

export const StyledFilmPeopleListItem = styled.div`
  background-color: ${(props) => props.theme.complementaryBackground};
  box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 20px auto;
  overflow: hidden;
  position: relative;
  transition: all 0.4s;
  white-space: normal;
  width: calc(25% - 40px);

  @media screen and (max-width: 1024px) {
    margin: 10px;
    width: calc(50% - 20px);
  }

  @media screen and (max-width: 425px) {
    margin: 10px;
    width: calc(100% - 20px);
  }

  &:hover {
    box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
    transform: scale(1.02);
    transition: all 0.4s ease;
    filter: brightness(0.5);
  }

  .person-info {
    padding: 1.5rem;
    width: 100%;

    .person-header {
      svg {
        width: 10%;
      }
    }
  }
`;

export const FilmListContainer = styled.section`
  height: fit-content;
  overflow-x: hidden;
  scroll-behavior: smooth;
  white-space: nowrap;
  width: 100%;

  @media screen and (max-width: 1280px) {
    overflow-x: auto;
  }

  .no-film-message {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    text-align: center;
    vertical-align: middle;

    button {
      margin-top: 10px;
      width: fit-content;
    }
  }
`;

export const StyledFilmListScrollButtons = styled.div`
  left: 0;
  position: sticky;
  padding-left: 20px;

  button {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0.25rem;
  }
`;

interface StyledFilmListItemProps extends Styles {
  banner: string;
}

export const StyledFilmListItem = styled.div<StyledFilmListItemProps>`
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: inline-block;
  height: 500px;
  margin: 20px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s;
  white-space: normal;
  width: calc(50% - 40px);

  &:hover {
    box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
    transform: scale(1.02);
    transition: all 0.4s ease;
  }

  @media screen and (max-width: 768px) {
    margin: 10px;
    width: calc(100% - 20px);
  }

  .film-info {
    background-blend-mode: multiply;
    border-radius: 10px;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 2;

    .film-header {
      height: 100%;
      padding: 25px;
      position: relative;

      .film-action-buttons {
        bottom: 0;
        margin: 20px;
        position: absolute;

        @media screen and (min-width: 1250px) {
          right: 0;
        }

        @media screen and (max-width: 1250px) {
          left: 0;
        }

        @media screen and (max-width: 425px) {
          width: 100%;
        }

        .see-details-button {
          @media screen and (max-width: 425px) {
            width: calc(100% - 48px - 0.4rem - 50px);
          }
        }
      }

      p {
        font-size: 95%;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;

        @media screen and (min-width: 1570px) {
          -webkit-line-clamp: 15;
          -webkit-box-orient: vertical;
        }

        @media screen and (max-width: 1570px) {
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
      }

      h2,
      h3 {
        @media screen and (max-width: 1250px) {
          font-size: 90%;
          width: 100%;
        }
      }

      img {
        border-radius: 5px;
        box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
        float: left;
        height: 100%;
        position: relative;
        margin-right: 20px;

        @media screen and (max-width: 1250px) {
          display: block;
          float: none;
          height: 45%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 10px;
        }
      }
    }

    @media screen and (min-width: 1250px) {
      background: linear-gradient(to right, ${(props) => props.theme.mainBackground} 70%, transparent 110%);
    }

    @media screen and (max-width: 1250px) {
      background: linear-gradient(to top, ${(props) => props.theme.mainBackground} 50%, transparent 100%);
    }
  }

  .film-banner {
    background: url(${(props) => props.banner});
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    border-radius: 11px;
    filter: blur(4px) !important;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;

    @media screen and (min-width: 1250px) {
      background-position: -100% 10% !important;
      width: 100%;
    }

    @media screen and (max-width: 1250px) {
      background-position: 100% 100% !important;
      width: 100%;
    }
  }
`;

export const StyledCharacter = styled.svg<Styles>`
  fill: ${(props) => props.theme.primary.background} !important;
`;
