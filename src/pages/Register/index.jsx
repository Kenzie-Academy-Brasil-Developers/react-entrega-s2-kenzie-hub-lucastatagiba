import LogoImg from "../../assets/logo.svg";
import { ContainerForm, Container } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";

export default function Register() {
  const [apearPass, setApearPass] = useState(false);
  const [isfaded, setIsFaded] = useState(true);

  return (
    <Container>
      <div className="cabecalhoRegister">
        <img alt="teste " src={`${LogoImg}`} />
        <Button
          width={27.5}
          height={25.58}
          color={"--gray-3"}
          fontSize={9.59}
          historyEndPoint="/login"
        >
          Voltar
        </Button>
      </div>

      <ContainerForm>
        <h2> Crie sua conta </h2>
        <p> Rapido e grátis, vamos nessa </p>

        <label> Nome </label>
        <Input placeholder="Digite aqui seu nome" />
        <label> Email </label>
        <Input placeholder="Digite aqui seu email" type="text" />
        <label> Senha </label>
        <Input placeholder="Digite aqui sua senha" />
        <label> Confirmar senha </label>
        <Input placeholder="Confirme sua senha" />
        <label> Selecionar módulo </label>
        <select name="selecionarModulo">
          <option value="Primeiro módulo"> Primeiro módulo </option>
          <option value="Primeiro módulo"> Segundo módulo </option>
          <option value="Primeiro módulo"> Terceiro módulo </option>
          <option value="Primeiro módulo"> Quarto módulo </option>
          <option value="Primeiro módulo"> Quinto módulo </option>
          <option value="Primeiro módulo"> Sexto módulo </option>
        </select>
        <Button
          width={90}
          height={38.5}
          color={isfaded ? "--primaryNegativePink" : "--primaryPink"}
        >
          Cadastrar
        </Button>
      </ContainerForm>
    </Container>
  );
}
