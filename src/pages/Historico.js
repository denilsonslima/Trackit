// import { useEffect, useState } from "react";
import styled from "styled-components"
import Footer from "../components/Footer";
import Heade from "../components/Heade";
// import axios from "axios";

export default function Historico({ concluido, image, token }) {
    // const [historico, setHistorico] = useState(undefined)
    // useEffect(() => {
    //     const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily"
    //     renderizar(url)
    // }, [historico])

    // function renderizar(url) {
    //     axios
    //         .get(url, { headers: { Authorization: `Bearer ${token}` } })
    //         .then(res => setHistorico(res.data))
    //         .then(err => console.log(err.mensage))
    // }

    // if (historico === undefined) {
    //     return (
    //         <Main>
    //             <Heade image={image} />
    //             <Section1>
    //                 <Div>
    //                     <h2>Histórico</h2>
    //                 </Div>
    //                 <Descricao>Carregando...</Descricao>
    //             </Section1>
    //             <Footer concluido={concluido} />
    //         </Main>
    //     )
    // }

    return (
        <Main>
            <Heade image={image} />
            <Section1>
                <Div>
                    <h2>Histórico</h2>
                </Div>
                <Descricao>Em breve você poderá ver o histórico dos seus hábitos aqui!</Descricao>
            </Section1>
            <Footer concluido={concluido} />
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
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
 `