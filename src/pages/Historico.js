// import { useEffect, useState } from "react";
import styled from "styled-components"
import Footer from "../components/Footer";
import Heade from "../components/Heade";
import { useState, useEffect} from "react";
import Calendar from 'react-calendar';
import "../assets/styles/react_styles.css"
import axios from "axios";
import useMyProvider from "../context/context";

export default function Historico({verificar }) {
    const [historico, setHistorico] = useState(undefined)
    const {image, token} = useMyProvider()

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily"
        renderizar(url)
        mudar()
    })

    function mudar(){
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            verificar(res.data)
        })
        .catch((e) => console.log(e))
    }

    function renderizar(url) {
        axios
            .get(url, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                setHistorico(res.data)
            })
            .catch(err => console.log(err.mensage))
    }

    return (
        <Main>
            <Heade image={image} />
            <Section1>
                <Div>
                    <h2>Histórico</h2>
                </Div>
                { historico === undefined ? <Descricao>Em breve você poderá ver o histórico dos seus hábitos aqui!</Descricao> : <Calendar/>}
            </Section1>
            <Footer/>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(95vh - 160px);
    padding: 0 20px 20px;
    margin: 80px 0;
    overflow-y: scroll;
`
const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 22px 0;
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
const Descricao = styled.div`
    width: 100%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
 `