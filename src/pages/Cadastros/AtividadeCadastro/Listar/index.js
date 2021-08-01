import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';
import firebase from '../../../../api/firebase';

const List = () => {
  const history = useHistory();

  const [activity, setActivity] = React.useState([]);

  useEffect(() => {
    async function loadActivities() {
      try {
        const db = firebase.firestore();

        const atividadesRef = db.collection('atividades');

        const results = await atividadesRef.get();

        const data = results.docs.map((item) => item.data());

        data.forEach(async (activ) => {
          const getProfessor = await db
            .collection('usuarios')
            .doc(activ.professor.id)
            .get();

          const professor = getProfessor.data();

          setActivity((state) => [
            ...state,
            {
              name: activ.nome,
              days: activ.dias,
              locale: activ.local,
              teacher: professor.nome,
              vagas: activ.vagas,
            },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    }

    loadActivities();
  }, []);

  return (
    <div style={{ minWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Nome', field: 'name' },
          { title: 'Local', field: 'locale' },
          { title: 'Dias', field: 'days' },
          { title: 'Professor', field: 'teacher' },
          { title: 'Vagas', field: 'vagas' },
        ]}
        data={activity}
        actions={[
          {
            icon: 'add',
            tooltip: 'Adicionar Atividade',
            isFreeAction: true,
            onClick: () => history.push(`/cadastro/atividade`),
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
        title="Atividades"
      />
    </div>
  );
};

export default List;
