import styled from "styled-components";

export const KicthenMainBody = styled.div`
  width: 100%;
  min-height: 100dvh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 768px) {
    min-width: 100%;
    min-height: 100dvh;
    background-color: white;
  }
`;
export const KicthenPageBody = styled.div`
  width: 90%;
  min-height: 100dvh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-top: 10vh;
  @media (max-width: 768px) {
    min-width: 100%;
    min-height: auto;
    background-color: red;
    margin-top: 7.4dvh;
  }
`;
