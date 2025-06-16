import Header from "@/container/header/header";

import * as S from "./styles";
import Footer from "@/container/footer/footer";

export default function Home() {
  return (
    <S.Container>
      <Header />
      <S.Section imageurl="./images/backgrounds/FirstPic.jpg">
        <S.SecondaryText>UPCOMING LAUNCH</S.SecondaryText>
        <S.PrimaryText>AX-4 MISSION</S.PrimaryText>
        <S.PrimaryButton>LEARN MORE</S.PrimaryButton>
      </S.Section>
      <S.Section imageurl="./images/backgrounds/SecondPic.jpg">
        <S.PrimaryText height="28">
          THE ROAD TO MAKING LIFE MULTIPLANETARY
        </S.PrimaryText>
        <S.PrimaryButton>LEARN MORE</S.PrimaryButton>
      </S.Section>
      <S.Section imageurl="./images/backgrounds/ThirdPic.jpg">
        <S.SecondaryText height="34">RECENT LAUNCH</S.SecondaryText>
        <S.PrimaryText height="28">
          STARSHIP&apos;S NINTH FLIGHT TEST
        </S.PrimaryText>
        <S.PrimaryButton>REWATCH</S.PrimaryButton>
      </S.Section>
      <S.Section imageurl="./images/backgrounds/FourthPic.jpg">
        <S.SecondaryText height="24">RECENT LAUNCH</S.SecondaryText>
        <S.PrimaryText height="18">STARLINK MISSION</S.PrimaryText>
        <S.PrimaryButton>REWATCH</S.PrimaryButton>
      </S.Section>
      <S.Section>
        <S.VideoSection
          autoPlay
          loop
          muted
          src={"./images/backgrounds/Fifth.mp4"}
        />
        <S.SecondaryText height="26">RECENT LAUNCH</S.SecondaryText>
        <S.PrimaryText height="20">STARLINK MISSION</S.PrimaryText>
        <S.PrimaryButton>REWATCH</S.PrimaryButton>
      </S.Section>
      <S.Section imageurl="./images/backgrounds/Sixth.jpg">
        <S.PrimaryText height="28">ADVANCING HUMAN SPACEFLIGHT</S.PrimaryText>
        <S.PrimaryButton>LEARN MORE</S.PrimaryButton>
      </S.Section>
      <Footer />
    </S.Container>
  );
}
