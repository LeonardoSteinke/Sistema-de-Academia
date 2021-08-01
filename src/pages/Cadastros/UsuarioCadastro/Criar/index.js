import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Grid from '@material-ui/core/Grid';

import UserForm from '../components/UserForm';
import Container from '../../../../components/Container';
import firebase from '../../../../api/firebase';

const CreateUser = () => {
  const { goBack } = useHistory();

  const handleCreateUser = useCallback(
    async ({ name, email, cellphone, dataNascimento }) => {
      const db = firebase.firestore();

      await db.collection('usuarios').doc(uuid()).set({
        nome: name,
        email,
        celular: cellphone,
        dataNascimento,
      });

      goBack();
    },
    [goBack]
  );

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UserForm
            title="Criar usuário"
            actionTitle="Criar"
            handleForm={handleCreateUser}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateUser;
