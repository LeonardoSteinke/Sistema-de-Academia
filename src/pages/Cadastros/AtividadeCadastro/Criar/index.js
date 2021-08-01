import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Grid from '@material-ui/core/Grid';

import StudentForm from '../components/ActivityForm';
import Container from '../../../../components/Container';
import firebase from '../../../../api/firebase';

const CreateActivity = () => {
  const { goBack } = useHistory();

  const handleCreateActivity = useCallback(
    async ({ name, locale, days, teacher, vagas }) => {
      const db = firebase.firestore();

      const activityId = uuid();

      const teacherId = uuid();

      await db.collection('usuarios').doc(teacherId).set({
        nome: teacher,
      });

      await db
        .collection('atividades')
        .doc(activityId)
        .set({
          nome: name,
          local: locale,
          dias: days,
          vagas,
          professor: db.doc(`/usuarios/${teacherId}`),
        });

      goBack();
    },
    [goBack]
  );

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StudentForm
            title="Cadastrar Atividade"
            actionTitle="Criar"
            handleForm={handleCreateActivity}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateActivity;
