import GlobalStyle from "./globalStyles";
import SignIn from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Cadastro";
import FistPage from "./pages/FistPage";
import { useEffect } from "react";
import Hoje from "./pages/Hojepage";
import Historico from "./pages/Historico";
import useMyProvider from "./context/context";
import { RequiredAuth } from "./context/requiredAuth";

function App() {
  const { setToken, setImage } = useMyProvider();

  function setTokenInLocalStorage(data) {
    setToken(data.token);
    setImage(data.image);
    const exemploSerializado = JSON.stringify(data);
    localStorage.setItem("user", exemploSerializado);
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setToken(data.token);
      setImage(data.image);
    }
  }, [setToken, setImage]);

  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SignIn setTokenInLocalStorage={setTokenInLocalStorage} />}></Route>
          <Route path="/cadastro" element={<SignUp />}></Route>
          <Route path="/habitos" element={<FistPage />}></Route>
          <Route path="/hoje" element={<RequiredAuth><Hoje /></RequiredAuth>}></Route>
          <Route path="/historico" element={<Historico />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
