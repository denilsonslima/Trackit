import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background: ${props => props.inputColor ? '#F2F2F2': '#fff'};
  border: 1px solid #d5d5d5;
  padding-left: 11px;
  outline: none;
  font-family: "Lexend Deca";
  font-size: 18px;
  ::placeholder {
    line-height: 25px;
    color: #dbdbdb;
  }
`;

