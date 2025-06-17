"use client";

import styled, { css } from "styled-components";

const sharedStyles = css`
  font-size: 3vw;
  font-family: "D-DIN-LIGHT", Arial, Helvetica, sans-serif;
  font-weight: lighter;

  @media (min-width: 600px) {
    font-size: 2vh;
  }

  @media (min-width: 960px) {
    font-size: 1.5vh;
  }
`;

export const Footer = styled.footer`
  text-align: center;

  background-color: #000000;
  padding-top: 6%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 4%;

    padding: 3% 0 5% 0;
  }

  @media (min-width: 960px) {
    padding: 0;

    & > div {
      padding: 2% 0 2% 0;
      gap: 3%;
    }
  }
`;

export const Copyright = styled.span`
  ${sharedStyles}
  color: #979797;

  @media (min-width: 960px) {
    display: none;
  }
`;

export const CopyrightDesktop = styled(Copyright)`
  display: none;
  @media (min-width: 960px) {
    display: block;
  }
`;

export const PrivacyPolicy = styled.a`
  ${sharedStyles}
  text-decoration: none;
  font-weight: bolder;

  cursor: pointer;
`;

export const Suppliers = styled.button`
  ${sharedStyles}

  font-weight: bolder;
  background-color: transparent;
  border: none;

  cursor: pointer;
`;
