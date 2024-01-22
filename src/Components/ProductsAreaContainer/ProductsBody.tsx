import styled from "styled-components";

export const ProductsBody = styled.div`
  width: 100%;

  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-bteween;

  .ProductsTextArea {
    margin-top: 7vw;
    margin-left: 2vw;
    margin-bottom: 2vw;
  }
  .showCardsArea {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: white;
  }
  .ProductImageArea {
    background-color: white;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img {
      margin-left: 1vw;
      object-fit: contain;
    }
  }
  .ProductInfoArea {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
    justify-content: space-between;
    margin-top: 10px;
    position: relative;
    bottom: 40px;
    border-radius: 10px;
  }
`;
