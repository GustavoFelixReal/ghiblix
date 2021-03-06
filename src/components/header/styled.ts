import styled from 'styled-components';
import { hexToRgb } from '../../helpers/hex-to-rgb';
import { Styles } from '../../types/styles';

export const HeaderContainer = styled.header<Styles>`
  background-color: ${(props) => props.theme.mainBackground};
  padding: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const NavbarContainer = styled.nav`
  display: none;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: end;
  }

  button {
    width: fit-content;
    margin: 5px;
  }
`;

export const SideBarContainer = styled.aside<Styles>`
  background-color: ${(props) => props.theme.mainBackground};
  box-shadow: 0 3px 10px -4px rgba(51, 62, 73, 0.18), 0 6px 17px 2px rgba(51, 62, 73, 0.08);
  display: none;
  height: 100%;
  left: 0;
  padding: 6px 14px;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-out;
  width: 78px;
  z-index: 3;

  @media (min-width: 768px) {
    display: block;
  }

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

export const StyledSideBarItem = styled.li<Styles>`
  list-style: none;
  margin: 8px 0;
  position: relative;

  a {
    align-items: center;
    background-color: ${(props) => props.theme.complementaryBackground};
    border: none;
    border-radius: 5px;
    color: ${(props) => props.theme.text};
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.75rem;
    text-align: center;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    vertical-align: middle;

    &:hover {
      box-shadow: 0 0 0 3px ${(props) => hexToRgb(props.theme.text, '100%')};
    }

    &.active {
      color: ${(props) => props.theme.primary.background};

      &:hover {
        box-shadow: 0 0 0 3px ${(props) => hexToRgb(props.theme.primary.background, '100%')};
      }
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
        margin-left: 0.375rem;
        opacity: 1;
        transition: all 0.35s ease;
      }
    }
  }
`;

export const StyledLogo = styled.svg<Styles>`
  fill: ${(props) => props.theme.text} !important;

  height: 50px;
  max-width: 95px;
`;
