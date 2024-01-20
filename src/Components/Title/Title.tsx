import styled from "styled-components";

type H2Props = {
    textSize: string;
  };

export const StyledH2 = styled.h2<H2Props>`
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.textSize}px;
    font-weight: 700;
    margin-bottom:15px;

`;