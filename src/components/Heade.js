import styled from "styled-components"

export default function Heade({image}) {
    return (
        <Main>
            <p>TrackIt</p>
            <div>
                <img src={image} alt="Perfil"/>
            </div>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 80px;
    background: #126BA5;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    p {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
        text-decoration: none;
    } 
    & div:nth-of-type(1){
        width: 51px;
        height: 51px;
        background-color: #FFFFFF;
        border-radius: 50%;
        overflow: hidden;
        & img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            text-align: center;
        }
    }
`
