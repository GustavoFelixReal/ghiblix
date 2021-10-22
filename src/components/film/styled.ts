import styled from "styled-components";

export const FilmListContainer = styled.section`

`;

export const StyledFilmListItem = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: "film-image film-content";
  max-width: 300px;
  
  .film-image { 
    width: 50%;
    grid-area: film-image; 

    img {
      width: 100%;
    }
  }

  .film-content { 
    grid-area: film-content; 
  }


  

  
`;