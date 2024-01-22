import styled from "styled-components";

export const CardContainer = styled.div`
  width: 55%;
  height: 8vh;
  margin-top: 2vh;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  box-shadow: 1px 10px 20px 1px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  z-index: 0;
  .buttonContainer {
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
  border-radius: 10px;
  width: 40px;
  height: 40px;
  align-self: center;
  position: relative;
  z-index: 0;
  margin-right: 10px;
`;
export const ReadyButton = styled.button`
  background-color: #e5f5e6;
  border: none;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  align-self: center;
  position: relative;
  z-index: 0;
`;
