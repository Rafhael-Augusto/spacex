"use client";

import { createGlobalStyle } from "styled-components";
import * as Anims from "./animations";

export const GlobalStyles = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: #fff;

        line-height: 20px;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bolder;
    }

    body {
        background-color: #000000;
    }

    html {
      scroll-behavior: smooth;
    }
`;

import styled from "styled-components";

export const PrimaryButton = styled.div`
  position: absolute;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;

  font-weight: 700;
  font-size: 2vh;

  height: 14vw;
  width: 44vw;

  bottom: 11.5%;
  left: 5%;

  transition: all 0.2s ease-in-out;
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;

    background-color: #fff;
    transform: scaleY(0);
    transform-origin: top;

    z-index: -1;

    animation: ${Anims.FadeOut} 0.2s ease-in-out forwards;
  }

  &:hover::before {
    animation: ${Anims.FadeIn} 0.2s ease-in-out forwards;
  }

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    height: 100%;
    width: 100%;

    background-color: transparent;
    color: #fff;

    transition: all 0.2s ease-in-out;

    &:hover {
      color: #000000;
    }

    & > span {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  }
  @media (min-width: 500px) {
    width: 170px;
    height: 56px;

    bottom: 60px;
    left: 5%;
  }

  @media (min-width: 600px) {
    bottom: 16%;
    left: 8%;
  }
`;
