import styled from "styled-components";

type buttonProps = {
  buttonColor: string
  TextButtonColor: string
}

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
export const FinalizeOrderButton = styled.button<buttonProps>`
  width: 400px;
  min-height: 45px;
  background-color: ${props=> props.buttonColor};
  border: 2px solid #9F9F9F;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  color:  ${props=> props.TextButtonColor};;
  cursor: pointer;
  position: relative;
  top: 3vw;
  left: 46vw;
  @media (max-width: 768px) {
    min-width: 21dvh;
    min-height: 5dvh;
    position: relative;
    top: 0.5dvh;
    left:4dvh;
    max-width: 40%;
    background-color:  ${props=> props.buttonColor};
    h2{
      margin-top:8px;
      color: white;
    }
  }
`;

export const CancelOrderButton = styled.button<buttonProps>`
  width: 400px;
  min-height: 45px;
  background-color:  ${props=> props.buttonColor};
  border: 2px solid #9F9F9F;
  color: ${props=>props.TextButtonColor};
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  top: 3vw;
  left: 35vw;
  @media (max-width: 768px) {
   min-width: 21dvh;
    min-height: 5dvh;
    text-align: center;
    position: relative;
    top: 0.5dvh;
    left:1dvh;
    max-width: 40%;
    background-color:  ${props=> props.buttonColor};
    h2{
      margin-top:8px;
      color: white;
    }
  }
`;
