import GlobalStyle from "./globalStyles";
import InitialPage from "./pages/InitialPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FistPage from "./pages/FistPage";
import { useState, useEffect } from "react";
import Hoje from "./pages/Hojepage";

function App() {
  const [token, setToken] = useState("")
  const [image, setImage] = useState("")
  const [concluido, setConcluido] = useState(0)

  function setTokenInLocalStorage(dados) {
    setToken(dados.token);
    setImage(dados.image)
    const exemploSerializado = JSON.stringify(dados)
    localStorage.setItem('lista', exemploSerializado);
  }

  function verificar(dados) {
    const total = dados.length
    const feito = dados.filter((e) => e.done === true)
    const porcentagem = Number((feito.length / total) * 100).toFixed(0)
    setConcluido(porcentagem)
  }

  useEffect(() => {
    const token = localStorage.getItem('lista');
    const lista = JSON.parse(token)
    if (lista) {
      setToken(lista.token);
      setImage(lista.image)
    }
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage setTokenInLocalStorage={setTokenInLocalStorage} />}></Route>
          <Route path="/cadastro" element={<LoginPage />}></Route>
          <Route path="/habito" element={<FistPage token={token} image={image} concluido={concluido} verificar={verificar}/>}></Route>
          <Route path="/hoje" element={<Hoje token={token} image={image} concluido={concluido} verificar={verificar} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;