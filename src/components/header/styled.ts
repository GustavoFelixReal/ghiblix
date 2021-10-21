import styled from "styled-components";
import { hexToRgb } from "../../helpers/hex-to-rgb";
import { ThemeProps } from "../../providers/theme";

interface StylesProps {
  theme: ThemeProps;
}

export const HeaderContainer = styled.header<StylesProps>`
  background-color: ${(props) => props.theme.mainBackground};
  padding: 1.5rem;
  width: 100%;
`;

export const SideBarContainer = styled.div<StylesProps>`
  background-color: ${(props) => props.theme.mainBackground};
  box-shadow: 0 3px 10px -4px rgba(51,62,73,.18), 0 6px 17px 2px rgba(51,62,73,.08);
  height: 100%;
  left: 0;
  padding: 6px 14px;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-out;
  width: 78px;

  button {
    left: 50%;
    position: absolute;
    top: 6px;
    transform: translateX(-50%);
  }

  .logo-container {
    opacity: 0;
    
    .logo {
      align-items: center;
      display: flex;
      height: 50px;
      width: 100%;
    }
  }

  &.active {
    transition: all 0.5s ease;
    width: 240px;

    button {
      left: 85%;
    }

    .logo-container {
      opacity: 1;

      .logo {
        pointer-events: none;
      }
    }
  }
`;

export const SideBarListContainer = styled.ul`
  margin-top: 20px;

`;

interface StyledListItem extends StylesProps {
  isActive: boolean;
}


export const StyledListItem = styled.li<StyledListItem>`
  list-style: none;
  margin: 8px 0;
  position: relative;

  a {
    align-items: center;
    background-color: ${(props) => props.theme.complementaryBackground};
    border: none;
    border-radius: 5px;
    color: ${(props) => props.isActive ? props.theme.primary : props.theme.text};
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: .75rem;
    text-align: center;
    text-decoration: none;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    vertical-align: middle;

    &:hover {
      box-shadow: 0 0 0 3px ${(props) => hexToRgb(props.isActive ? props.theme.primary : props.theme.text, '100%')};
    }

    span {
      opacity: 0;
      display: none;
      transition: opacity 0.35s ease-out;
    }
  }

  &:hover .tooltip {
    opacity: 1; 
    top: +30%;
    transition: all 0.35s ease;
  }

  &.side-bar-active {
    a {
      span {
        display: block;
        margin-left: .375rem;
        opacity: 1;
        transition: all 0.35s ease;
      }
    }
  }
`;

export const StyledLogo = styled.svg<StylesProps>`
  fill: ${(props) => props.theme.text} !important;
  
  height: 50px;
  max-width: 95px;
  size: 10px;

  path, polyline {
    font-size: 1rem !important;
  }
  
`;