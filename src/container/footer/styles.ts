"use client";

import styled, { css } from "styled-components";

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

const sharedStyles = css`
  font-size: 80%;
  font-family: "D-DIN", Arial, Helvetica, sans-serif;
  font-weight: lighter;
`;

export const Copyright = styled.span`
  ${sharedStyles}
`;

export const PrivacyPolicy = styled.a`
  ${sharedStyles}
  text-decoration: none;
`;

export const Suppliers = styled.button`
  ${sharedStyles}

  background-color: transparent;
  border: none;
`;
