import styled from "styled-components";

type CardProps = {
  bordaVerde:string
}

type displayButtonProps = {
  display: string;

}

export const CardContainer = styled.div<CardProps>`
  width: 55%;
  height: auto;
  margin-top: 2vh;
  background-color: white;
  border-radius: 15px;
  border: 2px solid ${props=>props.bordaVerde};
  display: flex;
  flex-direction: column;
  box-shadow: 1px 10px 20px 1px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  z-index: 0;
  .buttonContainer {
    display: flex;
    flex-direction: row;
  }
  .infosContainer{
    border-radius: 15px;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .observacoes{
    width: 95%;
    height: auto;
    overflow-y: auto;
    background-color: white;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    z-index: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media(max-width: 768px) {
    width: 90%;
  }
`;

export const StyledImgArea = styled.div`
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
`;

export const TextArea = styled.div`
  width: 30%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 0;
  .nameArea{
    height: 100%;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #000;
    font-family: "Roboto", sans-serif;
  }
  p {
    margin-top: 5px;
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    font-family: "Roboto", sans-serif;
    display: inline-block; /* Permite que o elemento se estenda horizontalmente */
    white-space: nowrap;
  }
`;
export const DeleteButton = styled.button`
  background-color: #fae5e5;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  align-self: center;
  position: relative;
  z-index: 0;
  margin-right: 10px;
`;
export const ReadyButton = styled.button<displayButtonProps>`
  display: ${props=>props.display};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e5f5e6;
  border: none;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  align-self: center;
  position: relative;
  z-index: 0;
`;
