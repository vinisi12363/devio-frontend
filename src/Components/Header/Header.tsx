import styled from "styled-components";

export const HeaderInfo = styled.div`
  width: 90%;
  height: 10vh;
  background-color: #990000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
  top: 0;
  z-index: 2;
  .pageLink {
    text-decoration: none;
  }
`;
export const HeaderLogo = styled.div`
  width: 10vw;
  height: 100%;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }
`;

export const HeaderOptionContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      border-radius: 10px;
      background-color: red;
    }
  }
`;
