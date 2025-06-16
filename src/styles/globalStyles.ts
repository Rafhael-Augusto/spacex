"use client";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: #fff;

        line-height: 20px;
        font-size: 14px;
        font-family: 'D-DIN', Arial, Helvetica, sans-serif, Verdada, sans-serif;
    }

    @font-face {
        font-family: 'D-DIN';
        src: url('./fonts/D-DIN-Bold.ttf');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'D-DIN-LIGHT';
        src: url('./fonts/D-DIN.ttf');
        font-weight: 400;
        font-style: normal;
    }

    body {
        background-color: #000000;
    }
`;

export const PrimaryButton = styled.button`
  position: absolute;

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
`;
