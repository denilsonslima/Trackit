import styled from "styled-components"

export default function Heade() {
    return (
        <Main>
            <p>TrackIt</p>
            <Div/>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 80px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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
`
const Div = styled.div`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background: url("https://i0.wp.com/omeudiadia.com.br/wp-content/uploads/2022/04/paisagem-natural.jpg?resize=800%2C534&ssl=1") no-repeat center;
    background-size: cover;
`