"use client";

import { createGlobalStyle } from "styled-components";

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
`;
