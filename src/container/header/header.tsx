"use client";

import { useRouter } from "next/navigation";
import * as S from "./styles";

export default function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <S.Header>
      <S.Logo
        onClick={handleClick}
        alt="SpaceX logo"
        src={"/images/spacexLogo.png"}
      />
      <S.MenuButton>
        <span />
        <span />
        <span />
      </S.MenuButton>
    </S.Header>
  );
}
