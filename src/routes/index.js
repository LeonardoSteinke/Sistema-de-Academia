import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';

import ProdutoCadastro from '../pages/Cadastros/ProdutoCadastro/Criar';
import ProdutoListar from '../pages/Cadastros/ProdutoCadastro/Listar';

import AlunoCadastro from '../pages/Cadastros/AlunoCadastro/Criar';
import AlunoListar from '../pages/Cadastros/AlunoCadastro/Listar';

import AtividadeCadastro from '../pages/Cadastros/AtividadeCadastro/Criar';
import AtividadeListar from '../pages/Cadastros/AtividadeCadastro/Listar';

import EquipamentoCadastro from '../pages/Cadastros/EquipamentoCadastro/Criar';
import EquipamentoListar from '../pages/Cadastros/EquipamentoCadastro/Listar';

import HorarioCadastro from '../pages/Cadastros/HorarioCadastro/Criar';
import HorarioListar from '../pages/Cadastros/HorarioCadastro/Listar';

import ProfissionalCadastro from '../pages/Cadastros/ProfissionalCadastro/Criar';
import ProfissionalListar from '../pages/Cadastros/ProfissionalCadastro/Listar';

import UsuarioCadastro from '../pages/Cadastros/UsuarioCadastro/Criar';
import UsuarioListar from '../pages/Cadastros/UsuarioCadastro/Listar';

import BancoCadastro from '../pages/Cadastros/BancoCadastro/Criar';
import BancoListar from '../pages/Cadastros/BancoCadastro/Listar';

import Cadastros from '../pages/Cadastros';

import Caixa from '../pages/Caixa';
import Compras from '../pages/Compras';
import Sistema from '../pages/Sistema';
import Vendas from '../pages/Vendas';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" exact component={Cadastros} />

      <Route path="/alunos" exact component={AlunoListar} />
      <Route path="/cadastro/aluno" exact component={AlunoCadastro} />

      <Route path="/equipamento" exact component={EquipamentoListar} />
      <Route
        path="/cadastro/equipamento"
        exact
        component={EquipamentoCadastro}
      />

      <Route path="/atividade" exact component={AtividadeListar} />
      <Route path="/cadastro/atividade" exact component={AtividadeCadastro} />

      <Route path="/produto" exact component={ProdutoListar} />
      <Route path="/cadastro/produto" exact component={ProdutoCadastro} />

      <Route path="/horarios" exact component={HorarioListar} />
      <Route path="/cadastro/horario" exact component={HorarioCadastro} />

      <Route path="/usuario" exact component={UsuarioListar} />
      <Route path="/cadastro/usuario" exact component={UsuarioCadastro} />

      <Route path="/profissional" exact component={ProfissionalListar} />
      <Route
        path="/cadastro/profissional"
        exact
        component={ProfissionalCadastro}
      />

      <Route path="/banco" exact component={BancoListar} />
      <Route path="/cadastro/banco" exact component={BancoCadastro} />

      <Route path="/caixa" exact component={Caixa} />
      <Route path="/compras" exact component={Compras} />
      <Route path="/sistema" exact component={Sistema} />
      <Route path="/vendas" exact component={Vendas} />
    </Switch>
  );
}

export default Routes;
