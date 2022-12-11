import HeaderInitial from "../components/Header/HeaderInitial";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export default function InitialPage() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    function autenticacao(e) {
        e.preventDefault()
        const dados = {
            email: email,
            password: senha
        }
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const promisse = axios.post(url, dados)
        promisse.then(() => {
            navigate("/hoje")
            setEmail("")
            setSenha("")
        })
        promisse.then(err => console.log(err))
    }

    return (
        <Main>
            <HeaderInitial />
            <Form onSubmit={autenticacao}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <button type="submit">Entrar</button>
            </Form>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Main>
    )
}

const Main = styled.div`
    max-width: 600px;
    width: 100vw;
    height: 95vh;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 0 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
    }
    
    @media (max-width: 600px){
        height: 100vh;
    }

`

const Form = styled.form`
    width: 100%;
    input, button {
        width: 100%;
        height: 45px;
        margin-bottom: 6px;
        border-radius: 5px;
    }

    input {
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        padding-left: 11px;
    }

    input::placeholder {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    button {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        background: #52B6FF;
        border: none;
        margin-bottom: 0px;
    }
`