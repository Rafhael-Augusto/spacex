import * as S from "./styles";

export default function Supplier() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>BECOMING A SUPPLIER</S.Title>
        <div>
          <S.SupplierText>
            SpaceX is committed to including diverse suppliers in our sourcing
            process, which enhances our ability to provide the most reliable,
            high-quality, and cost-effective products and services.
          </S.SupplierText>
          <S.SupplierText>
            While SpaceX develops and manufactures its technologies and products
            in-house, often times we can leverage specialized, small, nimble, or
            local suppliers that enable us to achieve our goals.
          </S.SupplierText>
        </div>
        <div>
          <S.SubTitle>Interested in doing business with us?</S.SubTitle>
          <S.Button>BECOME A SUPPLIER</S.Button>
        </div>
        <div>
          <S.SubTitle>Already a supplier?</S.SubTitle>
          <S.Button>SIGN IN</S.Button>
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
