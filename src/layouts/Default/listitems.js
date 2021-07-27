import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import {
  Assignment,

  Subject
} from '@material-ui/icons';

import { useHistory } from 'react-router-dom';

export const MainListItems = () => {
  const history = useHistory();

  return (
    <div>
      <ListItem button onClick={() => history.push('/alunos')}>
        <ListItemIcon>
          <Subject />
        </ListItemIcon>
        <ListItemText primary="Alunos" />
      </ListItem>
      <ListItem button onClick={() => history.push('/horarios')}>
        <ListItemIcon>
          <Subject />
        </ListItemIcon>
        <ListItemText primary="Horários" />
      </ListItem>
      <ListItem button onClick={() => history.push('/vendas')}>
        <ListItemIcon>
          <Subject />
        </ListItemIcon>
        <ListItemText primary="Vendas" />
      </ListItem>
      <ListItem button onClick={() => history.push('/compras')}>
        <ListItemIcon>
          <Subject />
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
          <Subject />
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
