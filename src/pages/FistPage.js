import { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Heade from "../components/Heade";
import axios from "axios";

export default function FistPage({ token, image }) {
    const [addHabito, setAddHabito] = useState(false)
    const [clicado, setClicado] = useState([])
    const [input, setInput] = useState("")
    const [meusHabitos, setMeusHabitos] = useState([])
    const [chegou, setChegou] = useState(false)
    const diasSemana = [
        { id: 1, name: "D" },
        { id: 2, name: "S" },
        { id: 3, name: "T" },
        { id: 4, name: "Q" },
        { id: 5, name: "Q" },
        { id: 6, name: "S" },
        { id: 7, name: "S" },
    ]

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        renderizar(url)
    })

    function verificar(e) {
        e.preventDefault()
        if (clicado.length !== 0) {
            setAddHabito(false)
            const dados = {
                name: input,
                days: clicado
            }
            criarHabito(dados)
            setClicado([])
            setInput("")
        }
    }

    function criarHabito(dados) {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const promisse = axios.post(url, dados, config)
        promisse.then(() => renderizar(url))
        promisse.catch((err) => console.log(err))
    }

    function renderizar(url) {
        const promisse = axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
        promisse.then(res => {
            setMeusHabitos([...res.data])
            setChegou(true)
        })
        promisse.catch((e) => console.log(e))
    }

    function add(a, i) {
        a.preventDefault()
        const incluido = clicado.includes(i)
        if (!incluido) {
            setClicado([...clicado, i])
        } else {
            setClicado(clicado.filter((e) => e !== i))
        }
    }

    if (!chegou) {
        return (
            <Main>
                <Heade image={image}/>
                <Section1>
                    <Div>
                        <h2>Meus hábitos</h2>
                        <Botao>+</Botao>
                    </Div>
                    <Descricao
                        display={meusHabitos.length === 0 ? "block" : "none"}
                    >
                        <h2>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </h2>
                    </Descricao>
                </Section1>
                <Footer />
            </Main>
        )
    }

    return (
        <Main>
            <Heade image={image}/>
            <Section1>
                <Div>
                    <h2>Meus hábitos</h2>
                    <Botao onClick={() => setAddHabito(true)}>+</Botao>
                </Div>
                <Modal
                    display={addHabito ? "block" : "none"}
                    onSubmit={verificar}
                >
                    <input
                        type="text"
                        placeholder="nome do hábito"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required />
                    <div>
                        {diasSemana.map((e) =>
                            <Btn
                                key={e.id}
                                cor={clicado.includes(e.id) ? "#CFCFCF" : "#FFFFFF"}
                                onClick={(a) => add(a, e.id)}
                            >
                                {e.name}
                            </Btn>
                        )}
                    </div>
                    <div>
                        <p onClick={() => setAddHabito(false)}>Cancelar</p>
                        <button type="submit">Salvar</button>
                    </div>
                </Modal>
                <Descricao
                    display={meusHabitos.length === 0 ? "block" : "none"}
                >
                    <h2>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </h2>
                </Descricao>
                <Hab>
                    {meusHabitos.map((d) =>
                        <div key={d.id}>
                            <h4>{d.name}</h4>
                            <div>
                                {diasSemana.map((e) =>
                                    <Btn
                                        key={e.id}
                                        cor={d.days.includes(e.id) ? "#CFCFCF" : "#FFFFFF"}
                                    >
                                        {e.name}
                                    </Btn>
                                )}
                            </div>
                        </div>
                    )}
                </Hab>
            </Section1>
            <Footer />
        </Main>
    )
}

const Main = styled.div`
    position: relative;
    max-width: 500px;
    width: 100vw;
    max-height: 100vh;
    height: 95%;
    background: #F2F2F2;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    overflow-y: hidden;

    @media (max-width: 400px){
        height: 100%;
    }
`

const Section1 = styled.div`
    height: calc(95vh - 160px);
    padding: 0 20px 20px;
    margin: 80px 0;
    overflow-y: scroll;
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 22px;
    h2 {
        width: 148px;
        height: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

`

const Modal = styled.form`
    display: ${props => props.display};
    max-width: 340px;
    height: 180px;
    padding: 18px 18px 15px;
    margin: 20px auto 0;
    background-color: #FFFFFF;
    border-radius: 5px;
    input {
        width: 100%;
        height: 45px;
        padding-left: 15px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    } 

    input::placeholder {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }

    input:focus::-webkit-input-placeholder {
        color: transparent;
    }

    div:nth-of-type(1) {
        margin-top: 10px;
        margin-bottom: 29px;
        display: flex;
        gap: 5px;
    }

    div:nth-of-type(2) {
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 23px;
        & button {
            width: 84px;
            height: 35px;
            border: none;
            background: #52B6FF;
            color: #FFFFFF;
            font-size: 16px;
            border-radius: 5px;
            border: 5px 80% red; 
        }
        & p {
            width: 69px;
            height: 20px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color: #52B6FF;
        }
    }

`

const Descricao = styled.div`
    padding-top: 28px;
    display: ${props => props.display};
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`

const Botao = styled.button`
    width: 40px;
    height: 34px;
    background: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
    border: none;
    font-size: 27px;
`

const Btn = styled.button`
    width: 30px;
    height: 30px;
    background: ${props => props.cor};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: #DBDBDB;
    font-size: 20px;
`

const Hab = styled.section`
    min-height: 91px;
    & div {
        max-width: 340px;
        padding: 15px;
        margin: 20px auto 0;
        background-color: #FFFFFF;
        border-radius: 5px;
        & h4 {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
            color: #666666;
        }
        & div {
            padding: 0;
            margin-top: 10px;
            display: flex;
            gap: 5px;
        }
    }
`