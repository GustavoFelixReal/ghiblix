import styled from "styled-components";
import { Styles } from "../../types/styles";

export const FilmListContainer = styled.section`
  height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
  white-space: nowrap;
  width: 100%;

  @media screen and (max-width: 1280px) {
    overflow-x: auto;
  }
`;

export const StyledFilmListScrollButtons = styled.div`
  left: 0;
  position: sticky;

  button {
    margin: 20px;
  }
`;

interface StyledFilmListItemProps extends Styles {
  banner: string;
}

export const StyledFilmListItem = styled.div<StyledFilmListItemProps>`
  box-shadow: 0px 0px 120px -25px rgba(0,0,0, 0.5);
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
    box-shadow: 0px 0px 80px -25px rgba(0,0,0, 0.5);
    transform: scale(1.02);
    transition: all 0.4s ease;
  }

  @media screen and (max-width: 1250px) {
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

        @media screen and (min-width: 768px) {
          right: 0;
        }

        @media screen and (max-width: 768px) {
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

        @media screen and (max-width: 1360px) {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
        }
      }

      h2, h3 {
        @media screen and (max-width: 768px) {
          font-size: 90%;
          width: 100%;
        }
      }

      img {
        border-radius: 5px; 
        box-shadow: 0 0 20px -10px rgba(0,0,0,0.5);
        float: left;
        height: 100%;
        position: relative;
        margin-right: 20px;
        
        @media screen and (max-width: 768px) {
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
    height: 100%; position: absolute;
    right: 0;
    top: 0;
    z-index: 1;

    @media screen and (min-width: 768px) {
      background-position: -100% 10% !important;  
      width: 100%;
    }

    @media screen and (max-width: 768px) {
      background-position: 100% 100% !important;  
      width: 100%;
    }
  }
`;