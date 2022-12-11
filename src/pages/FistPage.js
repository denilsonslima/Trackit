import { useState } from "react";
import styled from "styled-components";
import Heade from "../components/Heade";
export default function FistPage() {
    const [addHabito, setAddHabito] = useState(false)
    const [clicado, setClicado] = useState([])
    const [input, setInput] = useState("")
    const diasSemana = [
        { id: 1, name: "D" },
        { id: 2, name: "S" },
        { id: 3, name: "T" },
        { id: 4, name: "Q" },
        { id: 5, name: "Q" },
        { id: 6, name: "S" },
        { id: 7, name: "S" },
    ]

    function verificar(e) {
        e.preventDefault()
        if (clicado.length !== 0) {
            setAddHabito(false)
            setClicado([])
            setInput("")
        }
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

    return (
        <Main>
            <Heade />
            <section>
                <Div>
                    <h2>Meus hábitos</h2>
                    <Botao onClick={() => setAddHabito(true)}>+</Botao>
                </Div>
                <Modal display={addHabito ? "block" : "none"} onSubmit={verificar}>
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
                        <p>Cancelar</p>
                        <button type="submit">Salvar</button>
                    </div>
                </Modal>
                <Descricao>
                    <h2>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </h2>
                </Descricao>
            </section>
        </Main>
    )
}

const Main = styled.div`
    position: relative;
    max-width: 600px;
    width: 100vw;
    height: 95vh;
    background: #E5E5E5;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    section {
        padding: 80px 20px 0;
    }


    @media (max-width: 600px){
        height: 100vh;
    }

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
        padding: 15px 0 11px 9px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }
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