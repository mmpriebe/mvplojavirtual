import styled from "styled-components";

type DivFlexDirectioRowProp = {
  widthProps?: string;
  gap?: string;
  margintop?: string;
  justifycontent?: string;
  fontfamily?: string;
  fontsize?: string;
};

type DivFlexDirectioColumnProp = {
  widthProps?: string;
  heightTotal?: string;
  gap?: string;
  margintop?: string;
  justifycontent?: string;
  alignitems?: string;
  fontfamily?: string;
  fontsize?: string;
  paddingProp?: string;
};

type LabelProps = {
  margintop?: string;
};

type InputProps = {
  maxwidth?: string;
  margintop?: string;
};

export const DivFlexDirectioColumn = styled.div<DivFlexDirectioColumnProp>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.widthProps ? props.widthProps : "")};
  height: ${(props) => (props.heightTotal ? props.heightTotal : "")};
  gap: ${(props) => (props.gap ? props.gap : "")};
  margin-top: ${(props) => (props.margintop ? props.margintop : "0px")};
  justify-content: ${(props) =>
    props.justifycontent ? props.justifycontent : "flex-start"};
  align-items: ${(props) => (props.alignitems ? props.alignitems : "")};
  font-family: ${(props) =>
    props.fontfamily ? props.fontfamily : "gilroy-regular"};
  font-size: ${(props) => (props.fontsize ? props.fontsize : "14px")};
  padding: ${(props) => (props.paddingProp ? props.paddingProp : "0px")};
`;

export const DivFlexDirectioRow = styled.div<DivFlexDirectioRowProp>`
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.widthProps ? props.widthProps : "")};
  gap: ${(props) => (props.gap ? props.gap : "")};
  margin-top: ${(props) => (props.margintop ? props.margintop : "0px")};
  justify-content: ${(props) =>
    props.justifycontent ? props.justifycontent : "flex-start"};
  font-family: ${(props) =>
    props.fontfamily ? props.fontfamily : "gilroy-regular"};
  font-size: ${(props) => (props.fontsize ? props.fontsize : "14px")};
`;

export const ButtonAddCart = styled.button`
  padding: 15px 30px;
  background-color: #43bc2f;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: "gilroy-bold", sans-serif;
  font-size: 15px;
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 80px;
`;

export const Table = styled.table`
  font-family: "gilroy-bold", sans-serif;
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  border-bottom: 2px solid #111;
`;

export const Tr = styled.tr`
  text-align: left;
`;

export const Th = styled.th`
  padding: 10px 0px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 10px 0px;
  text-align: left;
  /* border-bottom: 1px solid #111; */
`;

export const Tbody = styled.tbody`
  padding: 10px;
`;

export const Label = styled.label<LabelProps>`
  color: #111;
  font-family: "gilroy-bold";
  font-size: 12px;
  margin-top: ${(props) => (props.margintop ? props.margintop : "0px")};
`;

export const TextField = styled.input<InputProps>`
  margin-top: ${(props) => (props.margintop ? props.margintop : "0px")};
  padding: 15px;
  height: 50px;
  width: 100%;
  max-width: ${(props) => (props.maxwidth ? props.maxwidth : "200px")};
  outline: 0;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 13px;
  color: #111;
`;

export const LightButton = styled.button`
  background-color: transparent;
  border: 2px solid black;
  padding: 0px 8px;
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const CheckBox = styled.input`
  border: 1px solid black;
  margin-right: 5px;
`;
