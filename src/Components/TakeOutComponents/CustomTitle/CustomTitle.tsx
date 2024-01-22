import styled from "styled-components";

type H2Props = {
  textSize: string;
  textColor: string;
};

export const StyledH2 = styled.h2<H2Props>`
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.textSize}px;
  font-weight: 700;
  margin-bottom: 15px;
`;
