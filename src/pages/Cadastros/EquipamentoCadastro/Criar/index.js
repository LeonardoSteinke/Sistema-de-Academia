import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Grid from '@material-ui/core/Grid';

import StudentForm from '../components/EquipmentForm';
import Container from '../../../../components/Container';
import firebase from '../../../../api/firebase';

const CreateEquipment = () => {
  const { goBack } = useHistory();
  const handleCreateEquipment = useCallback(
    async ({ name, quantity }) => {
      const db = firebase.firestore();

      const equipmentId = uuid();

      await db.collection('equipamentos').doc(equipmentId).set({
        nome: name,
        quantidade: quantity,
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
