import GlobalStyle from "./globalStyles";
import InitialPage from "./pages/InitialPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FistPage from "./pages/FistPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />}></Route>
          <Route path="/cadastro" element={<LoginPage />}></Route>
          <Route path="/hoje" element={<FistPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* <BrowserRouter>
<NavBar />
<Routes>
  
  <Route path="/sessoes/:idFilme" element={<Horario infoFilme={infoFilme} setInfoFilme={setInfoFilme}/>}></Route>
  <Route path="/assentos/:idSessao" element={<Assentos infoFilme={infoFilme} setInfoFilme={setInfoFilme}/>}></Route>
  <Route path="/sucesso" element={<Confirmacao infoFilme={infoFilme}/>}/>
</Routes>
</BrowserRouter> */}