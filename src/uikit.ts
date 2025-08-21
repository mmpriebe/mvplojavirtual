import styled from "styled-components";

type DivFlexDirectioRowProp = {
  gap?: string;
  margintop?: string;
}

type DivFlexDirectioColumnProp = {
  gap?: string;
  marginTop?: string;
}

export const DivFlexDirectioColumn = styled.div<DivFlexDirectioColumnProp>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap ? props.gap : ''}
`;

export const DivFlexDirectioRow = styled.div<DivFlexDirectioRowProp>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap ? props.gap : ''};
  margin-top: ${(props) => props.margintop ? props.margintop : '0px'};
`;


export const ButtonAddCart = styled.button`
  padding: 15px 30px;
  background-color: #43bc2f;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: 'gilroy-bold', sans-serif;
  font-size: 15px;
`;