import GlobalStyle from "./globalStyles";
import InitialPage from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Cadastro";
import FistPage from "./pages/FistPage";
import { useEffect } from "react";
import Hoje from "./pages/Hojepage";
import Historico from "./pages/Historico";
import useMyProvider from "./context/context";

function App() {
  const { token, setToken, setImage, setConcluido } = useMyProvider()

  function setTokenInLocalStorage(dados) {
    setToken(dados.token);
    setImage(dados.image)
    const exemploSerializado = JSON.stringify(dados)
    localStorage.setItem('lista', exemploSerializado);
  }

  // function verificar(dados) {
  //   const total = dados.length
  //   const feito = dados.filter((e) => e.done === true)
  //   const porcentagem = Number((feito.length / total) * 100).toFixed(0)
  //   setConcluido(porcentagem)
  // }

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
          <Route path="/habitos" element={<FistPage />}></Route>
          <Route path="/hoje" element={<Hoje />}></Route>
          <Route path="/historico" element={<Historico />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;