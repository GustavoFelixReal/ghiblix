import styled from "styled-components";
import { hexToRgb } from "../../../helpers/hex-to-rgb";
import { Theme } from "../../../types/theme";

interface StylesProps {
  theme: Theme;
}

interface ButtonProps extends StylesProps {
  variant?: string;
  rounded?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme[props.variant] || props.theme.complementaryBackground};
  border: none;
  border-radius: ${(props) => props.rounded ? '100%' : '.75rem'};
  color: ${(props) => props.theme.text};
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  justify-content: center;
  padding: .75rem;
  text-align: center;
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  vertical-align: middle;

  &:hover {
    box-shadow: 0 0 0 5px ${(props) => hexToRgb(props.theme.text, '50%')};
  }
`;