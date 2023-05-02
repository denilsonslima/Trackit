import HeaderInitial from "../components/Header/HeaderInitial";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../components/Loading";
import { Input, Button, Form, Main, P1 } from "../assets/styles";

export default function SignIn({ setTokenInLocalStorage }) {
  const [form, setForm] = useState({});
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.type]: e.target.value });
  };

  async function autenticacao(e) {
    e.preventDefault();
    setCarregando(true);

    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login`;
      const { data } = await axios.post(url, form);
      setTokenInLocalStorage(data);
      navigate("/hoje");
    } catch (error) {
      alert("Email e/ou senha inválidos");
    } finally {
      setCarregando(false);
      setForm({
        email: "",
        password: "",
      });
    }
  }

  return (
    <Main>
      <HeaderInitial />
      <Form onSubmit={autenticacao}>
        <Input
          data-test="email-input"
          type="email"
          placeholder="email"
          value={form.email}
          onChange={handleForm}
          inputColor={carregando}
          disabled={carregando}
          required
        />
        <Input
          data-test="password-input"
          type="password"
          placeholder="senha"
          value={form.password}
          onChange={handleForm}
          inputColor={carregando}
          disabled={carregando}
          required
        />
        <Button data-test="SignIn-btn" type="submit" disabled={carregando}>
          {carregando ? <Loading height={45} /> : "Entrar"}
        </Button>
      </Form>
      <Link to={"/cadastro"}>
        <P1 data-test="signup-link">Não tem uma conta? Cadastre-se!</P1>
      </Link>
    </Main>
  );
}





