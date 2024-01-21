import styled from "styled-components";

export const FinalizeButton = styled.button`
  width: 40%;
  height: 7vh;
  background-color: green;
  border-radius: 25px;
  border-bottom: 3px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: #fff;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: DarkGreen;
    color: white;
    font-weight: 700;
    border: 4px solid black;
  }
`;

export const CancelButton = styled.button`
  width: 40%;
  height: 7vh;
  background-color: white;
  border-radius: 25px;
  border-bottom: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: green;
  cursor: pointer;
  outline: none;
  &:hover {
    color: black;
    font-weight: 700;
    border: 4px solid black;
  }
`;
