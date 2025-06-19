"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

import { PrimaryButton } from "@/styles/GlobalStyles";
import * as S from "./styles";

export default function Home() {
  const [state, setState] = useState({
    isPageLoaded: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setState((prev) => ({ ...prev, isPageLoaded: true }));
  }, []);

  return (
    <>
      <ReactLenis root options={{ duration: 0.6 }} />
      <S.Container>
        <S.Section imageurl="./images/backgrounds/FirstPic.webp">
          <div>
            <div>
              <S.SecondaryText>UPCOMING LAUNCH</S.SecondaryText>
              <S.PrimaryText>AX-4 MISSION</S.PrimaryText>
            </div>
            <PrimaryButton
              pageloaded={state.isPageLoaded}
              aria-label="Go to the spaceX website to learn more about an upcoming launch"
            >
              <a
                target="_blank"
                href="https://www.spacex.com/launches/mission/?missionId=ax-4"
                aria-label="Go to the spaceX website to learn more about an upcoming launch"
              >
                WATCH <span>about spaceX&quot;s in their website</span>
              </a>
            </PrimaryButton>
          </div>
        </S.Section>
        <S.Section imageurl="./images/backgrounds/SecondPic.webp">
          <div>
            <S.PrimaryText>
              THE ROAD TO MAKING LIFE MULTIPLANETARY
            </S.PrimaryText>
            <PrimaryButton aria-label="Go to the spaceX website to know more about the plans to go to mars">
              <a
                target="_blank"
                href="https://www.spacex.com/humanspaceflight/mars/"
                aria-label="Go to the spaceX website to know more about the plans to go to mars"
              >
                LEARN MORE
                <span>about spaceX&quot;s in their website</span>
              </a>
            </PrimaryButton>
          </div>
        </S.Section>
        <S.Section imageurl="./images/backgrounds/ThirdPic.webp">
          <div>
            <div>
              <S.SecondaryText>RECENT LAUNCH</S.SecondaryText>
              <S.PrimaryText>STARSHIP&apos;S NINTH FLIGHT TEST</S.PrimaryText>
            </div>
            <PrimaryButton aria-label="Go to the spaceX website to watch a launch">
              <a
                target="_blank"
                href="https://www.spacex.com/launches/mission/?missionId=starship-flight-9"
                aria-label="Go to the spaceX website to watch a launch"
              >
                REWATCH{" "}
                <span>the video of the launch on spaceX&quot;s website</span>
              </a>
            </PrimaryButton>
          </div>
        </S.Section>
        <S.Section imageurl="./images/backgrounds/FourthPic.webp">
          <div>
            <div>
              <S.SecondaryText>RECENT LAUNCH</S.SecondaryText>
              <S.PrimaryText>STARLINK MISSION</S.PrimaryText>
            </div>
            <PrimaryButton aria-label="Go to the spaceX website to watch an upcoming launch">
              <a
                target="_blank"
                href="https://www.spacex.com/launches/mission/?missionId=sl-15-9"
                aria-label="Go to the spaceX website to watch an upcoming launch"
              >
                REWATCH{" "}
                <span>the video of the launch on spaceX&quot;s website</span>
              </a>
            </PrimaryButton>
          </div>
        </S.Section>
        <S.Section imageurl="./images/backgrounds/SeventhPic.webp">
          <div>
            <div>
              <S.SecondaryText>RECENT LAUNCH</S.SecondaryText>
              <S.PrimaryText>STARLINK MISSION</S.PrimaryText>
            </div>
            <PrimaryButton aria-label="Go to the spaceX website to watch a recent launch">
              <a
                target="_blank"
                href="https://www.spacex.com/launches/mission/?missionId=sl-15-9"
                aria-label="Go to the spaceX website to watch a recent launch"
              >
                REWATCH{" "}
                <span>the video of the launch on spaceX&quot;s website</span>
              </a>
            </PrimaryButton>
          </div>
        </S.Section>
        <S.Section>
          <S.VideoSection
            autoPlay
            loop
            muted
            src={"./images/backgrounds/Fifth.mp4"}
          />
          <div>
            <div>
              <S.SecondaryText>RECENT LAUNCH</S.SecondaryText>
              <S.PrimaryText>STARLINK MISSION</S.PrimaryText>
            </div>
            <PrimaryButton aria-label="Go to the spaceX website to watch a recent launch">
              <a
                target="_blank"
                href="https://www.spacex.com/launches/mission/?missionId=sl-12-26"
                aria-label="Go to the spaceX website to watch a recent launch"
              >
                STARLINK MISSION
                <span>click to watch the video on spaceX&quot;s website</span>
              </a>
            </PrimaryButton>
          </div>
        </S.Section>
        <S.Section imageurl="./images/backgrounds/SixthPic.webp">
          <div>
            <S.PrimaryText>ADVANCING HUMAN SPACEFLIGHT</S.PrimaryText>
            <PrimaryButton aria-label="Go to the spaceX website to watch a recent launch">
              <a
                target="_blank"
                href="https://www.spacex.com/updates/#eva-suit"
                aria-label="Go to the spaceX website to learn more about the eva-suit"
              >
                LEARN MORE{" "}
                <span>about spaceX&quot;s suit in their website</span>
              </a>
            </PrimaryButton>
          </div>
        </S.Section>
      </S.Container>
    </>
  );
}
