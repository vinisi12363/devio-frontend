import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0 2vw;
  box-sizing: border-box;
  position: relative;
  top: 10vh;
  z-index: 0;
  @media (max-width: 768px) {
    background-color: white;
    min-width: 100%;
    height: 20dvh;
 
  }
`;
