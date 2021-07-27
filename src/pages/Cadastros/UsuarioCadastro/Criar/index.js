import React, { useCallback } from "react";

import Grid from "@material-ui/core/Grid";

import UserForm from "../components/UserForm";
import Container from "../../../../components/Container";

const CreateUser = () => {
  const handleCreateUser = useCallback(async ({ name, email, enrollment }) => {
    alert(`Enviar para Firebase ${name} ${email} ${enrollment}`);
  }, []);

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
