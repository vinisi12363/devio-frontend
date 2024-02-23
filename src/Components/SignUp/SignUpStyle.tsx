import styled from 'styled-components';

type btnDisabledProps = {
    isDisabled: boolean;
}

export const SubmitBtn = styled.button<btnDisabledProps>`
    background-color: ${props => props.isDisabled ? '#ebebeb': '#4caf50' };
    color: white;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    &:hover {
    background-color:  ${props => props.isDisabled ? '#ebebeb': '#45a049' };
    }

`
export const FormContainer = styled.div`
  margin-top: 11vh;
  background-color: #CCFFFF;
  min-width: 80vh;
  padding: 20px;
  border-radius: 8px;

  h1 {
    font-size: 50px;
    font-family: 'Roboto', 'sans-serif';
    margin-bottom: 20px;
  }

  form {
    display: flex;
    font-family: "Roboto", sans-serif;
    flex-direction: column;
  }

  input {
    margin-bottom: 10px;
    font-family: "Roboto", sans-serif;
    padding: 10px;
    font-size: 16px;
    border: 3px solid #ccc;
    border-radius: 4px;
  }

  
`;
