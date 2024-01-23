import styled from "styled-components";

type styledCardProps = {
  displayType: string;
  pointerEvents: string;
  color: string;
};



export const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 190px;
    height: 190px;
    border-radius: 10px;
    object-fit: contain;
  }
  .productTitle {
    background-color: green;
  }
  @media (max-widht: 768px) {
    max-width: 10dvh;
    background-color: white;
    height: auto;
    border-radius: 50%;
    img {
      max-width: 60px;
      max-height: 60px;
    }
  }
`;

export const ShowCardContainer = styled.div<styledCardProps>`
  width: 250px;
  height: auto;
  background-color: #fff;
  display: ${(props) => props.displayType};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
  padding-top: 0px;
  box-sizing: border-box;
  cursor: pointer;
  pointer-events: ${(props) => props.pointerEvents};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  margin: 25px 25px 35px 10px;
  background-image: url("https://img.freepik.com/free-vector/color-doodle-food-burger-pattern_1409-3918.jpg");
  background-size: cover;
  background-position: center;
  img {
    width: 190px;
    height: 190px;
    object-fit: cover;
    border-radius: 10px;
  }
  .verde {
    background-color: green;
    min-width: 18dvh;
    min-height: 25dvh;
    z-index: 1;
    position: absolute;
    padding: 10px;
   
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  &:hover .verde {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    margin:none;
    max-width: 20dvh;
    min-height: 25dvh;
   
    height: auto;
    border-radius: 10px;
    img {
      max-width: 60px;
      max-height: 60px;
    }
    background-image: none;
    background-color: ${props => props.color};
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.33);
    h2{
      font-size: 1.3rem;
    }
    p{
      font-size: 1rem;
    }

    
  }
`;
