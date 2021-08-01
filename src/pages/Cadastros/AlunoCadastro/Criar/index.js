import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Grid from '@material-ui/core/Grid';

import StudentForm from '../components/StudentForm';
import Container from '../../../../components/Container';
import firebase from '../../../../api/firebase';

const CreateStudent = () => {
  const { goBack } = useHistory();

  const handleCreateStudent = useCallback(
    async ({ name, email, cpf, phone, cellphone, address }) => {
      const db = firebase.firestore();

      const studentId = uuid();

      await db.collection('usuarios').doc(studentId).set({
        nome: name,
        email,
        cpf,
        telefone: phone,
        celular: cellphone,
        endereco: address,
      });

      await db
        .collection('alunos')
        .doc(uuid())
        .set({
          matricula: db.doc(`/matriculas/FXsewLy5wElFkQJXlWmv`),
          plano: 'Master',
          usuario: db.doc(`/usuarios/${studentId}`),
          venciment: 30,
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
