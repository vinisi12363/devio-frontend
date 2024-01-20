import styled from "styled-components";


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
        object-fit: cover;
        border-radius: 10px;
    }
`

export const ShowCardContainer = styled.div`
    width: 250px;
    height: 400px;
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
    margin: 25px 25px 15px 10px;

    background-image: url('https://as2.ftcdn.net/v2/jpg/02/91/13/09/1000_F_291130967_RU7eKKmBDoYVK6leV81HaZzlsuunSjcj.jpg'); 
    background-size: cover; 
    background-position: center;
    img{
        width: 190px;
        height: 190px;
        object-fit: cover;
        border-radius: 10px;
    }
`