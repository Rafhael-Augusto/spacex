"use client";

import styled from "styled-components";

type Props = {
  imageurl?: string;
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

  & > div {
    position: absolute;

    bottom: 80px;
    left: 20px;

    gap: 20px;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 3px;

      & > * {
        width: 100%;
      }
    }

    @media (min-width: 600px) {
      bottom: 120px;
      left: 50px;
      width: 50%;
    }

    @media (min-width: 960px) {
      width: 520px;
    }
  }
`;

export const VideoSection = styled.video`
  position: relative;

  height: 100vh;
  width: 100vw;

  object-fit: cover;
  background-color: #000000;
`;

export const PrimaryText = styled.span`
  font-size: 32px;
  height: 16%;
  width: 90%;
  line-height: 1;

  @media (min-width: 600px) {
    font-size: 40px;
  }
`;

export const SecondaryText = styled(PrimaryText)`
  font-size: 2.1vh;
  font-weight: lighter;
  font-family: "D-DIN-LIGHT", Arial, Helvetica, sans-serif;
`;
