import React, { useCallback } from "react";

import Grid from "@material-ui/core/Grid";

import StudentForm from "../components/EquipmentForm";
import Container from "../../../../components/Container";

const CreateEquipment = () => {
  const handleCreateEquipment = useCallback(
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
            title="Criar equipamento"
            actionTitle="Criar"
            handleForm={handleCreateEquipment}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateEquipment;
