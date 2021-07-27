import React, { useCallback } from "react";

import Grid from "@material-ui/core/Grid";

import StudentForm from "../components/BankForm";
import Container from "../../../../components/Container";

const CreateBank = () => {
  const handlecreateBank = useCallback(
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
            title="Criar Banco"
            actionTitle="Criar"
            handleForm={handlecreateBank}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateBank;
