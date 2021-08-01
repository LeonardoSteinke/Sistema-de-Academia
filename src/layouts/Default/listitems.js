import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import {
  Assignment,
  Subject,
  Store,
  StoreOutlined,
  Schedule,
  Person,
  Settings,
  DirectionsBike,
  FitnessCenter,
  ShoppingBasket,
  People,
  AccountBalance,
  PersonOutline,
} from '@material-ui/icons';

import { useHistory } from 'react-router-dom';

export const MainListItems = () => {
  const history = useHistory();

  return (
    <div>
      <ListItem button onClick={() => history.push('/alunos')}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Alunos" />
      </ListItem>
      <ListItem button onClick={() => history.push('/horarios')}>
        <ListItemIcon>
          <Schedule />
        </ListItemIcon>
        <ListItemText primary="Horários" />
      </ListItem>
      <ListItem button onClick={() => history.push('/atividade')}>
        <ListItemIcon>
          <DirectionsBike />
        </ListItemIcon>
        <ListItemText primary="Atividades" />
      </ListItem>
      <ListItem button onClick={() => history.push('/banco')}>
        <ListItemIcon>
          <AccountBalance />
        </ListItemIcon>
        <ListItemText primary="Banco" />
      </ListItem>
      <ListItem button onClick={() => history.push('/equipamento')}>
        <ListItemIcon>
          <FitnessCenter />
        </ListItemIcon>
        <ListItemText primary="Equipamentos" />
      </ListItem>
      <ListItem button onClick={() => history.push('/produto')}>
        <ListItemIcon>
          <ShoppingBasket />
        </ListItemIcon>
        <ListItemText primary="Produtos" />
      </ListItem>
      <ListItem button onClick={() => history.push('/profissional')}>
        <ListItemIcon>
          <PersonOutline />
        </ListItemIcon>
        <ListItemText primary="Profissionais" />
      </ListItem>
      <ListItem button onClick={() => history.push('/usuario')}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Usuários" />
      </ListItem>
      <ListItem button onClick={() => history.push('/vendas')}>
        <ListItemIcon>
          <StoreOutlined />
        </ListItemIcon>
        <ListItemText primary="Vendas" />
      </ListItem>
      <ListItem button onClick={() => history.push('/compras')}>
        <ListItemIcon>
          <Store />
        </ListItemIcon>
        <ListItemText primary="Compras" />
      </ListItem>
      <ListItem button onClick={() => history.push('/caixa')}>
        <ListItemIcon>
          <Subject />
        </ListItemIcon>
        <ListItemText primary="Caixa" />
      </ListItem>
      <ListItem button onClick={() => history.push('/sistema')}>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Sistema" />
      </ListItem>
    </div>
  );
};

export const SecondaryListItems = () => {
  return (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem>
    </div>
  );
};
