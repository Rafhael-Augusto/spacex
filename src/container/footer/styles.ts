"use client";

import styled, { css } from "styled-components";

const sharedStyles = css`
  font-size: 3vw;
  font-family: "D-DIN-LIGHT", Arial, Helvetica, sans-serif;
  font-weight: lighter;
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
`;

export const Copyright = styled.span`
  ${sharedStyles}
  color: #979797;
`;

export const PrivacyPolicy = styled.a`
  ${sharedStyles}
  text-decoration: none;
  font-weight: bolder;
`;

export const Suppliers = styled.button`
  ${sharedStyles}

  font-weight: bolder;
  background-color: transparent;
  border: none;
`;
