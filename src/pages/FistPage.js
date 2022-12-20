import { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Heade from "../components/Heade";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri"
import Loading from "../components/Loading";
import diaSemana from "../constants/diasSemana";
import useMyProvider from "../context/context";

export default function Hoje() {
    const [addHabito, setAddHabito] = useState(false)
    const [clicado, setClicado] = useState([])
    const [input, setInput] = useState("")
    const [meusHabitos, setMeusHabitos] = useState([])
    const [chegou, setChegou] = useState(false)
    const [carregando, setCarregando] = useState(false)
    const [check, setChek] = useState(false)    
    const diasSemana = diaSemana
    const { token, image, verificar} = useMyProvider()

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        axios
            .get(url, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                setMeusHabitos(res.data)
                setChegou(true)
                verificar()
            })
            .catch((e) => console.log(e))
    }, [check, token, verificar])

    function verifica(e) {
        e.preventDefault()
        if (clicado.length !== 0) {
            setCarregando(true)
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
        setCarregando(true)
        setTimeout(() => {
            const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const promisse = axios.post(url, dados, config)
            promisse.then(() => {
                setClicado([])
                setCarregando(false)
                setAddHabito(false)
                setChek(!check)
            })
            promisse.catch((err) => {
                alert(err.message)
                setCarregando(false)
            })
        }, 500);
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

    function deletarHabito(id) {
        if(window.confirm("Tem certeza que deseja deletar esse hábito?")){
            let a = id
            const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + a.toString()
            const promisse = axios.delete(url, { headers: { Authorization: `Bearer ${token}` } })
            promisse.then(() => setChek(!check) )
            promisse.catch(e => console.log(e))
        }
    }

    if (!chegou) {
        return (
            <Main>
                <Heade image={image} />
                <Section>
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
                </Section>
                <Footer />
            </Main>
        )
    }

    return (
        <Main>
            <Heade image={image} />
            <Section>
                <Div>
                    <h2>Meus hábitos</h2>
                    <Botao onClick={() => setAddHabito(true)}>+</Botao>
                </Div>
                <Modal
                    display={addHabito ? "block" : "none"}
                    onSubmit={verifica}
                >
                    <input
                        type="text"
                        placeholder="nome do hábito"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        style={carregando ? {background: "#F2F2F2"} : {background: "#FFFFFF"}}
                        disabled={carregando}
                        required />
                    <div>
                        {diasSemana.map((e) =>
                            <Btn
                                key={e.id}
                                cor={clicado.includes(e.id) ? "#CFCFCF" : "#FFFFFF"}
                                color={clicado.includes(e.id) ? "#FFFFFF" : "#DBDBDB"}
                                disabled={carregando}
                                onClick={(a) => add(a, e.id)}
                            >
                                {e.name}
                            </Btn>
                        )}
                    </div>
                    <div>
                        <p onClick={() => setAddHabito(false)}>Cancelar</p>
                        <button type="submit">{carregando ? <Loading width={40} height={40} /> : "Salvar"}</button>
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
                                        color={d.days.includes(e.id) ? "#FFFFFF" : "#DBDBDB"}
                                    >
                                        {e.name}
                                    </Btn>
                                )}
                            </div>
                            <RiDeleteBin6Line onClick={() => deletarHabito(d.id)} />
                        </div>
                    )}
                </Hab>
            </Section>
            <Footer/>
        </Main>
    )
}

const Main = styled.main`
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

const Section = styled.section`
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
    height: 180px;
    padding: 18px 18px 15px;
    margin: 20px auto 0;
    background-color: #FFFFFF;
    border-radius: 5px;
    input {
        width: 100%;
        height: 45px;
        padding: 0 7px 0 15px;
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

    > div:nth-of-type(1) {
        margin-top: 10px;
        margin-bottom: 29px;
        display: flex;
        gap: 5px;
    }

    > div:nth-of-type(2) {
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 23px;
        > button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 84px;
            height: 35px;
            border: none;
            background: #52B6FF;
            color: #FFFFFF;
            font-size: 16px;
            border-radius: 5px;
        }
        > p {
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
    color: ${props => props.color};
    font-size: 20px;
`

const Hab = styled.section`
    min-height: 91px;
    & div {
        position: relative;
        padding: 15px;
        margin: 20px auto 0;
        background-color: #FFFFFF;
        border-radius: 5px;
        & h4 {
            max-width: 90%;
            overflow-x: hidden;
            text-overflow: ellipsis;
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
        > svg {
            font-size: 40px;
            padding: 10px;
            position: absolute;
            top: 0;
            right: 0;
            color: #666666;
        }
    }
`