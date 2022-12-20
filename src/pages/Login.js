import HeaderInitial from "../components/Header/HeaderInitial";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function InitialPage({ setTokenInLocalStorage }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [carregando, setCarregando] = useState(false)
    const navigate = useNavigate()

    function autenticacao(e) {
        e.preventDefault()
        const dados = {
            email: email,
            password: senha
        }
        setCarregando(true)
        setTimeout(() => {
            const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
            const promisse = axios.post(url, dados)
            promisse.then((res) => {
                setTokenInLocalStorage(res.data)
                navigate("/hoje")
                setEmail("")
                setSenha("")
            })
            promisse.catch(() => {
                alert("Usuário e/ou senha inválidos")
                setCarregando(false)
            })
        }, 300);

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
                    style={carregando ? {background: "#F2F2F2"} : {background: "#FFFFFF"}}
                    disabled={carregando}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    style={carregando ? {background: "#F2F2F2"} : {background: "#FFFFFF"}}
                    disabled={carregando}
                    required
                />
                <button
                    type="submit"
                    disabled={carregando}
                >
                    {carregando ? <Loading width={100} height={100} /> : "Entrar"}
                </button>
            </Form>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Main>
    )
}

const Main = styled.div`
    max-width: 500px;
    width: 100vw;
    max-height: 100vh;
    height: 95%;
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
    
    @media (max-width: 400px){
        height: 100%;
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
        display: flex;
        justify-content: center;
        align-items: center;
    }
`