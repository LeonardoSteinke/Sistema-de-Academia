import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Cadastros from '../pages/Cadastros';
import AtividadeCadastro from '../pages/Cadastros/AtividadeCadastro';
import BancoCadastro from '../pages/Cadastros/BancoCadastro';
import EquipamentoCadastro from '../pages/Cadastros/EquipamentoCadastro';
import HorarioCadastro from '../pages/Cadastros/HorarioCadastro';
import ProdutoCadastro from '../pages/Cadastros/ProdutoCadastro';
import ProfissionalCadastro from '../pages/Cadastros/ProfissionalCadastro';
import UsuarioCadastro from '../pages/Cadastros/UsuarioCadastro';
import AlunoCadastro from '../pages/Alunos/Criar';
import ListarAlunos from '../pages/Alunos/Listar';
import Caixa from '../pages/Caixa';
import Compras from '../pages/Compras';
import Horarios from '../pages/Horarios';
import Sistema from '../pages/Sistema';
import Vendas from '../pages/Vendas';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastro" exact component={Cadastros} />
            <Route path="/cadastro/aluno" exact component={AlunoCadastro} />
            <Route path="/cadastro/atividade" exact component={AtividadeCadastro} />
            <Route path="/cadastro/banco" exact component={BancoCadastro} />
            <Route path="/cadastro/equipamento" exact component={EquipamentoCadastro} />
            <Route path="/cadastro/horario" exact component={HorarioCadastro} />
            <Route path="/cadastro/produto" exact component={ProdutoCadastro} />
            <Route path="/cadastro/profissional" exact component={ProfissionalCadastro} />
            <Route path="/cadastro/usuario" exact component={UsuarioCadastro} />
            <Route path="/alunos" exact component={ListarAlunos} />
            <Route path="/caixa" exact component={Caixa} />
            <Route path="/compras" exact component={Compras} />
            <Route path="/horarios" exact component={Horarios} />
            <Route path="/sistema" exact component={Sistema} />
            <Route path="/vendas" exact component={Vendas} />
        </Switch>
    );
}

export default Routes;