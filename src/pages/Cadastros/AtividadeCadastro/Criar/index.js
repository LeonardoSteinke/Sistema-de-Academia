import React, { useCallback } from 'react';

import Grid from '@material-ui/core/Grid';

import StudentForm from '../components/ActivityForm';
import Container from '../../../../components/Container';

const CreateActivity = () => {
  const handleCreateActivity = useCallback(
    async ({ name, email, enrollment }) => {
      alert(`Enviar para Firebase ${name} ${email} ${enrollment}`);
    },
    []
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
