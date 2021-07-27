import React, { useCallback } from "react";

import Grid from "@material-ui/core/Grid";

import StudentForm from "../components/StudentForm";
import Container from "../../../../components/Container";

const CreateStudent = () => {
  const handleCreateStudent = useCallback(
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
            title="Criar aluno"
            actionTitle="Criar"
            handleForm={handleCreateStudent}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateStudent;
