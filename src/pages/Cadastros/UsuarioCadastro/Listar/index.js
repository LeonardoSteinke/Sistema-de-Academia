import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';
import firebase from '../../../../api/firebase';

const List = () => {
  const history = useHistory();

  const [user, setUser] = React.useState([]);

  useEffect(() => {
    async function loadStudents() {
      try {
        const db = firebase.firestore();

        const users = db.collection('usuarios');

        const results = await users.get();

        const data = results.docs.map((item) => item.data());

        setUser(data);
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
          { title: 'Nome', field: 'nome' },
          { title: 'Data de nascimento', field: 'dataNascimento' },
          { title: 'E-mail', field: 'email' },
          { title: 'Celular', field: 'celular' },
        ]}
        data={user}
        actions={[
          {
            icon: 'add',
            tooltip: 'Adicionar Usuário',
            isFreeAction: true,
            onClick: () => history.push(`/cadastro/usuario`),
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
        title="Usuário"
      />
    </div>
  );
};

export default List;
