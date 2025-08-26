import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../../components/Menu";
import { 
  CardProduct, 
  ContainerProduct, 
  DivInfosProduct,
  DivProductPhotos,
  DivVoltarPraHome,
  Error, 
  FieldNumber,
  NameProduct,
  PriceProduct,
  ProductDescricao,
  ProductSize 
} from "./style";

import { addProductCart, getProduct } from "../../client/axios";
import { ButtonAddCart, DivFlexDirectioColumn, DivFlexDirectioRow } from "../../uikit";
import { FaArrowLeft, } from "react-icons/fa6";

export default function Product() {
  const navigate = useNavigate();
  const { id }: any = useParams();

  const [ error, setError] = useState('');
  const [product, setProduct] = useState<any>(null);
  const [productPrincipalSize, setProductPrincipalSize] = useState<any>(null)
  const [chosenSize, setChosenSize] = useState({ nome: '', quantidade_estoque: 0 });
  const [quantity, setQuantity] = useState(0);


  const getProductAPI = async (id: string) => {

    try {
    const result = await getProduct(id);

    if(!result) {
      throw 'Produto não encontrado!';
    }

    setProduct(result)
    setProductPrincipalSize(
      result?.tamanhos.find((size: any) => size.principal)
    )
    } catch (error) {
      navigate('/')
    }
  }

  const checkSize = (size: any) => {
    if (size.quantidade_estoque > 0) {
      setChosenSize(size);
    }
  }

  useEffect(() => {
    getProductAPI(id)
  }, [])

  const addProductCartAPI = async () => {
    
    setError('')
    
    if(!chosenSize.nome) {
      setError('Por favor escolha um tamanho com estoque');
    }

    if(quantity === 0) {
      setError('Por favor, escolha a quantidade do produto');
      return;
    }

    try {
      const result = await addProductCart({
        id,
        quantidade: quantity,
        tamanho: chosenSize.nome
      });

      if(result.data) {
        navigate(`/cart`);
      }

    } catch (error: any) {
      setError(error.message);
      return;
    }

    
  }



  return (
    <>
      <Menu />
      <Link to={'/'}>
        <DivVoltarPraHome> <FaArrowLeft/> VOLTAR PARA HOME</DivVoltarPraHome>
      </Link>
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
              {product.descricacao}
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
            {error && (
                <Error>{error}</Error>
              )  
          }

            <DivFlexDirectioRow margintop="30px">
              <ButtonAddCart onClick={() => addProductCartAPI()}>ADICIONAR AO CARRINHO</ButtonAddCart>
            </DivFlexDirectioRow>
          </DivInfosProduct>
        </ContainerProduct>
      }
      {!product &&
        <>
          <DivFlexDirectioColumn>
            Carregando produto...
          </DivFlexDirectioColumn>
        </>
      }
    </>
  )
}