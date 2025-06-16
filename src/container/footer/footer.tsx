import * as S from "./styles";

export default function Footer() {
  return (
    <S.Footer>
      <S.Copyright>SPACEX &copy; 2025</S.Copyright>

      <div>
        <S.PrivacyPolicy
          target="_blank"
          href="https://www.spacex.com/media/privacy_policy_spacex.pdf"
        >
          PRICAVY POLICY
        </S.PrivacyPolicy>

        <S.Suppliers>SUPPLIERS</S.Suppliers>
      </div>
    </S.Footer>
  );
}
