import HeaderInitial from "../components/Header/HeaderInitial";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { Input, Button, Form, Main, P1 } from "../assets/styles";

export default function LoginPage() {
  const [form, setForm] = useState({});
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function verificar(e) {
    e.preventDefault();
    setCarregando(true);

    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/sign-up`;
      await axios.post(url, form);
      navigate("/");
    } catch (error) {
      alert("Email já existe!");
    } finally {
      setCarregando(false);
      setForm({
        email: "",
        password: "",
        name: '',
        image: ''
      })
    }
  }

  return (
    <Main>
      <HeaderInitial />
      <Form onSubmit={verificar}>
        <Input
          data-test="email-input"
          type="email"
          name="email"
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
          name="password"
          placeholder="senha"
          value={form.password}
          onChange={handleForm}
          inputColor={carregando}
          disabled={carregando}
          required
        />
        <Input
          data-test="user-name-input"
          type="text"
          name="name"
          placeholder="nome"
          value={form.name}
          onChange={handleForm}
          inputColor={carregando}
          disabled={carregando}
          required
        />
        <Input
          data-test="user-image-input"
          type="url"
          name="image"
          placeholder="foto"
          value={form.image}
          onChange={handleForm}
          inputColor={carregando}
          disabled={carregando}
          required
        />
        <Button data-test="signup-btn" type="submit" disabled={carregando}>
          {carregando ? <Loading width={100} height={100} /> : "Cadastrar"}
        </Button>
      </Form>
      <Link to={"/"}>
        <P1 data-test="login-link">Já tem uma conta? Faça login!</P1>
      </Link>
    </Main>
  );
}
