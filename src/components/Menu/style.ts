import styled from "styled-components";

type SideProps = {
  side?: "left" | "right";
}

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  justify-content: start;
  align-items: center;
  background-color: #111;
  img {
    height: 60px;
  }
`;

export const MenuSide = styled.div<SideProps>`
  display: flex;
  justify-content: ${props => props.side === "right" ? "flex-end" : "flex-start"};
  align-items: center;
  padding-left: 80px;
  padding-right: 80px;
  gap: 10px;
  flex: 1;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
  transition: all ease 0.3s;
  height: 100%;
  font-family: 'gilroy-bold', sans-serif;
  color: #43bc2f;
`;