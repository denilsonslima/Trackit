import GlobalStyle from "./globalStyles";
import InitialPage from "./pages/InitialPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FistPage from "./pages/FistPage";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("")
  const [image, setImage] = useState("")
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage setToken={setToken} setImage={setImage}/>}></Route>
          <Route path="/cadastro" element={<LoginPage />}></Route>
          <Route path="/hoje" element={<FistPage token={token} image={image}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;