import { Button } from "../Button/style";
import { Card, Container, ContainerButton, NameProduct, PriceProduct, PriceProductContainer } from "./style";


export default function ProductItem(props: any) {

  const principalSize = props.product.tamanhos.find((size: any) => size.principal === true);

  return (
    <>
    <Container>
      <Card img={props.product.fotos}>
        <ContainerButton>
          <Button>ADICIONAR AO CARRINHO</Button>
        </ContainerButton>
      </Card>
      <NameProduct>{props.product.nome}</NameProduct>
      <PriceProductContainer>
        <PriceProduct fake>{principalSize.preco_de.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</PriceProduct>
        <PriceProduct>{principalSize.preco_por.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</PriceProduct>
      </PriceProductContainer>
    </Container>
    </>
  )
}