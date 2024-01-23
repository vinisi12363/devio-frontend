import styled from "styled-components";

export const MainBody = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 768px) {
    max-width: 100%;
    background-color: green;
  }
`;
export const PageBody = styled.div`
  width: 80%;
  height: 100dvh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-top: 10vh;
  @media (max-width: 768px) {
    min-width: 100%;
    background-color: white;
  }
`;
