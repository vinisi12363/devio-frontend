import styled from "styled-components";

export const KitchenBody = styled.div`
  width: 100%;

  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-top: 2vh;
  box-sizing: border-box;
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
`;
export const KitchenReadyBox = styled.div`
  width: 100%;
  height: 70dvh;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px 0px 0px 20px;
  box-sizing: border-box;
`;
