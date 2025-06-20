"use client";

import { useRouter } from "next/navigation";
import * as S from "./styles";

export default function Footer() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/supplier");
  };

  return (
    <S.Footer>
      <S.Copyright>SPACEX &copy; 2025</S.Copyright>

      <div>
        <S.CopyrightDesktop>SPACEX &copy; 2025</S.CopyrightDesktop>
        <S.PrivacyPolicy
          target="_blank"
          href="https://www.spacex.com/media/privacy_policy_spacex.pdf"
        >
          PRIVACY POLICY
        </S.PrivacyPolicy>

        <S.Suppliers onClick={handleClick}>SUPPLIERS</S.Suppliers>
      </div>
    </S.Footer>
  );
}
