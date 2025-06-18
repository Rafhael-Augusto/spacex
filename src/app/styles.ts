"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  imageurl?: string;
  height?: string;

  heightdesktop?: string;
};

export const Container = styled.div`
  position: relative;

  overflow-x: hidden;
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

  background-color: rgba(0, 0, 0, 1);
  transition: opacity 0.5s ease-in-out;
`;

export const VideoSection = styled.video`
  position: relative;

  height: 100vh;
  width: 100vw;

  object-fit: cover;
  background-color: #000000;
`;

export const PrimaryText = styled(motion.span).withConfig({
  shouldForwardProp: (prop) => prop !== "height, heightdesktop",
})<Props>`
  position: absolute;

  font-size: 8.5vw;
  height: 16%;
  width: 90%;
  line-height: 1;

  bottom: ${(Props) => (Props.height ? Props.height : 18)}vw;
  left: 5%;

  @media (min-width: 500px) {
    width: 100%;
    height: 7vh;

    bottom: 17%;
    left: 5%;

    font-size: 220%;
  }

  @media (min-width: 600px) {
    height: 15vh;
    width: 287px;

    font-size: 350%;

    bottom: ${(Props) => (Props.heightdesktop ? Props.heightdesktop : 30)}vh;
    left: 8%;
  }

  @media (min-width: 960px) {
    bottom: 18%;
    left: 8%;

    width: 100%;
    font-size: 200%;

    width: 380px;
  }
`;

export const SecondaryText = styled(PrimaryText).withConfig({
  shouldForwardProp: (prop) => prop !== "height, heightdesktop",
})<Props>`
  position: absolute;

  font-size: 2.1vh;
  font-weight: lighter;
  font-family: "D-DIN-LIGHT", Arial, Helvetica, sans-serif;

  bottom: ${(Props) => (Props.height ? Props.height : 24)}vw;

  @media (min-width: 500px) {
    bottom: 20%;
  }

  @media (min-width: 600px) {
    bottom: ${(Props) => Props.heightdesktop}vh;
  }

  @media (min-width: 960px) {
    bottom: 20%;
  }
`;
