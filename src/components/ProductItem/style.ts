import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Card = styled.div<{ img: string }>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 450px;
  width: 250px;
  /* border: 1px solid black; */
  border-radius: 25px;
  padding-bottom: 10px;
  background-image: url(${(props: { img: string }) => props.img});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
    transform: scale(1.02);
  }

`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
`;

export const NameProduct = styled.p`
  font-family: 'gilroy-bold', sans-serif;
  font-size: 15px;
  margin-top: 10px;
  text-decoration: none;
`;

export const PriceProductContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 5px;
  text-decoration: none;
`;

export const PriceProduct = styled.p<{ fake?: boolean }>`
  font-family: 'gilroy-bold', sans-serif;
  font-size: 14px;
  color: ${props => props.fake ? '#A0A0A0' : '#000000'};
  text-decoration: ${props => props.fake ? 'line-through' : 'none'};
`;
