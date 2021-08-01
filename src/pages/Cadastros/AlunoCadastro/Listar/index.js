import React, { useEffect } from 'react';
import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';
import firebase from '../../../../api/firebase';

const List = () => {
  const history = useHistory();

  const [students, setStudents] = React.useState([]);

  useEffect(() => {
    async function loadStudents() {
      try {
        const db = firebase.firestore();

        const alunosRef = db.collection('alunos');

        const results = await alunosRef.get();

        const data = results.docs.map((item) => item.data());

        data.forEach(async (student) => {
          const getUsuario = await db
            .collection('usuarios')
            .doc(student.usuario.id)
            .get();

          const usuario = getUsuario.data();

          setStudents((state) => [
            ...state,
            {
              name: usuario.nome,
              email: usuario.email,
              enrollment: student.matricula.id,
            },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    }

    loadStudents();
  }, []);

  return (
    <div style={{ minWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Nome', field: 'name' },
          { title: 'E-mail', field: 'email' },
          { title: 'Matrícula', field: 'enrollment' },
        ]}
        data={students}
        actions={[
          {
            icon: 'add',
            tooltip: 'Adicionar Aluno',
            isFreeAction: true,
            onClick: () => history.push(`/cadastro/aluno`),
          },
        ]}
        localization={{
          toolbar: {
            searchPlaceholder: 'Pesquisar',
          },
          header: {
            actions: 'Ações',
          },
        }}
        options={{
          actionsColumnIndex: -1,
          pageSize: 10,
        }}
        title="Alunos"
      />
    </div>
  );
};

export default List;
