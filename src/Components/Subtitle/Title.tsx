import styled from "styled-components";

type PProps = {
    textSize: string;
  };

export const StyledP = styled.p<PProps>`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: ${props => props.textSize}px;
    margin-top:15px;
    margin-bottom:15px;    
`;