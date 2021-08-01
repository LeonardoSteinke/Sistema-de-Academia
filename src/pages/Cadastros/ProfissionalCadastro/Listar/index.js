import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';
import firebase from '../../../../api/firebase';

const List = () => {
  const history = useHistory();

  const [professional, setProfessional] = React.useState([]);

  useEffect(() => {
    async function loadProfessional() {
      try {
        const db = firebase.firestore();

        const professionalRef = db.collection('profissionais');

        const results = await professionalRef.get();

        const data = results.docs.map((item) => item.data());

        data.forEach(async (prof) => {
          const getUsuario = await db
            .collection('usuarios')
            .doc(prof.usuario.id)
            .get();

          const usuario = getUsuario.data();

          setProfessional((state) => [
            ...state,
            {
              name: usuario.nome,
              cargo: prof.cargo,
              salario: prof.salario,
            },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    }

    loadProfessional();
  }, []);

  return (
    <div style={{ minWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Nome', field: 'name' },
          { title: 'Cargo', field: 'cargo' },
          { title: 'Salário', field: 'salario' },
        ]}
        data={professional}
        actions={[
          {
            icon: 'add',
            tooltip: 'Adicionar profissional',
            isFreeAction: true,
            onClick: () => history.push(`/cadastro/profissional`),
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
        title="Profissionais"
      />
    </div>
  );
};

export default List;
