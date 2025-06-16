import * as S from "./styles";

export default function Header() {
  return (
    <S.Header>
      <S.Logo alt="SpaceX logo" src={"/images/spacexLogo.png"} />
      <S.MenuButton>Open menu</S.MenuButton>
    </S.Header>
  );
}
