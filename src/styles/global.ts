import { createGlobalStyle } from "styled-components";
import { Styles } from "../types/styles";

export const GlobalStyles = createGlobalStyle<Styles>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5;
    }
  }

  body { 
    background-color: ${(props) => props.theme.complementaryBackground};
    min-height: 100vh;
    overflow: auto;
    position: relative;
    
    @media (min-width: 768px) {
      left: 78px;
      width: calc(100% - 78px);
    }
  }

  body, input, textarea, button {
    color: ${(props) => props.theme.text};
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    @media screen and (max-width: 768px) {
      font-size: 95%;
    }
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .container {
    padding: 1.5rem;
  }
`;