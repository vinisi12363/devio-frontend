import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: white;
  height: 8dvh;
  @media (max-width: 768px) {
    z-index: 1;
    position: fixed;
    bottom: 0;

  }



`
export const FinalizeOrderButton = styled.button`
  width: 400px;
  height: 35px;
  background-color: lightgrey;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  position: relative;
  top: 3vw;
  left: 25vw;
  @media (max-width: 768px) {
    min-height: 5dvh;
    position: relative;
    top: 0.5dvh;
    left:6dvh;
    max-width: 40%;
    background-color: Crimson;
    h2{
      margin-top:8px;
      color: white;
    }
  }
`;

export const CancelOrderButton = styled.button`
  width: 400px;
  height: 35px;
  background-color: lightgrey;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  top: 3vw;
  left: 12vw;
  @media (max-width: 768px) {
    min-height: 5dvh;
    text-align: center;
    position: relative;
    top: 0.5dvh;
    left:1dvh;
    max-width: 40%;
    background-color: Crimson;
    h2{
      margin-top:8px;
      color: white;
    }
  }
`;
