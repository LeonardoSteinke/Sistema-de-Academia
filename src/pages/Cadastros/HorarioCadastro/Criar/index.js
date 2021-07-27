import React, { useCallback } from "react";

import Grid from "@material-ui/core/Grid";

import StudentForm from "../components/TimeForm";
import Container from "../../../../components/Container";

const CreateTime = () => {
  const handleCreateTime = useCallback(async ({ name, email, enrollment }) => {
    alert(`Enviar para Firebase ${name} ${email} ${enrollment}`);
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StudentForm
            title="Criar horário"
            actionTitle="Criar"
            handleForm={handleCreateTime}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateTime;
