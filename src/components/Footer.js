import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Footer({concluido}){
    const navigate = useNavigate()
    return (
        <Footerr>
                <p onClick={() => navigate("/habito")}>Hábitos</p>
                <p>Histórico</p>
                <Div onClick={() => navigate("/hoje")} concluido={concluido}>
                    <div className="div">
                        <div>Hoje</div>
                    </div>
                </Div>
        </Footerr>
    )
}

const Footerr = styled.footer`
    width: 100%;
    height: 80px;
    background-color: #FFFFFF;
    padding: 0 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    & p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
`

const Div = styled.div`
    width: 90px;
    height: 90px;
    background: #52B6FF;
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    left: calc(50% - 90px/2);
    overflow: hidden;
    .div {
        background: conic-gradient(white ${props => props.concluido + "%"}, #52B6FF 0);
        position: absolute;
        bottom: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
        border-radius: 50%;
        & div {
            width: 75%;
            height: 75%;
            background-color: #52B6FF;
            position: absolute;
            bottom: 12.5%;
            left: 12.5%;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            text-align: center;
            color: #FFFFFF;
        }
    }

`