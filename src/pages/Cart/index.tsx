/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import { 
  CheckBox, 
  DivFlexDirectioRow, 
  Label, 
  LightButton, 
  Table, 
  Tbody, 
  Td, 
  TextField, 
  Th, 
  Thead, 
  Tr } from "../../uikit";
import { CartContainer, TitleCart } from "./style";
import { FiSearch } from "react-icons/fi";
import { calculateShipping, createPurchase, getCart } from "../../client/axios";
import Button from "../../components/Button";
import { FaCartArrowDown } from "react-icons/fa6";

export default function Cart() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  useEffect(() => {
    getCartAPI();
  }, [])
  
  const getCartAPI = async () => {
    const result = await getCart();
    console.log(result.data.itens)
    setCart(result.data)
  }

  const createPurchaseAPI = async () => {
    const result = await createPurchase();

    

    if(result.data.link) {
      window.location.href = result.data.link;
    }
  }

  const [cep, setCep] = useState('');
  const [cart, setCart] = useState<any>({ itens: [], total: 0 })
  const [dataShipping, setDataShipping] = useState({
    pac: {
      valor: 0,
      prazo: 0
    },
    sedex: {
      valor: 0,
      prazo: 0
    }
  })
  const [shippingMethod, setShippingMethod] = useState('');

  const getShippingValue = () => {
    if (shippingMethod === 'sedex') {
      return dataShipping.sedex.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    if (shippingMethod === 'pac') {
      return dataShipping.pac.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return 'R$ 0,00'
  }

  const calculateShippingAPI = async () => {
    try {
      const result = await calculateShipping(cep);

      if (result.data.pac) {
        setDataShipping(result.data);
      }
    } catch (error: any) {
      console.log(error.message)
    }

  }

  const getTotalValue = () => {
    if (shippingMethod === 'sedex') {
      const resultCalc = dataShipping.sedex.valor + cart.total;
      return resultCalc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    if (shippingMethod === 'pac') {
      const resultCalc = dataShipping.pac.valor + cart.total;
      return resultCalc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return cart.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  }

  return (
    <>
      <Menu />
      <CartContainer>
        <TitleCart>SEU CARRINHO <FaCartArrowDown size={25}/></TitleCart>
        <Table>
          <Thead>
            <Tr>
              <Th>Produto</Th>
              <Th>Quantidade</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart && cart.itens.map((item: any) => (
              <Tr>
                <Td>{item.nome}</Td>
                <Td>{item.quantidade}</Td>
                <Td>{item.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Label margintop="20px">CEP:</Label>

        <DivFlexDirectioRow gap="5px">
          <TextField heighttotal={'35px'} onChange={(e) => setCep(e.target.value)}value={cep}/>
          <LightButton onClick={() => calculateShippingAPI()}><FiSearch size={20} /></LightButton>
        </DivFlexDirectioRow>

        <DivFlexDirectioRow margintop="10px">
          <CheckBox type="checkbox" onChange={() => setShippingMethod('pac')} />
          PAC: {dataShipping.pac.prazo} dias - {dataShipping.pac.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </DivFlexDirectioRow>
        
        <DivFlexDirectioRow>
          <CheckBox type="checkbox" onChange={() => setShippingMethod('sedex')} />
          SEDEX: {dataShipping.sedex.prazo} dias - {dataShipping.sedex.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </DivFlexDirectioRow>

        <DivFlexDirectioRow justifycontent="flex-end" fontfamily="gilroy-bold">
          Valor Entrega: {getShippingValue()}
        </DivFlexDirectioRow>

        <DivFlexDirectioRow justifycontent="flex-end" fontfamily="gilroy-bold">
          Valor Total: {getTotalValue()}
        </DivFlexDirectioRow>
        
        <DivFlexDirectioRow justifycontent="space-between" alignitems="center" gap="10px" margintop="10px">
          <Link to={'/register?origin=cart'}>
            <Label>CADASTRAR-SE</Label>
          </Link>
          <Button onClick={() => createPurchaseAPI()}>FINALIZAR COMPRA</Button>
        </DivFlexDirectioRow>

        <DivFlexDirectioRow justifycontent="flex-start" margintop="10px">
        </DivFlexDirectioRow>
      </CartContainer>
    </>
  );
}

