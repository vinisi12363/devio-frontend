import styled from "styled-components";

type styledCardProps = {
    displayType:string;
    pointerEvents:string;
}

export const CardContainer = styled.div`
    width: 200px;
    height: 200px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.05);
    }
    img{
        width: 190px;
        height: 190px;
        border-radius: 10px;
        object-fit: contain;
    }
    .productTitle{
        background-color: green;
    }
 
`

export const ShowCardContainer = styled.div<styledCardProps> `
    width: 250px;
    height: auto;
    background-color: #fff;
    display: ${props=>props.displayType};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    pointer-events: ${props=>props.pointerEvents};
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.05);
    }
    
    margin: 25px 25px 15px 10px;
    background-image: url('https://img.freepik.com/free-vector/color-doodle-food-burger-pattern_1409-3918.jpg'); 
    background-size: cover; 
    background-position: center;
    img{
        width: 190px;
        height: 190px;
        object-fit: cover;
        border-radius: 10px;
    }
    .verde {
        background-color: green;
        min-width: 250px;
        min-height: 17vw;
        z-index:1;
        position: absolute;
        padding: 10px;
        margin-bottom: 35px;
        opacity: 0.8;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
       
    }
     &:hover .verde{
        transform: scale(1.2);
        }

`