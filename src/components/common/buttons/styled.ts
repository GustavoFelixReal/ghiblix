import styled from "styled-components";
import { hexToRgb } from "../../../helpers/hex-to-rgb";
import { Styles } from "../../../types/styles";

interface ButtonProps extends Styles {
  variant?: string;
  rounded?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme[props.variant]?.background || props.theme.complementaryBackground};
  border: none;
  border-radius: ${(props) => props.rounded ? '100%' : '.75rem'};
  color: ${(props) => props.theme[props.variant]?.text || props.theme.text};
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  justify-content: center;
  padding: .75rem;
  text-align: center;
  text-decoration: none;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  vertical-align: middle;

  &:hover {
    box-shadow: 0 0 0 4px ${(props) => hexToRgb(props.theme[props.variant]?.background || props.theme.text, '50%')};
  }
`;

export const ButtonGroupContainer = styled.div`
  display: flex;
  align-items: center;

  button, a {
    margin: 0.2rem;
  }
`;