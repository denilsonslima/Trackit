import HeaderInitial from "../components/Header/HeaderInitial";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function SignUp() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    image: ''
  })
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function verificar(e) {
    e.preventDefault();
    setCarregando(true);
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    setTimeout(() => {
      const promisse = axios.post(url, form);
      promisse.then(() => {
        navigate("/");
        setCarregando(false);
      });
      promisse.catch((e) => {
        console.log(e)
        setCarregando(false);
      });
    }, 300);
  }

  return (
    <Main>
      <HeaderInitial />
      <Form onSubmit={verificar}>
        <input
          data-test="email-input"
          type="email"
          name="email"
          placeholder="email"
          value={form.email}
          onChange={handleForm}
          style={
            carregando ? { background: "#F2F2F2" } : { background: "#FFFFFF" }
          }
          disabled={carregando}
          required
        />
        <input
          data-test="password-input"
          type="password"
          name="password"
          placeholder="senha"
          value={form.password}
          onChange={handleForm}
          style={
            carregando ? { background: "#F2F2F2" } : { background: "#FFFFFF" }
          }
          disabled={carregando}
          required
        />
        <input
          data-test="user-name-input"
          type="text"
          name="name"
          placeholder="nome"
          value={form.name}
          onChange={handleForm}
          style={
            carregando ? { background: "#F2F2F2" } : { background: "#FFFFFF" }
          }
          disabled={carregando}
          required
        />
        <input
          data-test="user-image-input"
          type="url"
          name="image"
          placeholder="foto"
          value={form.image}
          onChange={handleForm}
          style={
            carregando ? { background: "#F2F2F2" } : { background: "#FFFFFF" }
          }
          disabled={carregando}
          required
        />
        <button data-test="signup-btn" type="submit" disabled={carregando}>
          {" "}
          {carregando ? <Loading width={100} height={100} /> : "Cadastrar"}
        </button>
      </Form>
      <Link to={"/"}>
        <p data-test="SignIn-link">Já tem uma conta? Faça SignIn!</p>
      </Link>
    </Main>
  );
}

const Main = styled.div`
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
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    margin-top: 25px;
  }

  @media (max-width: 400px) {
    height: 100%;
  }
`;

const Form = styled.form`
  width: 100%;
  input,
  button {
    width: 100%;
    height: 45px;
    margin-bottom: 6px;
    border-radius: 5px;
  }

  input {
    background: #ffffff;
    border: 1px solid #d5d5d5;
    padding-left: 11px;
  }

  input::placeholder {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }

  button {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    background: #52b6ff;
    border: none;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
