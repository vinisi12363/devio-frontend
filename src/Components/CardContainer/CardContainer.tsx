import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all ease 0.5s;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
 
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 6dvh;
    background-color: white;
    justify-content: space-around;; 
    ,productTitle{
      display: none;
    }  
    div{
      background-color: white;
      box-shadow: none;
      max-width: 30%;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      img{
        max-width:10dvh;
        max-height: 10dvh;
        object-fit: contain;
      }
      h2{
        display: none;
        font-size: 1rem;
      }
    }
    .productCardContainer{
      background-color white;
      height: auto;
      
      .productTitle{
        display: none;
      }
    } 
  }
`;
