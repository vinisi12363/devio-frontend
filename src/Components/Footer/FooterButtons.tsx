import styled from "styled-components";

export const FinalizeOrderButton = styled.button`
  min-width: 400px;
  min-height: 35px;
  background-color: lightgrey;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  cursor: pointer;
  position: relative;
  top: 3vw;
  left: 25vw;
  @media (max-width: 768px) {
    position: relative;
  top: 0vw;
  left:0vw;
  }
`;

export const CancelOrderButton = styled.button`
  min-width: 400px;
  min-height: 35px;
  background-color: lightgrey;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  cursor: pointer;
  position: relative;
  top: 3vw;
  left: 12vw;
  @media (max-width: 768px) {
    position: relative;
  top: 0vw;
  left:0vw;
  }
`;
