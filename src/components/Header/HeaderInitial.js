import styled from "styled-components"
import seta from "./img/seta.svg"
import vetor1 from "./img/Vector 1.svg"
import vetor2 from "./img/Vector 2.svg"
import vetor3 from "./img/Vector 3.svg"
import sombra from "./img/sombra.svg"

export default function HeaderInitial() {
    return (
        <Header>
            <img src={seta} alt="" />
            <img src={vetor1} alt="" />
            <img src={vetor2} alt="" />
            <img src={vetor3} alt="" />
            <img src={sombra} alt="" />
            <h1>TrackIt</h1>
        </Header>
    )
}


const Header = styled.div`
    width: 375px;
    height: 280px;
    position: relative;
    img:nth-child(1){
        position: absolute;
        width: 154.94px;
        height: 48.5px;
        left: 109.4px;
        top: 106.8px;
        z-index: 2;
    }
    img:nth-child(2){
        position: absolute;
        width: 18.05px;
        height: 22.63px;
        left: 148.2px;
        top: 87.4px;
    }
    img:nth-child(3){
        position: absolute;
        width: 18.05px;
        height: 42.31px;
        left: 172.45px;
        top: 79.05px;
    }
    img:nth-child(4){
        position: absolute;
        width: 18.05px;
        height: 63.32px;
        left: 197.24px;
        top: 68px;
    }
    img:nth-child(5){
        position: absolute;
        width: 142.28px;
        height: 15.63px;
        left: 122.33px;
        top: 144.53px;
    }
    h1 {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 68.982px;
        line-height: 86px;
        text-align: center;
        color: #126BA5;
        position: absolute;
        width: 180px;
        height: 86.23px;
        left: 97px;
        top: 160.16px;
    }
`