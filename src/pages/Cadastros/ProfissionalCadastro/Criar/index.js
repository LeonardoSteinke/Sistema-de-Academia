import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Grid from '@material-ui/core/Grid';

import ProfessionalForm from '../components/ProfessionalForm';
import Container from '../../../../components/Container';
import firebase from '../../../../api/firebase';

const CreateProfessional = () => {
  const { goBack } = useHistory();

  const handleCreateProfessional = useCallback(
    async ({ name, cargo, salario }) => {
      const db = firebase.firestore();

      const professionalId = uuid();

      await db.collection('usuarios').doc(professionalId).set({
        nome: name,
      });

      await db
        .collection('profissionais')
        .doc(uuid())
        .set({
          cargo,
          salario,
          usuario: db.doc(`/usuarios/${professionalId}`),
        });

      goBack();
    },
    [goBack]
  );

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProfessionalForm
            title="Cadastrar Profissional"
            actionTitle="Criar"
            handleForm={handleCreateProfessional}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateProfessional;
