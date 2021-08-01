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

const StudentForm = ({ title, actionTitle, handleForm }) => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState(null);
  const [phone, setPhone] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [address, setAddress] = useState('');

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
              label="CPF"
              name="cpf"
              value={cpf}
              disabled={false}
              setValue={setCpf}
            />
          </Grid>
          <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                name="dataNascimento"
                label="Data de nascimento"
                value={dataNascimento}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
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
              label="Telefone"
              name="telefone"
              value={phone}
              disabled={false}
              setValue={setPhone}
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
              label="Endereço"
              name="endereco"
              value={address}
              disabled={false}
              setValue={setAddress}
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
                    cpf,
                    phone,
                    cellphone,
                    address,
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

StudentForm.defaultProps = {
  defaultStudent: null,
  isUpdate: false,
  clearAllFields: false,
};

export default StudentForm;
