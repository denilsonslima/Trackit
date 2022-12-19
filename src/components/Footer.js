import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export default function Footer({ concluido }) {
    const navigate = useNavigate()
    return (
        <Footerr>
            <p onClick={() => navigate("/habito")}>Hábitos</p>
            <p onClick={() => navigate("/historico")}>Histórico</p>
            <Div onClick={() => navigate("/hoje")} concluido={concluido}>
                <CircularProgressbar
                    value={concluido}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
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
`