import { createContext, useContext } from "react";
import { useState } from "react";
import axios from "axios";

export const MyContext = createContext();

export function MyProvider(props) {
    const [token, setToken] = useState("")
    const [image, setImage] = useState("")
    const [concluido, setConcluido] = useState(0)
    
    function verificar(){
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const promisse = axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
        promisse.then(res => {
            const dados = res.data
            const total = dados.length
            const feito = dados.filter((e) => e.done === true)
            const porcentagem = Number((feito.length / total) * 100).toFixed(0)
            setConcluido(porcentagem)
        })
        promisse.catch(err => console.lor(err))
    }

    return (
        <MyContext.Provider value={{ token, image, concluido, setToken, setImage, setConcluido, verificar }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default function useMyProvider() {
    return useContext(MyContext);
}