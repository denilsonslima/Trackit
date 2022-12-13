import styled from "styled-components"
import Footer from "../components/Footer";
import Heade from "../components/Heade";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsCheckLg } from "react-icons/bs"

export default function Hoje({ token, image, concluido, setConcluido }) {
    const [meusHabitos, setMeusHabitos] = useState([])

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        renderizar(url)
    })

    function verificar(dados){
        const total = dados.length
        const feito = dados.filter((e) => e.done === true)
        const porcentagem = Number((feito.length / total) * 100).toFixed(0)
        setConcluido(porcentagem)
    }

    function renderizar(url) {
        const promisse = axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
        promisse.then(res => {
            setMeusHabitos(res.data)
            verificar(res.data)
        })
        promisse.catch((e) => console.log(e))
    }

    function verificarConcluido(id, feito){
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const url1 = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        if(!feito){
            const promisse = axios.post(url,{}, { headers: { Authorization: `Bearer ${token}` }})
            promisse.then(() => console.log("feito"))
            promisse.catch((err) => console.log(err.message))
        } else {
            const promisse = axios.post(url1,{}, { headers: { Authorization: `Bearer ${token}` }})
            promisse.then(() => console.log("desfeito"))
            promisse.catch((err) => console.log(err.message))
        }
    }

    return (
        <Main>
            <Heade image={image} />
            <Section1>
                <Div cor={concluido > 0 ? "#8FC549" : "#BABABA"}>
                    <h2>Segunda, 17/05</h2>
                    <span>{concluido > 0 ?  `${concluido}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</span>
                </Div>
                <Hab>
                    {meusHabitos.map((d) =>
                        <div key={d.id}>
                            <h4>{d.name}</h4>
                            <span>Sequência atual: {d.currentSequence} dias <br/> Seu recorde: {d.highestSequence} dias</span>
                            <Check onClick={() => verificarConcluido(d.id, d.done)} cor={d.done ? "#8FC549" : "#EBEBEB"}>
                                <BsCheckLg />
                            </Check>
                        </div>
                    )}
                </Hab>
            </Section1>
            <Footer concluido={concluido}/>
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
    flex-direction: column;
    padding-top: 22px;
    h2 {
        height: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    > span {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: ${props => props.cor};
    }

`

const Hab = styled.section`
    > div {
        min-height: 94px;
        position: relative;
        max-width: 340px;
        padding: 15px;
        margin: 20px auto 0;
        background-color: #FFFFFF;
        border-radius: 5px;
        > h4 {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
            color: #666666;
            margin-bottom: 7px;
        }
        > span {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 12.976px;
            line-height: 16px;
            color: #666666;
        }       
    }
`

const Check = styled.div`
    width: 69px;
    height: 69px;
    background: ${props => props.cor};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    > svg {
        width: 35px;
        height: 28px;
        color: #ffffff;
    }
`