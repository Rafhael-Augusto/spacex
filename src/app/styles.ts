"use client";

import styled from "styled-components";

type Props = {
  imageurl?: string;
  height?: string;
};

export const Container = styled.div`
  position: relative;
`;

export const Section = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "imageurl",
})<Props>`
  position: relative;

  height: 100vh;
  width: 100vw;

  background-image: url(${(Props) => Props.imageurl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-color: #000000;
`;

export const VideoSection = styled.video`
  position: relative;

  height: 100vh;
  width: 100vw;

  object-fit: cover;
  background-color: #000000;
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

  height: 8%;
  width: 44%;

  bottom: 11.5%;
  left: 5%;
`;

export const PrimaryText = styled.span<Props>`
  position: absolute;

  font-size: 8.5vw;
  height: 16%;
  width: 90%;
  line-height: 1;

  bottom: ${(Props) => (Props.height ? Props.height : 18)}vw;
  left: 5%;
`;

export const SecondaryText = styled(PrimaryText)<Props>`
  position: absolute;

  font-size: 2.1vh;
  font-weight: lighter;
  font-family: "D-DIN-LIGHT", Arial, Helvetica, sans-serif;

  bottom: ${(Props) => (Props.height ? Props.height : 24)}vw;
`;
