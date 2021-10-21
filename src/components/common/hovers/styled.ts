import styled from "styled-components";
import { ThemeProps } from "../../../providers/theme";

interface StylesProps {
  theme: ThemeProps;
}

export const TooltipContainer = styled.span<StylesProps>`
  background-color: ${(props) => props.theme.mainBackground};
  border: 1px solid ${(props) => props.theme.complementaryBackground};
  border-radius: 10px;
  box-shadow: 0 3px 10px -4px rgba(51,62,73,.18), 0 6px 17px 2px rgba(51,62,73,.08);
  color: ${(props) => props.theme.text};
  left: calc(100% - 25px);
  opacity: 0;
  padding: 0.5rem;
  pointer-events: none;
  position: absolute;
  text-align: center;
  top: 0;
  transition: 0s;
  transform: translateY(-50%);
  white-space: nowrap;
  width: fit-content; 
  z-index: 3;
 
`;