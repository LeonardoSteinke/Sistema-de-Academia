import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import 'date-fns';
import Paper from '../../../../../components/Paper';
import Title from '../../../../../components/Title';
import TextField from '../../../../../components/TextField';
import Button from '../../../../../components/Button';

const StudentForm = ({ title, actionTitle, handleForm }) => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

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
              label="Quantidade"
              name="quantity"
              value={quantity}
              disabled={false}
              setValue={setQuantity}
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
                    quantity,
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
