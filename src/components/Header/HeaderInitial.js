import styled from "styled-components"
import logo from "../img/logo.png"

export default function HeaderInitial() {
    return (
        <Header>
            <img src={logo} alt="" />
        </Header>
    )
}


const Header = styled.div`
    margin-top: 68px;
    margin-bottom: 35px;
    img {
        width: 180px;
        height: 178px;
    }
`