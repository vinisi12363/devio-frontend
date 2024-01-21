import styled  from "styled-components";

export const Container = styled.div`
    width: 50dvh;
    height: 50dvh;
    background-color: #red;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    overflow-y: auto;
    .title{
        width: 100%;
        height: 10vh;
        background-color: #990000;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0 2vw;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        p{
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            color: #fff;
        }
    }
    .body{
        width: 100%;
        height: 90vh;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 10px;
        overflow-y: auto;
        form{
            background-color:white;
            width: 80%;
            margin-bottom:25px;
            padding: 10px;
            display: flex;
            flex-direction: column;
        ;
            justify-content: space-between;
            .buttonArea{
                display: flex;
                background-color: white;
                width: 100%;
                justify-content: space-between;
            }
            .formButton{
                margin-top: 5dvh;
              
                height: 5vh;
            }
        }
        .clientList{
            width: 100%;
            height: auto;
            background-color: #fff;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            flex-wrap: wrap;
            box-sizing: border-box;
            padding: 10px;
            overflow-y: auto;
            
        }
    }
`