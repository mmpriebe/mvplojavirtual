import styled from "styled-components";

type TituloLoginProps = {
  fontfamily?: string;
  margintop?: string;
};
export const TituloLogin = styled.h1<TituloLoginProps>`
  font-family: ${(props) => (props.fontfamily ? props.fontfamily : "")};
  margin-top: ${(props) => (props.margintop ? props.margintop : "")};
  font-size: 1.2rem;
`;

export const ButtonLogin = styled.button`
  padding: 6px 20px;
  width: 100%;
  max-width: 150px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 2px solid black;
  color: black;
  outline: none;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
`;

export const DivEsqueciSenha = styled.div`
  display: flex;
  justify-content: start;
  flex: 2;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const DivLinkCadastro = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ErrorLogin = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-top: 10px;
  padding-left: 10px;
  height: 50px;
  width: 430px;
  border: 2px solid red;
  background-color: coral;
  color: white;
  font-family: "gilroy-bold";
  border-radius: 10px;
`;
