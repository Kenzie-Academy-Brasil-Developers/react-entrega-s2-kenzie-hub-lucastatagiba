import LogoImg from "../../assets/logo.svg";
import { ContainerForm, Container } from "./styles";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";

export default function Login() {
  const [apearPass, setApearPass] = useState(false);

  return (
    <Container>
      <img alt="teste " src={`${LogoImg}`} />
      <ContainerForm>
        <h2> Login </h2>
        <label> Email </label>
        <Input placeholder="Digite aqui seu email" />
        <label> Senha </label>
        <Input
          placeholder="Digite aqui sua senha"
          icon={apearPass ? FiEyeOff : FiEye}
          type={apearPass ? "text" : "password"}
          setApearPass={setApearPass}
          apearPass={apearPass}
        />
        <Button width={90} height={38.5} color={"--primaryPink"}>
          Entrar
        </Button>
        <p> Ainda não possui uma conta? </p>
        <Button
          width={90}
          height={38.5}
          color={"--gray-1"}
          historyEndPoint="/register"
        >
          Cadastre-se
        </Button>
      </ContainerForm>
    </Container>
  );
}
