"use client";

import styled, { css } from "styled-components";
import * as Anims from "@/styles/Animations";

import { Turn as Hamburger } from "hamburger-react";

type Props = {
  isvisible: boolean;
  scrollheight?: number;
};

export const Header = styled.header.withConfig({
  shouldForwardProp: (prop) => !["isvisible", "scrollheight"].includes(prop),
})<Props>`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 4;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "D-DIN";

  width: 100vw;
  height: 9vh;

  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &::before {
    position: absolute;

    content: "";
    height: 100%;
    width: 100%;

    z-index: -1;
    background-color: #000000;
    opacity: 1;

    transform-origin: top;
    animation: ${(Props) =>
        Props.isvisible && Props.scrollheight && Props.scrollheight > 760
          ? css`
              ${Anims.HeaderFadeIn}
            `
          : css`
              ${Anims.HeaderFadeOut}
            `}
      0.3s ease-in-out forwards;
  }

  @media (min-width: 960px) {
    opacity: 1;

    width: 100vw;
    height: 14vh;
  }
`;

export const Logo = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "isvisible",
})<Props>`
  position: relative;

  height: 5vw;
  width: 40vw;

  margin-left: 4%;
  margin-bottom: 2%;
  z-index: 2;

  object-fit: cover;

  @media (min-width: 500px) {
    height: 20px;
    width: 160px;
    margin-left: 30%;
  }

  @media (min-width: 960px) {
    margin-top: 1.5%;
    margin-left: 4%;
  }

  @media (max-width: 960px) {
    margin-left: 15%;
  }

  cursor: pointer;
  pointer-events: ${(Props) => (Props.isvisible ? "auto" : "none")};
`;

export const MenuButton = styled(Hamburger)`
  cursor: pointer;
`;

export const Link = styled.a`
  display: none;
  position: relative;

  &::before {
    position: absolute;
    content: "";

    bottom: -30%;

    height: 100%;
    width: 100%;

    border-bottom: 1px solid #fff;

    transform: scaleX(0);
    transform-origin: right;

    z-index: 1;

    animation: ${Anims.BorderBottomOut} 0.15s ease-in-out forwards;
  }

  &:hover::before {
    animation: ${Anims.BorderBottomIn} 0.15s ease-in-out forwards;
  }

  @media (min-width: 960px) {
    display: inline;
    font-size: 0.9vw;
  }

  cursor: pointer;
`;

export const ShopNMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isvisible",
})<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: ${(Props) => (Props.isvisible ? "auto" : "none")};

  margin-right: 6vh;
  transition: opacity ${(Props) => (Props.isvisible ? "0.8" : "0.2")}s
    ease-in-out;

  @media (max-width: 500px) {
    margin-right: 1vh;
  }
`;

export const ShopButton = styled(Link)`
  display: none;
  text-decoration: none;

  height: 10px;
  margin-right: 70px;

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.8vw;
    margin-top: 3%;
  }

  cursor: pointer;
`;

export const LinkList = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isvisible",
})<Props>`
  display: none;

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: left;

    width: 100%;
    margin-left: 3.5vw;
    gap: 2.2vw;
  }

  & > div {
    & > a {
      pointer-events: ${(Props) => (Props.isvisible ? "auto" : "none")};
      text-decoration: none;
    }
  }
`;

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isvisible",
})<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  transition: opacity ${(Props) => (Props.isvisible ? "0.8" : "0.2")}s
    ease-in-out;

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: left;

    width: 100%;

    gap: 1vw;
    margin-left: 1.5vw;
  }
`;

export const Menu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isvisible",
})<Props>`
  position: absolute;
  top: 0;
  right: 0;

  z-index: ${(Props) => (Props.isvisible ? 1 : -1)};
  width: 400px;
  height: 100vh;

  ::before {
    position: absolute;
    content: "";
    background-color: #000000;

    height: 100%;
    width: 100%;

    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;

    animation: ${(Props) =>
        Props.isvisible
          ? css`
              ${Anims.MenuFadeIn}
            `
          : css`
              ${Anims.MenuFadeOut}
            `}
      0.5s ease-in-out forwards;
  }

  height: 100vh;
  width: 300px;
`;

export const CloseUis = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isvisible",
})<Props>`
  position: fixed;

  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.5);

  animation: ${(Props) =>
      Props.isvisible
        ? css`
            ${Anims.ScreenFade}
          `
        : css`
            ${Anims.RemoveScreenFade}
          `}
    0.3s ease-in-out forwards;
`;

export const MenuLink = styled.a`
  font-size: 15px;
  font-weight: 100;

  text-decoration: none;
  transition: color 0.3s ease-in-out;

  position: relative;
`;

export const MenuLinkList = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isvisible",
})<Props>`
  height: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;

    gap: 1%;
    padding-top: 30%;

    height: 100%;

    & > div {
      text-align: right;
      width: 70%;

      padding-bottom: 3%;
      border-bottom: 1px solid rgba(85, 83, 83, 0.5);
      margin-right: 43px;

      opacity: 0;
      display: ${(Props) => (Props.isvisible ? "block" : "none")};

      animation: ${(Props) =>
        Props.isvisible
          ? css`
              ${Anims.ItemMenuFadeIn} 0.5s ease-in-out forwards
            `
          : "none"};

      &:hover {
        & > * {
          color: gray;
        }
      }

      &:nth-child(1) {
        animation-delay: 0.1s;
      }
      &:nth-child(2) {
        animation-delay: 0.15s;
      }
      &:nth-child(3) {
        animation-delay: 0.2s;
      }
      &:nth-child(4) {
        animation-delay: 0.25s;
      }
      &:nth-child(5) {
        animation-delay: 0.3s;
      }
      &:nth-child(6) {
        animation-delay: 0.35s;
      }
      &:nth-child(7) {
        animation-delay: 0.4s;
      }
      &:nth-child(8) {
        animation-delay: 0.45s;
      }
      &:nth-child(9) {
        animation-delay: 0.5s;
      }
      &:nth-child(10) {
        animation-delay: 0.55s;
      }
      &:nth-child(11) {
        animation-delay: 0.6s;
      }
      &:nth-child(12) {
        animation-delay: 0.65s;
      }
      &:nth-child(13) {
        animation-delay: 0.7s;
      }

      cursor: pointer;
    }

    & > :nth-child(1) {
      @media (min-width: 960px) {
        display: none;
      }
    }
    & > :nth-child(2) {
      @media (min-width: 960px) {
        display: none;
      }
    }
    & > :nth-child(3) {
      @media (min-width: 960px) {
        display: none;
      }
    }
    & > :nth-child(4) {
      @media (min-width: 960px) {
        display: none;
      }
    }
    & > :nth-child(5) {
      @media (min-width: 960px) {
        display: none;
      }
    }
    & > :nth-child(6) {
      @media (min-width: 960px) {
        display: none;
      }
    }
    & > :nth-child(7) {
      @media (min-width: 960px) {
        display: none;
      }
    }
  }
`;
