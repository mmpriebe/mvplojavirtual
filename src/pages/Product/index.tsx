import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../../components/Menu";
import { CardProduct, ContainerProduct, DivInfosProduct, DivPriceProduct, DivProductPhotos, FieldNumber, NameProduct, PriceProduct, ProductDescricao, ProductSize } from "./style";
import { getProduct } from "../../client/axios";
import { ButtonAddCart, DivFlexDirectioRow } from "../../uikit";
import Button from "../../components/Button";

export default function Product() {

  const { id }: any = useParams();

  const [product, setProduct] = useState<any>(null);
  const [productPrincipalSize, setProductPrincipalSize] = useState<any>(null)
  const [chosenSize, setChosenSize] = useState({ quantidade_estoque: 0 });
  const [quantity, setQuantity] = useState(0);

  console.log(chosenSize)

  const getProductAPI = async (id: string) => {
    const result = await getProduct(id);

    console.log(result)
    setProduct(result)
    setProductPrincipalSize(
      result?.tamanhos.find((size: any) => size.principal)
    )
  }

  const checkSize = (size: any) => {
    if (size.quantidade_estoque > 0) {
      setChosenSize(size);
    }
  }

  useEffect(() => {
    getProductAPI(id)
  }, [])

  return (
    <>
      <Menu />
      {product &&
        <ContainerProduct>
          <DivProductPhotos>
            <CardProduct backgroundimage={product.fotos}></CardProduct>
          </DivProductPhotos>
          <DivInfosProduct>
            <NameProduct>{product.nome}</NameProduct>
            <DivFlexDirectioRow gap={'5px'} margintop={'5px'}>

              {productPrincipalSize &&
                <>
                  <PriceProduct fake>{productPrincipalSize.preco_de.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceProduct>
                  <PriceProduct >{productPrincipalSize.preco_por.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceProduct>
                </>
              }

            </DivFlexDirectioRow>
            <ProductDescricao margintop={'40px'}>
              {product.descricao}
            </ProductDescricao>
            <DivFlexDirectioRow gap={'10px'} margintop={'10px'}>
              {product.tamanhos && product.tamanhos.map((size: any) => {
                return (
                  <ProductSize
                    onClick={() => { checkSize(size) }}
                    disabled={size.quantidade_estoque < 1 ? 'true' : false}
                    check={size == chosenSize ? true : false}
                  >
                    {size.nome}
                  </ProductSize>)
              })}
            </DivFlexDirectioRow>
            <DivFlexDirectioRow margintop='20px'>
              <FieldNumber
                type="number"
                value={quantity}
                onChange={(e: any) => setQuantity(e.target.value)}
                min={1}
                max={chosenSize.quantidade_estoque}
              />
            </DivFlexDirectioRow>
            <DivFlexDirectioRow margintop="30px">
              <ButtonAddCart>ADICIONAR AO CARRINHO</ButtonAddCart>
            </DivFlexDirectioRow>
          </DivInfosProduct>
        </ContainerProduct>
      }
      {!product &&
        <>Carregando produto...</>
      }
    </>
  )
}