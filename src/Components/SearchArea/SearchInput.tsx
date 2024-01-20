import styled from "styled-components";

export const InputContainer = styled.div`
    width: 40%;
    height: 8vh;
    background-color: white;
    font-family: 'Roboto', sans-serif;
    border: 3px solid #e0e0e0;
    border-radius: 15px;
    font-size: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;
    box-sizing: border-box;
    border-bottom: 1px solid #e0e0e0;
    margin-top: 10vh;
    position: relative;
    top:30px;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 2rem;
    font-weight: 500;
    color: #333;

    background-color: transparent;
    &::placeholder{
        color: #999;
    }
`
export const InputButton = styled.button`
    width: 2.5vw;
    height: 100%;
    border-radius:50%;
    background-color: transparent;
    cursor: pointer;
    border: none;    
    font-size: 4rem;
    color: #333;
    font-weight: 500;
    transition: .3s;
    position: relative;
    top:5px;
`
