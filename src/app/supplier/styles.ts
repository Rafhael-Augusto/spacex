"use client";

import styled from "styled-components";
import { PrimaryButton } from "@/styles/globalStyles";

export const Container = styled.div`
  width: 100vw;
  height: 228vw;

  background-color: #000000;
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
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 8.4vw;
  padding-bottom: 10%;
`;

export const SubTitle = styled.h2`
  width: 100%;

  font-size: 4.2vw;
  margin-bottom: 10%;
  margin-top: 7%;
`;

export const SupplierText = styled.div`
  white-space: pre-wrap;

  margin-bottom: 10%;
  margin-top: 8%;
  line-height: 6.3vw;

  font-size: 4.32vw;
  font-weight: lighter;
  font-family: "D-DIN-LIGHT";
`;

export const Button = styled(PrimaryButton)`
  position: relative;
  display: block;

  bottom: 0%;
  left: 0;

  width: 100%;
`;
