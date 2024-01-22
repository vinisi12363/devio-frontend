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
`;
