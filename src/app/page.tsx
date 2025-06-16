"use client";

import { useEffect, useState } from "react";

import { PrimaryButton } from "@/styles/globalStyles";
import * as S from "./styles";

export default function Home() {
  const [state, setState] = useState({
    isPageLoaded: false,
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, isPageLoaded: true }));
  }, []);

  return (
    <S.Container>
      <S.Section
        style={{ opacity: state.isPageLoaded ? "1" : "0" }}
        imageurl="./images/backgrounds/FirstPic.jpg"
      >
        <S.SecondaryText>UPCOMING LAUNCH</S.SecondaryText>
        <S.PrimaryText>AX-4 MISSION</S.PrimaryText>
        <PrimaryButton>LEARN MORE</PrimaryButton>
      </S.Section>
      <S.Section
        style={{ opacity: state.isPageLoaded ? "1" : "0" }}
        imageurl="./images/backgrounds/SecondPic.jpg"
      >
        <S.PrimaryText height="28">
          THE ROAD TO MAKING LIFE MULTIPLANETARY
        </S.PrimaryText>
        <PrimaryButton>LEARN MORE</PrimaryButton>
      </S.Section>
      <S.Section
        style={{ opacity: state.isPageLoaded ? "1" : "0" }}
        imageurl="./images/backgrounds/ThirdPic.jpg"
      >
        <S.SecondaryText height="34">RECENT LAUNCH</S.SecondaryText>
        <S.PrimaryText height="28">
          STARSHIP&apos;S NINTH FLIGHT TEST
        </S.PrimaryText>
        <PrimaryButton>REWATCH</PrimaryButton>
      </S.Section>
      <S.Section
        style={{ opacity: state.isPageLoaded ? "1" : "0" }}
        imageurl="./images/backgrounds/FourthPic.jpg"
      >
        <S.SecondaryText height="24">RECENT LAUNCH</S.SecondaryText>
        <S.PrimaryText height="18">STARLINK MISSION</S.PrimaryText>
        <PrimaryButton>REWATCH</PrimaryButton>
      </S.Section>
      <S.Section style={{ opacity: state.isPageLoaded ? "1" : "0" }}>
        <S.VideoSection
          autoPlay
          loop
          muted
          src={"./images/backgrounds/Fifth.mp4"}
        />
        <S.SecondaryText height="26">RECENT LAUNCH</S.SecondaryText>
        <S.PrimaryText height="20">STARLINK MISSION</S.PrimaryText>
        <PrimaryButton>REWATCH</PrimaryButton>
      </S.Section>
      <S.Section
        style={{ opacity: state.isPageLoaded ? "1" : "0" }}
        imageurl="./images/backgrounds/Sixth.jpg"
      >
        <S.PrimaryText height="28">ADVANCING HUMAN SPACEFLIGHT</S.PrimaryText>
        <PrimaryButton>LEARN MORE</PrimaryButton>
      </S.Section>
    </S.Container>
  );
}
