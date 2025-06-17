"use client";

import styled from "styled-components";
import { PrimaryButton } from "@/styles/globalStyles";

export const Container = styled.div`
  width: 98vw;
  height: 228vw;

  background-color: #000000;

  overflow: hidden;

  @media (min-width: 600px) {
    height: 100vh;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: left;

  width: 90%;
  height: 100%;

  margin: 0 auto;
  padding-top: 34%;

  @media (min-width: 600px) {
    padding-top: 22%;
    width: 92%;
  }

  @media (min-width: 960px) {
    width: 75%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 8.4vw;
  padding-bottom: 10%;

  @media (min-width: 600px) {
    font-size: 4.8vh;
    padding-bottom: 0%;
  }
`;

export const SubTitle = styled.h2`
  width: 100%;

  font-size: 4.2vw;
  margin-bottom: 10%;
  margin-top: 7%;

  @media (min-width: 600px) {
    font-size: 2.5vh;
    margin-bottom: 10%;
    margin-top: 5%;
  }
`;

export const SupplierText = styled.div`
  white-space: pre-wrap;

  margin-bottom: 10%;
  margin-top: 8%;
  line-height: 6.3vw;

  font-size: 4.32vw;
  font-weight: lighter;
  font-family: "D-DIN-LIGHT";

  @media (min-width: 600px) {
    font-size: 2.5vh;
    line-height: 3.3vh;

    margin-top: 5%;
    margin-bottom: 0.5%;
  }
`;

export const Button = styled(PrimaryButton)`
  position: relative;
  display: block;

  bottom: 0%;
  left: 0;

  width: 100%;

  @media (min-width: 600px) {
    width: 290px;
  }
`;

export const ButtonsDiv = styled.div`
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: left;

    gap: 8%;
    margin-top: 3%;
  }
`;
