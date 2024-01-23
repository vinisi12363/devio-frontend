import styled from "styled-components";

export const KitchenBody = styled.div`
  width: 100%;
  background-color: blue;
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-top: 2vh;
  box-sizing: border-box;
  @media (max-width: 768px) {
    brackground-color: green;
    flex-direction: row;
    height: 100%;
    width: 100%;
    display: flex;
  }

`;

export const KitchenPreparingBox = styled.div`
  width: 100%;
  height: 70dvh;
  background-color: white;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  border-right: 4px solid #000;
  padding: 15px 0px 0px 20px;
  @media (max-width: 768px) {
    brackground-color: green;
    border-right: none;
    border-bottom: 4px solid #000;
  }
`;
export const KitchenReadyBox = styled.div`
  width: 100%;
  height: 70dvh;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px 0px 0px 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    brackground-color: green;
  }
`;
