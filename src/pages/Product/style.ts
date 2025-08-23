import styled from "styled-components";

type CardProductProps = {
  backgroundimage: string;
}

type ProductDescricaoProp = {
  margintop?: string;
}

type ProductSizeProp = {
  disabled?: any;
  check?: boolean;
}

export const ContainerProduct = styled.div`
  display: flex;
  padding: 60px 80px;
`;

export const DivProductPhotos = styled.div`
  display: flex;
  flex: 1;
`;

export const DivInfosProduct = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  padding-left: 40px;
`;

export const CardProduct = styled.div<CardProductProps>`
  height: 500px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 450px;
  width: 250px;
  border-radius: 25px;
  padding-bottom: 10px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  background-image: url(${(props: CardProductProps) => props.backgroundimage});
`;

export const NameProduct = styled.div`
  font-family: 'gilroy-bold', sans-serif;
  font-size: 25px;
  margin-top: 10px;
  text-decoration: none;
`;

export const DivPriceProduct = styled.div`
  display: flex;
  gap: 10px;

`;

export const PriceProduct = styled.p<{ fake?: boolean }>`
  font-family: 'gilroy-medium', sans-serif;
  font-size: 20px;
  color: ${(props) => props.fake ? '#A0A0A0' : '#000000'};
  text-decoration: ${(props) => props.fake ? 'line-through' : 'none'};
`;

export const ProductDescricao = styled.div<ProductDescricaoProp>`
  margin-top: ${(prop) => prop.margintop ? prop.margintop : '0px'};
  font-family: 'gilroy-medium';
  font-size: 18px;
`;

export const ProductSize = styled.div<ProductSizeProp>`
  width: 50px;
  height: 50px;
  border: ${(props) => props.check ? '2px solid #43bc2f' : '2px solid black'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-family: 'gilroy-bold';
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
  background-color: ${(props) => props.disabled ? 'lightgrey' : props.check ? 'white' : ''};
  color: ${(props) => props.disabled ? 'grey' : props.check ? '#43bc2f' : 'black'};
`;

export const FieldNumber = styled.input`
  border: 2px solid black;
  padding: 10px;
  border-radius: 10px;
  width: 165px;
  ;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-radius: 10px;
  margin-top: 10px;
  width: 300px;
  height: 50px;
  background-color: #ff7875;
  color: white;
  font-family: 'gilroy-bold';
`;