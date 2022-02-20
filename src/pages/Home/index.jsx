import LogoImg from "../../assets/logo.svg";
import { ContainerCards, Container } from "./styles";
import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Home() {
  const [apearPass, setApearPass] = useState(false);
  const [isfaded, setIsFaded] = useState(true);

  return (
    <Container>
      <div className="navBar">
        <div className="navContent">
          <img alt="teste " src={`${LogoImg}`} />

          <Button
            width={25.5}
            maxWidth={55.49}
            height={25.58}
            color={"--gray-3"}
            fontSize={9.59}
            historyEndPoint="/login"
          >
            Sair
          </Button>
        </div>
      </div>
      <hr className="hrNav"></hr>
      <div className="header">
        <h1> Olá, Samuel Leão</h1>
        <h2> Primeiro módulo </h2>
        <span>(Introdução ao Frontend)</span>
      </div>
      <hr className="hrHeader"></hr>
      <div className="cardHeader">
        <h1 className="CardsTitle"> Tecnologias</h1>
        <Button
          width={14.5}
          maxWidth={32}
          height={32}
          color={"--gray-3"}
          fontSize={25}
        >
          +
        </Button>
      </div>
      <ContainerCards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContainerCards>
    </Container>
  );
}
