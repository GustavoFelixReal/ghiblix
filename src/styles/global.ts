import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "../providers/theme";
interface GlobalStylesProps {
  theme: ThemeProps;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
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
    left: 78px;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    width: calc(100% - 78px);
  }

  body, input, textarea, button {
    color: ${(props) => props.theme.text};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;