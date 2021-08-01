import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Paper from '../../../../../components/Paper';
import Title from '../../../../../components/Title';
import TextField from '../../../../../components/TextField';
import Button from '../../../../../components/Button';

const UserForm = ({ title, actionTitle, handleForm }) => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState(null);
  const [cellphone, setCellphone] = useState('');

  const handleDateChange = (date) => {
    setDataNascimento(date);
  };

  return (
    <Paper>
      <Title title={title} />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              name="name"
              value={name}
              disabled={false}
              setValue={setName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="E-mail"
              name="email"
              value={email}
              disabled={false}
              setValue={setEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Celular"
              name="celular"
              value={cellphone}
              disabled={false}
              setValue={setCellphone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Data de nascimento"
              name="dataNascimento"
              value={dataNascimento}
              disabled={false}
              setValue={setDataNascimento}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Button
                text={actionTitle}
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleForm({
                    name,
                    email,
                    dataNascimento,
                    cellphone,
                  });
                }}
              />
              <Button
                text="Cancelar"
                color="secondary"
                variant="text"
                onClick={() => {
                  history.goBack();
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

UserForm.defaultProps = {
  defaultStudent: null,
  isUpdate: false,
  clearAllFields: false,
};

export default UserForm;
