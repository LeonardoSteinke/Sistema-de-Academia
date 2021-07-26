import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

function DefaultLayout() {
  return (
    <>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/cadastro">
          <Button>Cadastros</Button>
        </Link>
        <Link to="/alunos">
          <Button>Alunos</Button>
        </Link>
        <Link to="/horarios">
          <Button>Horários</Button>
        </Link>
        <Link to="/vendas">
          <Button>Vendas</Button>
        </Link>
        <Link to="/compras">
          <Button>Compras</Button>
        </Link>
        <Link to="/caixa">
          <Button>Caixa</Button>
        </Link>
        <Link to="/sistema">
          <Button>Sistema</Button>
        </Link>
      </ButtonGroup>
      <br></br>
      <br></br>
    </>
  );
}

export default DefaultLayout;
