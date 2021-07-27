import React, { useCallback } from "react";

import Grid from "@material-ui/core/Grid";

import ProfessionalForm from "../components/ProfessionalForm";
import Container from "../../../../components/Container";

const CreateProfessional = () => {
  const handleCreateProfessional = useCallback(
    async ({ name, email, enrollment }) => {
      alert(`Enviar para Firebase ${name} ${email} ${enrollment}`);
    },
    []
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
