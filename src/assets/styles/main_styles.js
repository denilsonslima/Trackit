import styled from "styled-components";

export const Main = styled.div`
  max-width: 500px;
  width: 100vw;
  max-height: 100vh;
  height: 95%;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 0 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
    height: 100%;
  }
`;

export const P1 = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
  margin-top: 25px;
`;
