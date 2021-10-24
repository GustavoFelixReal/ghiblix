import styled from "styled-components";
import { Styles } from "../../types/styles";

export const FooterContainer = styled.footer<Styles>`
  align-items: center;
  background-color: ${(props) => props.theme.mainBackground};
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  hr {
    opacity: 0.2;
    width: 100%;
  }

  .copyrigth {
    padding: 1.5rem;
    text-align: center;
  }
`;

export const StyledCompanyLogo = styled.svg`
  fill: ${(props) => props.theme.text} !important;
  max-width: 500px;
  padding: 1.5rem;
`;