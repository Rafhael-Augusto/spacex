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
        <S.SecondaryText heightdesktop={"28"}>UPCOMING LAUNCH</S.SecondaryText>
        <S.PrimaryText heightdesktop={"26"}>AX-4 MISSION</S.PrimaryText>
        <PrimaryButton aria-label="Go to the spaceX website to learn more about an upcoming launch">
          <a
            target="_blank"
            href="https://www.spacex.com/launches/mission/?missionId=ax-4"
            aria-label="Go to the spaceX website to learn more about an upcoming launch"
          >
            LEARN MORE
          </a>
        </PrimaryButton>
      </S.Section>
      <S.Section
        style={{ opacity: state.isPageLoaded ? "1" : "0" }}
        imageurl="./images/backgrounds/SecondPic.jpg"
      >
        <S.PrimaryText heightdesktop={"34"} height="28">
          THE ROAD TO MAKING LIFE MULTIPLANETARY
        </S.PrimaryText>
        <PrimaryButton aria-label="Go to the spaceX website to know more about the plans to go to mars">
          <a
            target="_blank"
            href="https://www.spacex.com/humanspaceflight/mars/"
            aria-label="Go to the spaceX website to know more about the plans to go to mars"
          >
            LEARN MORE
          </a>
        </PrimaryButton>
      </S.Section>
      <S.Section
        style={{ opacity: state.isPageLoaded ? "1" : "0" }}
        imageurl="./images/backgrounds/ThirdPic.jpg"
      >
        <S.SecondaryText heightdesktop={"35"} height="33">
          RECENT LAUNCH
        </S.SecondaryText>
        <S.PrimaryText heightdesktop={"33"} height="28">
          STARSHIP&apos;S NINTH FLIGHT TEST
        </S.PrimaryText>
        <PrimaryButton aria-label="Go to the spaceX website to watch a launch">
          <a
            target="_blank"
            href="https://www.spacex.com/launches/mission/?missionId=starship-flight-9"
            aria-label="Go to the spaceX website to watch a launch"
          >
            REWATCH
          </a>
        </PrimaryButton>
      </S.Section>
      <S.Section
        style={{ opacity: state.isPageLoaded ? "1" : "0" }}
        imageurl="./images/backgrounds/FourthPic.jpg"
      >
        <S.SecondaryText heightdesktop={"28"} height="24">
          UPCOMING LAUNCH
        </S.SecondaryText>
        <S.PrimaryText heightdesktop={"26"} height="18">
          STARLINK MISSION
        </S.PrimaryText>
        <PrimaryButton aria-label="Go to the spaceX website to watch an upcoming launch">
          <a
            target="_blank"
            href="https://www.spacex.com/launches/mission/?missionId=sl-15-9"
            aria-label="Go to the spaceX website to watch an upcoming launch"
          >
            REWATCH
          </a>
        </PrimaryButton>
      </S.Section>
      <S.Section
        style={{ opacity: state.isPageLoaded ? "1" : "0" }}
        imageurl="./images/backgrounds/SeventhPic.jpg"
      >
        <S.SecondaryText heightdesktop={"28"} height="24">
          RECENT LAUNCH
        </S.SecondaryText>
        <S.PrimaryText heightdesktop={"26"} height="18">
          STARLINK MISSION
        </S.PrimaryText>
        <PrimaryButton aria-label="Go to the spaceX website to watch a recent launch">
          <a
            target="_blank"
            href="https://www.spacex.com/launches/mission/?missionId=sl-15-9"
            aria-label="Go to the spaceX website to watch a recent launch"
          >
            REWATCH
          </a>
        </PrimaryButton>
      </S.Section>
      <S.Section style={{ opacity: state.isPageLoaded ? "1" : "0" }}>
        <S.VideoSection
          autoPlay
          loop
          muted
          src={"./images/backgrounds/Fifth.mp4"}
        />
        <S.SecondaryText heightdesktop={"28"} height="26">
          RECENT LAUNCH
        </S.SecondaryText>
        <S.PrimaryText heightdesktop={"26"} height="20">
          STARLINK MISSION
        </S.PrimaryText>
        <PrimaryButton aria-label="Go to the spaceX website to watch a recent launch">
          <a
            target="_blank"
            href="https://www.spacex.com/launches/mission/?missionId=sl-12-26"
            aria-label="Go to the spaceX website to watch a recent launch"
          >
            STARLINK MISSION
          </a>
        </PrimaryButton>
      </S.Section>
      <S.Section
        style={{ opacity: state.isPageLoaded ? "1" : "0" }}
        imageurl="./images/backgrounds/SixthPic.jpg"
      >
        <S.PrimaryText heightdesktop={"34"} height="28">
          ADVANCING HUMAN SPACEFLIGHT
        </S.PrimaryText>
        <PrimaryButton aria-label="Go to the spaceX website to watch a recent launch">
          <a
            target="_blank"
            href="https://www.spacex.com/updates/#eva-suit"
            aria-label="Go to the spaceX website to learn more about the eva-suit"
          >
            LEARN MORE
          </a>
        </PrimaryButton>
      </S.Section>
    </S.Container>
  );
}
