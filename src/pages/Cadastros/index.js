import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Link to="/cadastro/aluno">
        <Button variant="contained" color="primary">
          Cadastro Aluno
        </Button>
      </Link>
      <Link to="/cadastro/atividade">
        <Button variant="contained" color="primary">
          Cadastro Atividade
        </Button>
      </Link>
      <Link to="/cadastro/banco">
        <Button variant="contained" color="primary">
          Cadastro Banco
        </Button>
      </Link>
      <Link to="/cadastro/equipamento">
        <Button variant="contained" color="primary">
          Cadastro de Equipamento
        </Button>
      </Link>
      <Link to="/cadastro/horario">
        <Button variant="contained" color="primary">
          Cadastro de horários
        </Button>
      </Link>
      <Link to="/cadastro/produto">
        <Button variant="contained" color="primary">
          Cadastro de produtos
        </Button>
      </Link>
      <Link to="/cadastro/profissional">
        <Button variant="contained" color="primary">
          Cadastro de profissionais
        </Button>
      </Link>
      <Link to="/cadastro/usuario">
        <Button variant="contained" color="primary">
          Cadastro usuários
        </Button>
      </Link>
    </>
  );
}

export default Home;
