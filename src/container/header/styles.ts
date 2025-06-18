"use client";

import styled, { css } from "styled-components";
import * as Anims from "@/styles/animations";

import { Turn as Hamburger } from "hamburger-react";

type Props = {
  isvisible: boolean;
};

export const Header = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "isvisible",
})<Props>`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 9vh;

  transition: opacity 0.5s ease-in-out;

  &::before {
    position: absolute;

    content: "";
    height: 100%;
    width: 100%;

    z-index: -1;
    background-color: #000000;

    transform-origin: top;
    animation: ${(Props) =>
        Props.isvisible
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

export const Logo = styled.img`
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
    margin-top: 10px;
    margin-left: 4%;
  }

  cursor: pointer;
`;

export const MenuButton = styled(Hamburger)`
  background-color: transparent;
  cursor: pointer;
`;

export const Link = styled.a`
  display: none;
  position: relative;

  text-decoration: none;

  &::before {
    position: absolute;
    content: "";

    bottom: -30%;

    height: 100%;
    width: 100%;

    border-bottom: 2px solid #fff;

    transform: scaleX(0);
    transform-origin: right;

    z-index: 1;

    animation: ${Anims.BorderBottomOut} 0.2s ease-in-out forwards;
  }

  &:hover::before {
    animation: ${Anims.BorderBottomIn} 0.2s ease-in-out forwards;
  }

  @media (min-width: 960px) {
    display: inline;
    font-size: 0.95vw;
  }

  cursor: pointer;
`;

export const ShopNMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isvisible",
})<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2vh;

  margin-right: 6vh;
  transition: opacity ${(Props) => (Props.isvisible ? "0.8" : "0.2")}s
    ease-in-out;
`;

export const ShopButton = styled(Link)`
  display: none;
  text-decoration: none;

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.1vw;
    margin-bottom: 0.3vw;
    margin-top: 3%;
  }

  cursor: pointer;
`;

export const LinkList = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: left;

    width: 100%;
    margin-left: 3.5vw;
    gap: 2.2vw;
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

export const CloseUis = styled.div`
  position: fixed;
  display: none;

  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
